function createPostElement(post) {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    const title = document.createElement("h3");
    title.textContent = post.title;
    postElement.appendChild(title);

    const body = document.createElement("p");
    body.textContent = post.body;
    postElement.appendChild(body);

    return postElement;
}

// Функция для получения постов из API
function fetchPosts(apiUrl, containerId) {
    return fetch(apiUrl)
        .then(response => response.json())
        .then(post => {

            const postsContainer = document.getElementById(containerId);
            postsContainer.appendChild(createPostElement(post));
        })
        .catch(error => console.error(`Error fetching posts from ${apiUrl}:`, error));
}

// Создаем массив секций
const sections = [
    { elementId: "userDataSection1", apiUrl: 'https://jsonplaceholder.typicode.com/posts/1', containerId: "postsContainer1" },
    { elementId: "userDataSection2", apiUrl: 'https://jsonplaceholder.typicode.com/posts/2', containerId: "postsContainer2" },
    { elementId: "userDataSection3", apiUrl: 'https://jsonplaceholder.typicode.com/posts/3', containerId: "postsContainer3" }
];

const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = sections
                    .find(section => section.elementId === entry.target.id);

                if (section) {
                    fetchPosts(section.apiUrl, section.containerId);
                    observer.unobserve(entry.target);
                }
            }
        })
    }
)

sections.forEach(section => {
    const userDataSection = document.getElementById(section.elementId);
    observer.observe(userDataSection);
})




















