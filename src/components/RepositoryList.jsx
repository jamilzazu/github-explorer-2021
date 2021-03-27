const repostitoryName = 'Unform2';

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de reopostórios</h1>

      <ul>
        <li>
          <strong>{repostitoryName}</strong>
          <p>Forms in React</p>

          <a href="" className="href">
            Acessar repositório
          </a>
        </li>

        <li>
          <strong>unform</strong>
          <p>Forms in React</p>

          <a href="" className="href">
            Acessar repositório
          </a>
        </li>

        <li>
          <strong>unform</strong>
          <p>Forms in React</p>

          <a href="" className="href">
            Acessar repositório
          </a>
        </li>
      </ul>
    </section>
  )
}