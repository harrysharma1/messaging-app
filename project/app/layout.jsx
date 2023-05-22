import '@styles/globals.css'
export const metadata={
    title:'Project',
    description:'Discover & Share AI',
}
const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient' />
            </div>
            <main className='app'>
                {children}
            </main>
        </body>
    </html>
  )
}
export default RootLayout
