import React, { useState } from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './StyleSheet';
import BtnBack from '../components/BtnBack';
import CalenderIcon from '../components/CalenderIcon3';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import CallIcon from '../components/Callicon2';
import CallIcon2 from '../components/Callicon2';
import EmailIcon from '../components/EmailIcon';
import LocationIcon from '../components/LocationIcon';

const TaskDetails = () => {

    const dataDropdown = [
        { label: 'Inprogress', value: 'Inprogress' },
        { label: 'Complete', value: 'Complete' },
        { label: 'Pending', value: 'Pending' },
    ];

    const [dropdownValue, setDropdownValue] = useState('Select');

    const navigation = useNavigation();
    // Function to navigate back
    const handleBackPress = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.containerHome}>

                    <View style={styles.containerRecordsTabs}>
                        <Image source={require('../images/HomeBg4.jpeg')} style={styles.image5Home} />
                        <View style={styles.overlay}>
                            <View style={styles.bgMainHome}>
                                <View style={styles.viewFlexHeader}>
                                    <TouchableOpacity onPress={handleBackPress}>
                                        <BtnBack />
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.viewFlexCenter]}>
                                    <Text style={styles.textContentAdmin}>Security & Privacy</Text>
                                </View>
                                <View style={[styles.viewFlexHeader]}></View>
                            </View>

                        </View>
                    </View>

                    <View style={styles.task2MainContainer}>
                        <View style={styles.taskContainer}>
                            <View style={styles.textContainerTask}>
                                <Text style={styles.titleTask}>Contact Information</Text>
                                <View style={styles.bgMainRecordsInfos}>
                                    <CallIcon2 />
                                    <Text style={[styles.time3, { marginStart: 7 }]}>6143182687</Text>
                                </View>
                                <View style={[styles.bgMainRecordsInfos, { marginTop: 10 }]}>
                                    <EmailIcon />
                                    <Text style={styles.time3}>info@imedurgentcare.com</Text>
                                </View>
                                <View style={[styles.bgMainRecordsInfos, { marginTop: 10 }]}>
                                    <LocationIcon />
                                    <Text style={[styles.time3, { marginStart: 7 }]}>342 bradford chilicothe ohio</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.bgMainsRecord02}>
                        <View>
                            <Text style={styles.titlePersonal02}>Security:</Text>
                        </View>
                    </View>

                    <Text style={styles.titlePersonal03}>iMed Urgent Care is committed to protecting your privacy and the security of your
                        personal health information. We have implemented robust security measures to
                        safeguard your data, including encryption, access controls, and regular security audits.
                        Your information is treated with the utmost confidentiality, and we are constantly
                        monitoring for and addressing potential security threats.</Text>

                    <View style={styles.bgMainsRecord02}>
                        <View>
                            <Text style={styles.titlePersonal02}>1. Data Sensitivity</Text>
                        </View>
                    </View>

                    <Text style={styles.titlePersonal03}>Protected Health Information (PHI): iMed Urgent Care's mobile application likely
                        handles a vast amount of PHI, including patient names, addresses, medical histories,
                        diagnoses, and treatment plans.
                        Risks of Data Breaches: Unauthorized access to PHI can lead to identity theft, financial
                        fraud, and reputational damage for both patients and iMed Urgent Care.</Text>

                    <View style={styles.bgMainsRecord02}>
                        <View>
                            <Text style={styles.titlePersonal02}>2. Mobile Device Vulnerabilities</Text>
                        </View>
                    </View>

                    <Text style={styles.titlePersonal03}>Operating System Weaknesses: Mobile operating systems, such as iOS and Android,
                        may contain vulnerabilities that can be exploited by malicious actors.
                        App Store Security: While app stores have security measures in place, malicious apps can
                        sometimes slip through the cracks and compromise device security.</Text>

                    <View style={styles.bgMainsRecord02}>
                        <View>
                            <Text style={styles.titlePersonal02}>3. Network Security Risks</Text>
                        </View>
                    </View>

                    <Text style={styles.titlePersonal03}>Unsecured Wi-Fi Networks: Public Wi-Fi networks can be vulnerable to eavesdropping,
                        allowing attackers to intercept sensitive data transmitted by mobile devices.
                        Phishing Attacks: Phishing emails or text messages can trick users into clicking on
                        malicious links or downloading malware.</Text>

                    <View style={styles.bgMainsRecord02}>
                        <View>
                            <Text style={styles.titlePersonal02}>4. Regulatory Compliance</Text>
                        </View>
                    </View>

                    <Text style={styles.titlePersonal03}>HIPAA: The Health Insurance Portability and Accountability Act (HIPAA) sets
                        standards for the protection of PHI in the United States.
                        GDPR: The General Data Protection Regulation (GDPR) is a European Union law that
                        imposes strict data privacy requirements on organizations handling personal data.</Text>

                    <View style={styles.bgMainsRecord02}>
                        <View>
                            <Text style={styles.titlePersonal02}>Part II: Security Measures</Text>
                        </View>
                    </View>


                    <View style={styles.bgMainsRecord02}>
                        <View>
                            <Text style={styles.titlePersonal02}>1. Data Encryption</Text>
                        </View>
                    </View>

                    <Text style={styles.titlePersonal03}>End-to-End Encryption: Ensure that data is encrypted while in transit and at rest,
                        making it difficult for unauthorized individuals to access.
                        Strong Encryption Algorithms: Use robust encryption algorithms, such as AES-256, to
                        protect sensitive data.</Text>

                    <View style={styles.bgMainsRecord02}>
                        <View>
                            <Text style={styles.titlePersonal02}>2. Access Controls</Text>
                        </View>
                    </View>

                    <Text style={styles.titlePersonal03}>Multi-Factor Authentication (MFA): Require users to provide multiple forms of
                        identification, such as passwords, biometrics, or security tokens, to access the
                        application.
                        Role-Based Access Control (RBAC): Grant users access only to the information and
                        functions they need to perform their job duties.</Text>

                    <View style={styles.bgMainsRecord02}>
                        <View>
                            <Text style={styles.titlePersonal02}>3. Secure Communication Protocols</Text>
                        </View>
                    </View>

                    <Text style={styles.titlePersonal03}>HTTPS: Use HTTPS to encrypt data transmitted over the internet.
                        VPN: Consider using a Virtual Private Network (VPN) to encrypt network traffic and
                        protect against eavesdropping.</Text>

                    <View style={styles.bgMainsRecord02}>
                        <View>
                            <Text style={styles.titlePersonal02}>4. Device Security</Text>
                        </View>
                    </View>

                    <Text style={styles.titlePersonal03}>Mobile Device Management (MDM): Implement MDM solutions to enforce security
                        policies, remotely wipe devices, and track lost or stolen devices.
                        Regular Updates: Keep device operating systems and applications up-to-date with the
                        latest security patches.</Text>

                    <View style={styles.bgMainsRecord02}>
                        <View>
                            <Text style={styles.titlePersonal02}>5. Security Testing</Text>
                        </View>
                    </View>

                    <Text style={styles.titlePersonal03}>Vulnerability Assessments: Conduct regular vulnerability assessments to identify and
                        address potential security weaknesses.
                        Penetration Testing: Simulate attacks to evaluate the effectiveness of security measures.</Text>

                    <View style={styles.bgMainsRecord02}>
                        <View>
                            <Text style={styles.titlePersonal02}>Privacy:</Text>
                        </View>
                    </View>

                    <Text style={styles.titlePersonal03}>iMed Urgent Care respects your privacy and is committed to protecting your personal
                        health information. We only collect and use your data as necessary to provide you with
                        quality healthcare services. Your information is handled in accordance with applicable
                        privacy laws, and we take steps to ensure its confidentiality and security. We will never
                        share your personal information without your consent, except as required by law.</Text>

                    <View style={styles.bgMainsRecord02}>
                        <View>
                            <Text style={styles.titlePersonal02}>Part III: Privacy Considerations</Text>
                        </View>
                    </View>

                    <View style={styles.bgMainsRecord02}>
                        <View>
                            <Text style={styles.titlePersonal02}>1. Privacy by Design</Text>
                        </View>
                    </View>

                    <Text style={styles.titlePersonal03}>Data Minimization: Collect only the necessary data to achieve the intended purpose of
                        the application.
                        Purpose Limitation: Use data only for the purposes for which it was originally collected.</Text>

                    <View style={styles.bgMainsRecord02}>
                        <View>
                            <Text style={styles.titlePersonal02}>2. User Consent</Text>
                        </View>
                    </View>

                    <Text style={styles.titlePersonal03}>Informed Consent: Obtain explicit consent from users before collecting and using their
                        personal data.
                        Transparent Data Practices: Clearly communicate how data will be collected, used,
                        shared, and stored.</Text>

                    <View style={styles.bgMainsRecord02}>
                        <View>
                            <Text style={styles.titlePersonal02}>3. Data Retention and Deletion</Text>
                        </View>
                    </View>

                    <Text style={styles.titlePersonal03}>Data Retention Policies: Establish policies for how long data will be retained and when it
                        will be deleted.
                        Secure Deletion: Implement secure deletion methods to prevent data from being
                        recovered.</Text>

                    <View style={styles.bgMainsRecord02}>
                        <View>
                            <Text style={styles.titlePersonal02}>4. Privacy Impact Assessments</Text>
                        </View>
                    </View>

                    <Text style={styles.titlePersonal03}>PIA: Conduct privacy impact assessments to evaluate the potential privacy risks of new
                        applications or features.</Text>

                    <View style={styles.bgMainsRecord02}>
                        <View>
                            <Text style={styles.titlePersonal02}>5. Incident Response</Text>
                        </View>
                    </View>

                    <Text style={styles.titlePersonal03}>Incident Response Plan: Develop a plan to respond to data breaches or other security
                        incidents.
                        Notification Requirements: Comply with notification requirements if a data breach
                        occurs.</Text>


                    <View style={styles.bgMainsRecord02}>
                        <View>
                            <Text style={styles.titlePersonal02}>Part IV: Specific Considerations for iMed Urgent Care</Text>
                        </View>
                    </View>

                    <View style={styles.bgMainsRecord02}>
                        <View>
                            <Text style={styles.titlePersonal02}>1. Patient Data Sensitivity</Text>
                        </View>
                    </View>

                    <Text style={styles.titlePersonal03}>Emergency Medical Records: iMed Urgent Care likely handles highly sensitive emergency
                        medical records, which require extra precautions to protect.
                        Real-Time Data: The nature of urgent care means that data may be entered and accessed
                        in real-time, increasing the need for strong security measures.</Text>

                    <View style={styles.bgMainsRecord02}>
                        <View>
                            <Text style={styles.titlePersonal02}>2. Telehealth Integration</Text>
                        </View>
                    </View>

                    <Text style={styles.titlePersonal03}>Secure Video Conferencing: If iMed Urgent Care uses telehealth, ensure secure video
                        conferencing platforms are employed.
                        Data Privacy During Telehealth Sessions: Protect patient data during telehealth
                        consultations, including preventing unauthorized access to video or audio recordings.</Text>

                    <View style={styles.bgMainsRecord02}>
                        <View>
                            <Text style={styles.titlePersonal02}>3. Mobile Payment Integration</Text>
                        </View>
                    </View>

                    <Text style={styles.titlePersonal03}>Secure Payment Processing: If the application allows for mobile payments, implement
                        robust security measures to protect payment card data.
                        PCI DSS Compliance: Ensure compliance with the Payment Card Industry Data Security
                        Standard (PCI DSS) to protect cardholder data.</Text>

                    <View style={styles.bgMainsRecord02}>
                        <View>
                            <Text style={styles.titlePersonal02}>Conclusion</Text>
                        </View>
                    </View>

                    <Text style={[styles.titlePersonal03, {marginBottom: 20}]}>Safeguarding patient data and maintaining the integrity of iMed Urgent Care's mobile
                        application is crucial for protecting patient privacy and ensuring the trust of patients and
                        healthcare providers. By implementing robust security measures, adhering to privacy
                        principles, and addressing the specific challenges posed by urgent care services, iMed
                        Urgent Care can create a secure and trustworthy mobile application environment.</Text>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default TaskDetails;
