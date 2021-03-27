import { RepositoryItem } from "./RepositoryItem";

const repostitory = {
  name: "unform2",
  description: "Forms in React",
  link: "https://github.com/unform/unform"
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de reopostórios</h1>

      <ul>
        <RepositoryItem repository={repostitory} />
        <RepositoryItem repository={repostitory} />
        <RepositoryItem repository={repostitory} />
      </ul>
    </section>
  )
}