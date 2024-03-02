import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GoogleLoginButton = ({ clientId }) => {
    const navigate = useNavigate();

    useEffect(() => {
        window.gapi.load('auth2', () => {
            window.gapi.auth2.init({
                client_id: clientId,
            });
        });
    }, [clientId]);

    const handleLogin = () => {
        const auth2 = window.gapi.auth2.getAuthInstance();
        auth2.signIn().then(googleUser => {
            const profile = googleUser.getBasicProfile();
            console.log('Token || ' + googleUser.getAuthResponse().id_token);
            // Send this token to your server for verification and further processing
            navigate('/'); // Navigate or update state as needed
        }).catch(error => {
            console.error('Login Failed:', error);
        });
    };

    return (
        <button onClick={handleLogin} className="btn btn-outline-primary w-100 mb-4">
            Link with Google
        </button>
    );
};

export default GoogleLoginButton;
