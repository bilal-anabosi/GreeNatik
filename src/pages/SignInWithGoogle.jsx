import { useEffect } from 'react'

export default function SignInWithGoogle() {
    const callbackResponse = (response) => {
        console.log('Response:', response);
    };
    useEffect(() => {
        const loadGoogleSignIn = () => {
            const script = document.createElement('script');
            script.src = 'https://accounts.google.com/gsi/client';
            script.onload = () => {
                window.google.accounts.id.initialize({
                    client_id:'519740296160-3v68qmu8r3nt7eto5m37fma6i4ll04mu.apps.googleusercontent.com', 
                    callback: callbackResponse,
                    
                });
                window.google.accounts.id.renderButton(
                    document.getElementById('signInButton'), {
                    theme: 'outline',
                    text: 'signup_with',
                    size: 'large',
                    locale: 'en',
                },
                );
            };
            document.body.appendChild(script);
        };

        loadGoogleSignIn();
    }, []);

    return (
        <div id="signInButton" ></div>
    );
}
