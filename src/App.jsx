function App() {
  return (
    <>
      <div className="container-fluid">
        <h1 className="text-primary-light-coral h1-small">Quick waltz</h1>
        <h1 className="text-secondary-rapture-blue">Quick waltz</h1>
        <h2 className="text-secondary-deep-jungle-green">Quick waltz</h2>
        <h3 className="text-secondary-deep-jungle-green">Quick waltz</h3>
        <p className="mb-4">
          Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
          luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing,
          commodo quis, gravida id, est. Sed lectus. Praesent elementum
          hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat,
          lacus a ultrices sagittis, mi neque. Orbi purus libero, faucibus
          adipiscing, commodo quis, gravida id, est. Sed lectus.Sed egestas,
          ante et vulputate volutpat, eros pede sempe.
        </p>
        <p className="body-2">
          Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
          luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing,
          commodo quis, gravida id, est. Sed lectus. Praesent elementum
          hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat,
          lacus a ultrices sagittis, mi neque. Orbi purus libero, faucibus
          adipiscing, commodo quis, gravida id, est. Sed lectus.Sed egestas,
          ante et vulputate volutpat, eros pede sempe.
        </p>
      </div>
      <div className="wrapper-light-button bg-secondary-sacramento-state-green py-3">
        <div className="container-fluid">
          <button className="btn btn-primary-light">contact us</button>
          <button className="btn btn-primary-light disabled">contact us</button>
        </div>
      </div>
      <div className="wrapper-dark-button p-3">
        <div className="container-fluid">
          <button className="btn btn-primary-dark">contact us</button>
          <button className="btn btn-primary-dark disabled">contact us</button>
        </div>
      </div>
      <div className="wrapper-dark-button secondary-buttons bg-secondary-sacramento-state-green p-3">
        <div className="container-fluid">
          <button className="btn btn-secondary">contact us</button>
          <button className="btn btn-secondary disabled">contact us</button>
        </div>
      </div>
    </>
  );
}

export default App;
