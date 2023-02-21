function Greetings({lang, children}) {

    let greeting = '';

        switch (lang) {
            case 'de':
                greeting = 'Hallo';
                break;
            case 'en':
                greeting = 'English';
                break;
            case 'es':
                greeting = 'Hola';
                break;
            case 'fr':
                greeting = 'Bonjour'
                break;
            default:
                greeting = 'Unknown'
                break;
        }

    return (
      <div className="greeting">
        <p>{greeting} {children}</p>
      </div>
    );
  }
  
  export default Greetings;