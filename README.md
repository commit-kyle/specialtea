# Specialtea

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Live website](#live-website)

## General info
This project is a tea ordering app.

Static data for tea varieties are provided and rendered on the main page. 
This allows users to add their special tea to their cart. Within which they have the ability to adjust the quantity of each chosen product and, in turn, this would manipulate the cart overall. It adjusts the price accordingly and displays the number of items specific to each tea product respectively. 
The logic and overall ability for users to order something has not been configured, though.

We make use of basic state management through "useState".
This is implemented when I make use of a modal which gets rendered upon opening the cart. Modal elements are rendered semantically too, by use of React Portals.

Additionally, we implement context for more complex state management.
Tea items, price, quantity, adding and removing logic are all managed by this context and therefore we make it available to all components which require this data for the overall app to work as intended.

This app fully implements function components.

Moreover, the core purpose of project "SpecialTea" is to showcase my implementation of "React.createContext" to share complex state management logic. "React.createPortal", "useRef", "React.forwardRef", "useEffect" and "useState" functionalities are also made use of throughout the creation of this project.
	
## Technologies
Latin Blog is created using:
* react version: 17.0.2

## Live website
The link to a live demonstration of how this app works can be found here; 
[SpecialTea](https://commit-kyle.github.io/specialtea/)

I hope you've enjoyed it!
