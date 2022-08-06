import EmailForm from "./EmailForm";

export default function CollapseContact() {
  return (
    <div className="d-flex p-2 flex-column">
      <div className="d-flex justify-content-evenly">
        <button
          className="btn btn-success"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#phone"
          aria-expanded="false"
          aria-controls="phone"
        >
          Phone
        </button>
        <button
          className="btn btn-success"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#email"
          aria-expanded="false"
          aria-controls="email"
        >
          Email
        </button>
      </div>
      <div>
        <div className="collapse" id="email">
          <EmailForm />
        </div>
        <div className="collapse" id="phone">
          <div className="card card-body">
            <p>(812)318-2870</p>
          </div>
        </div>
      </div>
    </div>
  );
}
