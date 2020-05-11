# LMS Sample

This is a set of components you can deploy into any org to demonstrate the Lightning Messaging System. 

## Contents

1. A Summer 2020 compatible LMS Channel
2. A Lighting Web Component (LWC) with the ability to subscribe, unsubscribe, publish and recieve messages from the channel
3. An Aura component with the ability to recieve messages and publish to the channel
4. A visualforce page that can subscribe, unsubscribe, publish and recieve messages from the channel
5. A Lightning App showing the three components together
6. A Custom App showing the Lightning App with Utility Bar using the channel to communicate

## Installation

1. Download the package
2. Deploy
    1. To your development Scract Org with: `sfdx force:push`
    2. To other org with: `sfdx force:source:deploy --sourcepath force-app --targetusername <YourUserAlias>`
3. Go find the visualforce page called LMSVisualforcePage, grant access for all profiles
4. Make the tab "LMS Demo" visible on profiles you want it to be seen on
5. Go to Setup -> Apps -> App Manager
6. Edit the custom App called "LMS Demo"
7. Add to all user profiles
8. Save the App
9. Using the App Launcher, go to "LMS Demo"


Demo away!
