import { useParams, Link } from 'react-router';
import { branches } from '../data/branchesData';

function BranchDetails({ branchId }: { branchId: string }) {
  console.log('Branch ID:', branchId);
  const branch = branches.find((branch) => branch.id === branchId);

  if (!branch) {
    return <p>Branch not found. Please select a valid branch.</p>;
  } else {
    return (
      <div>
        <h2>{branch.name}</h2>
        <p><strong>Address:</strong> {branch.address}</p>
        <p><strong>Phone:</strong> {branch.phone}</p>
        <hr />
        <Link to="/branches" className="back-link">Back to Branch List</Link>
      </div>
    );
  }
}

function BranchList() {
  return (
    <>
      <p className="page-description">Select a branch to view its details:</p>
      <ul className="branches-list">
        {branches.map((branch) => (
          <li key={branch.id} className="branch-item">
            <Link to={`/branches/${branch.id}`} className="branch-link">
              {branch.name}
            </Link>
          </li>
        ))}
      </ul>
      <hr />
    </>
  );
}

export default function Branches() {
  const { branchId } = useParams();

  return (
    <div className="branches-page">
      <h1 className="page-title">Branches</h1>
      {!branchId ? <BranchList /> : <BranchDetails branchId={branchId ?? ''} />}
    </div>
  );
}
