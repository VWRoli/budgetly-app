import React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
//Components
import Container from '../components/common/Container';
import CustomText from '../components/common/CustomText';
import HeaderText from '../components/common/HeaderText';
import Wrapper from '../components/common/Wrapper';

const PrivacyScreen: React.FC = (): JSX.Element => {
  return (
    <ScrollView>
      <Container>
        <Wrapper>
          <HeaderText styles={styles.text} text="Privacy Policy for budgetly" />
          <CustomText
            styles={styles.text}
            text="At budgetly, accessible from budgetly, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by budgetly and how we use it."
          />
          <CustomText
            styles={styles.text}
            text="If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us."
          />
          <CustomText
            styles={styles.text}
            text="This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in budgetly. This policy is not applicable to any information collected offline or via channels other than this website. Our Privacy Policy was created with the help of the Free Privacy Policy Generator."
          />
          <HeaderText styles={styles.subHeader} text="Consent" />
          <CustomText
            styles={styles.text}
            text="By using our website, you hereby consent to our Privacy Policy and agree to its terms."
          />
          <HeaderText styles={styles.subHeader} text="Information we collect" />
          <CustomText
            styles={styles.text}
            text="The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information."
          />
          <CustomText
            styles={styles.text}
            text="If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide."
          />
          <CustomText
            styles={styles.text}
            text="When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number."
          />
          <HeaderText
            styles={styles.subHeader}
            text="How we use your information"
          />
          <CustomText
            styles={styles.text}
            text="We use the information we collect in various ways, including to:"
          />
          <CustomText
            styles={styles.list}
            text="- Provide, operate, and maintain our website"
          />
          <CustomText
            styles={styles.list}
            text="- Improve, personalize, and expand our website"
          />
          <CustomText
            styles={styles.list}
            text="- Understand and analyze how you use our website"
          />
          <CustomText
            styles={styles.list}
            text="- Develop new products, services, features, and functionality"
          />
          <CustomText
            styles={styles.list}
            text="- Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes"
          />
          <CustomText styles={styles.list} text="- Send you emails" />
          <CustomText styles={styles.list} text="- Find and prevent fraud" />
          <HeaderText styles={styles.subHeader} text="Log Files" />

          <CustomText
            styles={styles.text}
            text="budgetly follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information."
          />
          <HeaderText
            styles={styles.subHeader}
            text="Advertising Partners Privacy Policies"
          />
          <CustomText
            styles={styles.text}
            text="You may consult this list to find the Privacy Policy for each of the advertising partners of budgetly."
          />
          <CustomText
            styles={styles.text}
            text="Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on budgetly, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit."
          />
          <CustomText
            styles={styles.text}
            text="Note that budgetly has no access to or control over these cookies that are used by third-party advertisers."
          />
          <HeaderText
            styles={styles.subHeader}
            text="Third Party Privacy Policies"
          />
          <CustomText
            styles={styles.text}
            text="budgetly's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. "
          />
          <CustomText
            styles={styles.text}
            text="You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites."
          />
          <HeaderText
            styles={styles.subHeader}
            text="CCPA Privacy Rights (Do Not Sell My Personal Information)"
          />
          <CustomText
            styles={styles.text}
            text="Under the CCPA, among other rights, California consumers have the right to:"
          />
          <CustomText
            styles={styles.text}
            text="- Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers."
          />
          <CustomText
            styles={styles.text}
            text="- Request that a business delete any personal data about the consumer that a business has collected."
          />
          <CustomText
            styles={styles.text}
            text="- Request that a business that sells a consumer's personal data, not sell the consumer's personal data."
          />
          <CustomText
            styles={styles.text}
            text="- If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us."
          />
          <HeaderText
            styles={styles.subHeader}
            text="GDPR Data Protection Rights"
          />
          <CustomText
            styles={styles.text}
            text="We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:"
          />
          <CustomText
            styles={styles.text}
            text="The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service."
          />
          <CustomText
            styles={styles.text}
            text="The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete"
          />
          <CustomText
            styles={styles.text}
            text="The right to erasure – You have the right to request that we erase your personal data, under certain conditions."
          />
          <CustomText
            styles={styles.text}
            text="The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions."
          />
          <CustomText
            styles={styles.text}
            text="The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions."
          />
          <CustomText
            styles={styles.text}
            text="The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions."
          />
          <CustomText
            styles={styles.text}
            text="If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us."
          />
          <HeaderText styles={styles.subHeader} text="Children's Information" />
          <CustomText
            styles={styles.text}
            text="Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity."
          />
          <CustomText
            styles={styles.text}
            text="budgetly does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records."
          />
        </Wrapper>
      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    marginVertical: 10,
    width: '100%',
  },
  list: { marginVertical: 3, width: '100%' },
  subHeader: {
    fontSize: 24,
    marginVertical: 10,
    width: '100%',
  },
});

export default PrivacyScreen;
