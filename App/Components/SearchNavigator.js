import React from 'react';
import { StackNavigator } from 'react-navigation';
import SearchScreen from './SearchScreen';
import ExploreNavigator from './ExploreNavigator';
import GuideProfileScreen from './GuideProfileScreen';
import LoginScreen from './LoginScreen';
import BookingPolicyScreen from './BookingPolicyScreen';
import BookingConfirmationScreen from './BookingConfirmationScreen';
import BecomeAGuideOptions from './BecomeAGuideOptions';
import BecomeAGuideQuestions1 from './BecomeAGuideQuestions1';
import BecomeAGuideQuestions2 from './BecomeAGuideQuestions2';
import BecomeAGuideQuestions3 from './BecomeAGuideQuestions3';
import BecomeAGuideQuestions4 from './BecomeAGuideQuestions4';
import BecomeAGuideQuestions5 from './BecomeAGuideQuestions5';
import BecomeAGuideQuestionsPolicies from './BecomeAGuideQuestionsPolicies';
import BecomeAGuideQuestionsConfirmation from './BecomeAGuideQuestionsConfirmation';
import SpecialtiesSetting from './SpecialtiesSetting';
import GuideRequestedTrips from './GuideRequestedTrips';
import ChatScreen from './ChatScreen';
import GuideTripsScreen from './GuideTripsScreen';

const SearchNavigator = StackNavigator({
  // Login: {screen: LoginScreen},
  Search: {screen: SearchScreen,
    navigationOptions: {
      header: null
    }
  },
  Explore: {screen: ExploreNavigator},
  GuideProfile: {screen: GuideProfileScreen},
  BookingPolicy: {screen: BookingPolicyScreen},
  BookingConfirmation: {screen: BookingConfirmationScreen},
  GuideOptions: {screen: BecomeAGuideOptions},
  GuideQuestions1: {screen: BecomeAGuideQuestions1},
  GuideQuestions2: {screen: BecomeAGuideQuestions2},
  GuideQuestions3: {screen: BecomeAGuideQuestions3},
  GuideQuestions4: {screen: BecomeAGuideQuestions4},
  GuideQuestions5: {screen: BecomeAGuideQuestions5},
  GuideQuestionsPolicies: {screen: BecomeAGuideQuestionsPolicies},
  GuideQuestionsConfirmation: {screen: BecomeAGuideQuestionsConfirmation},
  SpecialtiesSetting: {screen: SpecialtiesSetting},
  Chat: {screen: ChatScreen},
  GuideRequestedTrips: {screen: GuideRequestedTrips},
  GuideTrips: {screen: GuideTripsScreen},
});

export default SearchNavigator;