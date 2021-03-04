# Agora RTM Leave Channel Test

Sample code to demonstrate error using leaveChannel method on agora-react-native-rtm on v1.2.2-alpha.3

## Steps to reproduce error

- Run the app on two devices
- Click join on both
- Click send on both
- Click leave 
  - Clicking leave throws error on ios
  - Clicking leave then clicking join again freezes the app on android