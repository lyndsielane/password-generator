## Password Generator 

* The app starts when you push the Generate Password button. 
* The first prompt requests the number of characters you would liek in your password. The requirements are set to only allow 8-128 characters. If a number outside of the parameters is entered, a new window will pop up telling you the required character limit and take you back to the start to try again. 
* The second prompt asks if you would like uppercase letters included.
* The third prompt asks if you would like to include numbers. 
* The final prompt asks if you would like to include special characters. 
* Once all prompts are completed, a password meeting the specified requirements generates in the box.

# Updates to clean up/improve:
* added another layer of randomization after the password is generated to make it a more secure result as my original functions returned one pattern every time
* created a function to define the calculation to chose each character to clean it up a bit and ensure that any future updates required are easy to do in one place without messing up individual pieces. 
* cleaned up extra spaces and ensured formatting was correct throughout
* added sub-folders to better organize the assets in the project

![photo description](https://github.com/lyndsielane/password-generator/blob/main/Assets/Photos/127.0.0.1_5501_Develop_index.html.png?raw=true)