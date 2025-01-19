const Section = ({id, children}) => {
    return (
        <section id={id} style={styles.section}>
            {children}
        </section>
    );
};

const styles = {
    section: {
        display: 'flex', 
        height: '200px', 
        margin: '10px',
        justifyContent: 'space-between',
        padding: '20px',
        border: '1px solid black',
        borderRadius: '10px',
        boxShadow: '5px 5px 15px rgba(0,0,0,0.3)',
        transition: '0.3s',
        backgroundColor: 'white',
        ':hover': {
            backgroundColor: '#FFCCCC' // light red color
        }
    }
};

export default Section;