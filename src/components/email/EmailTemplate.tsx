const EmailTemplate = ({ name }: { name: string }) => {
    return (
        <div>
            <p>Dobrý deň p. {name}</p>
            <p>Posielame Vám informovaný súhlas k zákroku zo dňa {new Date().toLocaleDateString('sk')} v zubnej ambulancii v prílohe</p>
        </div>
    );
}

export default EmailTemplate;