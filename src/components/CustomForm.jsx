import React, { useState, useEffect } from 'react';

function CustomForm({ status, message, onValidated }) {

    
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');

    useEffect(() => {
        if (status === "success") clearFields();
    }, [status]);

    const clearFields = () => {
        setFirstName('');
        setEmail('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && firstName && email.indexOf("@") > -1) {
            onValidated({
                MERGE0: email,
                MERGE1: firstName,
            });
        }
    }

    return (
        <form
            className="mc__form"
            onSubmit={(e) => handleSubmit(e)}
        >
            <h3 className="mc__title">
                {status === "success"
                    ? "Success!"
                    : "Unete a la comunidad Gálapago."
                }
            </h3>

            {status === "sending" && (
                <div className="mc__alert mc__alert--sending">
                    Enviando...
                </div>
            )}
            {status === "error" && (
                <div
                    className="mc__alert mc__alert--error"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                    className="mc__alert mc__alert--success"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status !== "success" ? (
                <div className="mc__field-container">
                    <input
                        label="First Name"
                        onChange={(e) => setFirstName(e.target.value)}
                        type="text"
                        value={firstName}
                        placeholder="Jane"
                        required
                    />

                    <input
                        label="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        value={email}
                        placeholder="your@email.com"
                        required
                    />
                </div>
            ) : null}

            {
                status === 'success' ? (
                    <button
                        className="g__justify-self-center"
                    >
                        Close
                    </button>
                ) : (
                    <input className='inputsubscribe'
                        label="subscribe"
                        type="submit"
                    />
                )
            }
        </form>
    );
}

export default CustomForm;
