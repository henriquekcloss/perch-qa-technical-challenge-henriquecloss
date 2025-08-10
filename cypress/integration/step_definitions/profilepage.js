import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import ProfilePage from '../../pages/ProfilePage';

Given('I am on the Profile page', () => {
  ProfilePage.visit();
});

Then('I should see my information', () => {
  ProfilePage.verifyProfilePage();
});

Then('my order history', () => {
  ProfilePage.verifyOrderHistory();
});

When('I update my profile with name {string} and email {string} and save the changes', (name, email) => {
  ProfilePage.updateProfileInfo(name, email);
});

Then('my updated information with name {string} and email {string} should be displayed', (name, email) => {
  ProfilePage.verifyProfileInformation(name, email);
});
