// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from "@apollo/client";

// Define the query
const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      title
      author
      year
    }
  }
`;

// Create a component that uses the `useQuery` hook
function DisplayBooks() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.books.map(({ id, title, author, year }) => (
    <div key={id}>
      <h3>{title}</h3>
      <p>
        <b>Author:</b> {author}
      </p>
      <p>
        <b>Year:</b> {year}
      </p>
      <br />
    </div>
  ));
}

// Export the component
export default function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <br />
      <DisplayBooks />
    </div>
  );
}
