export function Home() {
    const element = document.createDocumentFragment();
    const greeting = document.createElement("h1");
    greeting.textContent = "Willkommen, bienvenue, welcome";
    element.appendChild(greeting);
    const introduction = document.createElement("p");
    introduction.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sint nisi facilis, veniam, aspernatur cum optio nihil laboriosam totam praesentium earum impedit ad at! Dolor dolore totam soluta aut quibusdam aspernatur, dolorem veniam ullam deserunt distinctio asperiores omnis dolorum debitis eligendi nisi, placeat ad repellendus corrupti? Nostrum est similique magni."
    element.appendChild(introduction);

    return element
}