# LMS Sample

This is a set of components you can deploy into any org to demonstrate the Lightning Messaging System. 

## Contents

1. A Summer 2020 compatible LMS Channel
2. A Lighting Web Component (LWC) with the ability to subscribe, unsubscribe, publish and recieve messages from the channel
3. An Aura component with the ability to recieve messages and publish to the channel
4. A visualforce page that can subscribe, unsubscribe, publish and recieve messages from the channel

## Installation

1. Download the package
2. Deploy to your development Scract Org with force:push
3. Go to Setup -> Apps -> App Manager
4. Edit the custom App called "LMS Demo"
5. Setup Utility Items to add both the LWC and Aura component
6. Add "LMS Demo App" to the navication
7. Add to all user profiles
8. Save and publish the App
9. Using the App Launcher, go to "LMS Demo"

Demo away!

## Install to Dev Hub (or other full org)

1. Run sfdx force:source:convert to generate a package
2. Deploy generated package with sfdx force:mdapi:deploy -d <packagefolder> -u <useralias>
3. Go to Setup -> Apps -> App Manager
4. Edit the custom App called "LMS Demo"
5. Setup Utility Items to add both the LWC and Aura component
6. Add "LMS Demo App" to the navication
7. Add to all user profiles
8. Save and publish the App
9. Using the App Launcher, go to "LMS Demo"
