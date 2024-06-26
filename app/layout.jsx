import Navbar from '@components/Navbar';
import Provider from '@components/Provider';
import '@styles/globals.css';

export const metadata = {
    title: "Ai-Prompt-Generator",
    description: "Discover & Share AI Prompts"
}

const Rootlayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <Provider>
                    <div className='main'>
                        <div className='gradient' />
                    </div>
                    <main className='app'>
                        <Navbar />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default Rootlayout;