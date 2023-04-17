const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Kielce, Polska</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram / WhatsApp / Messenger</h2>
            <p>+48 570 538 817</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:illiayanchenko3@gmail.com">
                illiayanchenko3@gmail.com
              </a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
