# Gear Up Workouts: Front End
Hey there!  

This is the repository for the **Gear Up Workouts** front end.  
Try out the app live at: [gup.cameronsherry.com](https://gup.cameronsherry.com) with user **camtest1**!

It is a **multiplatform**, **mobile-first**, **reactive**, **single page** web app built with **[Ionic](https://ionicframework.com/)**, **[TailwindCSS](https://tailwindcss.com/)**, and **[Angular](https://angular.io/)**.  

It is optimized for **iOS** and **mobile web browers**, but will work in any browser of any size! That's the power of a thoughtfully designed, responsive UI :)

Here are some of the main features:
--

### Three Types of Workouts

#### Body Weight
![BW](https://user-images.githubusercontent.com/45127818/227461530-07f58610-b30f-4687-b991-520f6fee8d34.png)
#### Paced Cardio
![Paced](https://user-images.githubusercontent.com/45127818/227461527-202b97a8-8de2-4eac-9637-67a8cba610fb.png)
#### Weighted
![Weight and Reps](https://user-images.githubusercontent.com/45127818/227461523-345f30ba-b58b-4baa-91ee-b5a67d28edb9.png)


### User Onboarding
When first loading up the app or logging in, the user is prompted to enter some information that is sent to the [Backend](https://github.com/Gear-Up-Workouts/backend-flask) and used to generate unique, custom workouts.

This is the first of many applications of **custom event-driven modals** used within the app.

![Onboarding](https://user-images.githubusercontent.com/45127818/227461356-708bcb1a-9d66-4582-9b89-304c3b29c547.gif)


### Workout Rating System
For the daily recommended workouts, users can tap each one and individually provide feedback. This data is used by the recommendation engine to either **reduce weight or reps**, or **prevent the workout from being recommended** to the user at all. 

In the spirit of reactivity, a **toast** is presented once that users' input is saved!

![Workout Rating](https://user-images.githubusercontent.com/45127818/227460871-a84cec6f-ee2e-46c0-802e-a7d88c76d10b.gif)


### Alternative Workouts
Based on the users' **current location**, a list of alternative workouts is generated and displayed at a preset time during the day (nothing ever gets recommended at night for user safety). 

The user can then tap through the list, with each item a **Google Maps place** alongside its **address** and **maps rating**. The user can tap on the address to open Google Maps navigation to the workout location.

![Alt Workouts](https://user-images.githubusercontent.com/45127818/227461378-a7cf7c69-8834-484f-8470-3f9352de0809.gif)


### User Stats
Users' can also view some basic stats about their app usage and workouts, with some fun easter eggs!

![Stats](https://user-images.githubusercontent.com/45127818/227461470-eb8b6e1f-0227-4422-94f4-34f34dc915b0.gif)


### Complete Workout Log
The user is able to see a complete log of all there past workouts for each day.

![Log](https://user-images.githubusercontent.com/45127818/227461367-bb600a64-5367-4ba7-81a9-6463b7212ab8.gif)


### Intelligent Recommendation Engine
Upon switching users, you can see the affect the user input has on the workouts returned from the recommendation engine. 

The intermediate user **camtest1** wants to focus primarily on strength and can access a gym, and thus has few cardio and bodyweight exercises. The beginner user **camtest2's** goals are weight loss and they don't have access to a gym, thus they are recommended primarily body weight or cardio exercises.

![User Switch](https://user-images.githubusercontent.com/45127818/227460886-7aaec38d-ec45-4bea-a982-c3e7bb59ac13.gif)


Additional App Features
--
- Responsive, interactive UI styling using **TailwindCSS**
- Persistent local user data using **Ionic Storage**
- Extensive use of **components** to provide **high cohesion** and **low coupling** between functions/components
- A custom API service to interface with the **Python Flask** backend using the **Angular HTTP Client** library and **RxJS**
- Use of **Angular Event Emitters** to activate global modals from child components
- **Tabular** app design using **Angular Router**
- Uses **Angular Proxy** to bypass CORS errors with local development
- Dynamic object creation using data packaging with custom data containers from json returned by our custom API

In The Works
--
- OAuth2 user authentication
- Weight Tracking
- Specific Muscle Groups
- Additional visual cues for inferring element functionality

> Disclaimer: While this may seem like a polished app, it was actually completed in less than a week with completely new technologies! 
>
>Feel free to connect with me on [LinkedIn](https://linkedin/in/crsherry) or reach out to me by [email](mailto:hello@cameronsherry.com)!  :)
