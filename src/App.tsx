import Hero from './components/Hero'
import InfoSection from './components/InfoSection'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      <InfoSection 
        title="Track Everything"
        content="Never run out of essentials again. Homanize helps you keep track of every item in your home, from pantry staples to cleaning supplies. Smart notifications remind you when stock is running low, so you always know what to buy."
        alignment="right"
      />
      
      <InfoSection 
        title="Expiry Alerts"
        content="Say goodbye to wasted food and expired products. Homanize monitors expiration dates and sends timely alerts, helping you use items before they go bad. Save money and reduce waste effortlessly."
        alignment="left"
      />
      
      <InfoSection 
        title="Organize by Room"
        content="Keep your entire home organized room by room. From the kitchen and bathroom to the garage and storage closet, Homanize categorizes your inventory so you always know where everything is stored."
        alignment="right"
      />
      
      <InfoSection 
        title="Shopping Made Easy"
        content="Generate instant shopping lists based on what you need. Homanize learns your consumption patterns and suggests optimal restock quantities, making grocery shopping smarter and more efficient than ever."
        alignment="left"
      />
      
      <div className="h-32" />
    </div>
  )
}

export default App
