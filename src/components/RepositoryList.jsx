import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";

const repository = {
  name: "unform2",
  description: "Forms in React",
  link: "https://github.com/unform/unform"
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/jamilzazu/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de reopostórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}