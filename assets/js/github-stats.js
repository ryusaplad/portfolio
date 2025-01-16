// Initialize GitHub Calendar
document.addEventListener('DOMContentLoaded', function () {
    // Initialize GitHub Calendar
    GitHubCalendar(".github-calendar", "ryusaplad", {
        responsive: true,
        tooltips: true,
        global_stats: false,
    });

    // Check cache first before fetching
    const cachedData = getCachedData();
    if (cachedData) {
        updateUIFromCache(cachedData);
    } else {
        fetchGitHubStats();
    }
});

function getCachedData() {
    const cached = localStorage.getItem('github-stats');
    if (!cached) return null;

    const { data, timestamp } = JSON.parse(cached);
    // Check if cache is older than 1 hour (3600000 milliseconds)
    if (Date.now() - timestamp > 3600000) {
        localStorage.removeItem('github-stats');
        return null;
    }

    return data;
}

function updateUIFromCache(data) {
    document.getElementById('repo-count').textContent = data.repoCount;
    document.getElementById('stars-count').textContent = data.totalStars;
    document.getElementById('commits-count').textContent = data.totalCommits;
}

function cacheData(data) {
    const cacheObject = {
        timestamp: Date.now(),
        data: data
    };
    localStorage.setItem('github-stats', JSON.stringify(cacheObject));
}

function fetchGitHubStats() {
    // Fetch GitHub Stats
    fetch('https://api.github.com/users/ryusaplad')
        .then(response => response.json())
        .then(data => {
            document.getElementById('repo-count').textContent = data.public_repos;
            return data.public_repos;
        })
        .then(repoCount => {
            // Fetch stars and commits count
            fetch('https://api.github.com/users/ryusaplad/repos')
                .then(response => response.json())
                .then(repos => {
                    const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
                    document.getElementById('stars-count').textContent = totalStars;

                    // Fetch commit counts for each repo with pagination
                    Promise.all(repos.map(repo => fetchAllCommits(repo.name)))
                        .then(commitCounts => {
                            const totalCommits = commitCounts.reduce((acc, count) => acc + count, 0);
                            document.getElementById('commits-count').textContent = totalCommits;

                            // Cache the results
                            cacheData({
                                repoCount,
                                totalStars,
                                totalCommits
                            });
                        });
                });
        })
        .catch(error => {
            console.error('Error fetching GitHub data:', error);
            document.getElementById('repo-count').textContent = 'N/A';
            document.getElementById('stars-count').textContent = 'N/A';
            document.getElementById('commits-count').textContent = 'N/A';
        });
}

async function fetchAllCommits(repoName) {
    let page = 1;
    let allCommits = 0;

    while (true) {
        try {
            const response = await fetch(`https://api.github.com/repos/ryusaplad/${repoName}/commits?page=${page}&per_page=100`);
            const commits = await response.json();

            if (!commits || !commits.length || commits.message === "Git Repository is empty.") {
                break;
            }

            allCommits += commits.length;

            if (commits.length < 100) {
                break;
            }

            page++;
        } catch (error) {
            console.log(`Error fetching commits for ${repoName} on page ${page}:`, error);
            break;
        }
    }

    return allCommits;
}