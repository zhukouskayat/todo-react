const FormattedDate = ({ dateTime }) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'};
    const date = new Date(dateTime);
    const formattedDate = date.toLocaleString('en-Ru', options);

    return formattedDate;
}

export default FormattedDate;