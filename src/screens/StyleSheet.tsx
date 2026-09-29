import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  // Splash
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  containerSplash: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoSplash: {
    width: 100,
    height: 100,
    marginBottom: 5
  },
  logoHome02: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  textSplash: {
    fontSize: 26,
    color: '#4873B7',
    fontFamily: 'semibold'
  },
  text2Splash: {
    fontSize: 12,
    color: '#1A94CC',
    fontFamily: 'regular'
  },

  // Onboarding
  image: {
    width: '100%',
    height: '100%',
  },
  OnboardingImage: {
    top: 0,
    width: '100%',
    height: 400,
  },
  OnboardingSkip: {
    fontSize: 18,
    color: '#22215B',
    fontFamily: 'medium'
  },
  OnboardingContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 30,
    marginTop: 50
  },
  textOnboarding: {
    fontSize: 34,
    color: '#22215B',
    marginBottom: 10,
    fontFamily: 'semibold'
  },
  text2Onboarding: {
    fontSize: 14,
    color: '#9090AD',
    fontFamily: 'regular'
  },
  skipButton: {
    position: 'absolute',
    top: 50,
    right: 30,
    zIndex: 1,
  },
  nextButton: {
    position: 'absolute',
    bottom: 50,
    right: 30,
    zIndex: 1,
  },
  slider: {
    position: 'absolute',
    bottom: 80,
    left: 30,
    zIndex: 1,
  },

  // Admin Department
  containerAdmin: {
    flex: 1,
    width: '100%',
    height: '100%',
    // paddingBottom: 80,
    // backgroundColor: 'white'
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  adminContainer: {
    alignItems: 'center',
    marginTop: 60
  },
  adminContainer02: {
    alignItems: 'center',
  },
  logoAdmin: {
    width: 80,
    height: 80,
    marginBottom: 10
  },
  textAdmin: {
    fontSize: 24,
    color: '#4873B7',
    fontFamily: 'semibold'
  },
  text2Admin: {
    fontSize: 14,
    color: '#1A94CC',
  },
  text3Admin: {
    fontSize: 24,
    color: '#FFFFFF',
    fontFamily: 'semibold'
  },
  text4Admin: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  text5Admin: {
    width: '100%',
    fontSize: 18,
    color: '#073C59',
    textAlign: 'center',
    fontFamily: 'semibold',
    marginBottom: 15,
},

  // text5Admin: {
  //   width: '100%',
  //   fontSize: 18,
  //   color: '#073C59',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   fontFamily: 'semibold',
  //   marginStart: 35,
  //   marginBottom: 15
  // },
  selectDepart: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 20
  },
  textselectDepart: {
    fontSize: 28,
    color: '#FFFFFF',
    fontFamily: 'semibold'
  },
  text2selectDepart: {
    fontSize: 14,
    color: '#FFFFFF',
    fontFamily: 'medium'
  },
  bgMainAdmin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderColor: "#A1BFDF",
    borderWidth: 2,
    borderRadius: 15,
    marginHorizontal: 25,
    marginTop: 10,
    backgroundColor: 'rgba(220, 220, 220, 0.20)',
  },
  bg2MainAdmin: {
    flexDirection: 'column',
    padding: 25,
    borderColor: "#A1BFDF",
    borderWidth: 2,
    borderRadius: 15,
    marginHorizontal: 25,
    marginTop: 50,
    backgroundColor: 'rgba(220, 220, 220, 0.5)',
    opacity: 0.9,
  },
  btnNextAdmin: {
    marginLeft: 10
  },
  viewFlexHeader: {
    flex: 1
  },
  viewFlexCenter: {
    alignItems: 'center'
  },
  textContentAdmin: {
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'semibold',
    textAlign: 'center',
  },
  textsContentsAdmins: {
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'semibold',
  },
  text2ContentAdmin: {
    fontSize: 10,
    color: '#FFFFFF',
    fontFamily: 'medium'
  },
  text2ContentsAdmins: {
    fontSize: 14,
    color: '#FFFFFF',
    fontFamily: 'medium'
  },
  text3ContentAdmin: {
    fontSize: 16,
    color: '#073C59',
    fontFamily: 'medium'
  },
  text4ContentAdmin: {
    fontSize: 16,
    color: '#073C59',
    fontFamily: 'medium',
    marginTop: 20
  },
  text5ContentAdmin: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'semibold'
  },
  bottomsContainer01: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 16,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  textSercurityAdmin: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'medium',
    position: 'absolute',
    bottom: 15,
    alignSelf: 'center'
  },
  text2SercurityAdmin: {
    fontSize: 14,
    color: '#073C59',
    fontFamily: 'medium',
    position: 'absolute',
    bottom: 25,
    alignSelf: 'center'
  },
  text3SercurityAdmin: {
    fontSize: 14,
    color: '#FFFFFF',
    fontFamily: 'medium',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center'
  },
  view2: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    color: '#7A95A4',
    paddingHorizontal: 20,
    width: '100%',
    height: 50,
    marginTop: 10,
    backgroundColor: "white"
  },
  viewMargin: {
    flex: 1,
    paddingVertical: 10,
    marginStart: 10
  },
  view02Margin: {
    flex: 1,
    paddingVertical: 10,
    marginStart: 10,
    color: 'white',
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4876BA',
    borderRadius: 5,
    marginTop: 25
  },
  buttonText: {
    color: '#4E85C2',
    fontSize: 14,
    fontFamily: 'medium',
  },
  buttonTextLogin: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'medium',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 25,
  },
  textLogInAdmin: {
    fontSize: 16,
    marginRight: 5,
    color: '#073C59',
    fontFamily: 'regular' // Space between the text and the button
  },
  textLoginAdmin: {
    color: '#073C59', // Text color for the button
    fontSize: 16,
    fontFamily: 'semibold'
  },
  eyeIcon: {
    width: 20, // Adjust size as needed
    height: 20,
  },
  iconEnd: {
    marginLeft: 10,
  },

  // Home
  containerHome: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageHome: {
    width: '100%',
    height: 300,
    resizeMode: 'stretch'
  },
  image2Home: {
    width: '100%',
    height: 200,
    resizeMode: 'stretch',
  },
  image3Home: {
    width: '100%',
    height: 250,
    resizeMode: 'stretch',
  },
  image4Home: {
    width: '100%',
    height: 220,
    resizeMode: 'stretch',
  },
  image5Home: {
    width: '100%',
    height: 150,
    resizeMode: 'stretch',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  // overlay2: {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   marginBottom: 20,
  // },
  bgMainHome: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 15,
    marginTop: 30,
  },
  bgMainsHome02: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 5,
    marginTop: 30,
  },
  bgMainHome01: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 15,
    marginTop: 40,
  },
  bgMainHomeAdmin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewOptions: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 10,
    flexGrow: 1,
    minWidth: 70,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  viewOptionsBg: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 15,
    marginTop: 50,
  },
  viewOptionsBgs02: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 15,
    marginTop: -70,
  },
  // viewOptionsBgs02: {
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   padding: 10,
  //   marginHorizontal: 15,
  //   marginTop: 90,
  // },
  backgroundImageHome: {
    position: 'absolute',
    resizeMode: 'cover',
  },
  overlayContent: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  imgCenter: {
    marginBottom: 8
  },
  textOptionHome: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },
  placeholderStyleList: {
    fontSize: 16,
  },
  selectedTextStyleList: {
    fontSize: 16,
  },
  dropdownContainerList2: {
    borderColor: "#A1BFDF",
    borderWidth: 2,
    borderRadius: 5,
    marginHorizontal: 25,
    marginTop: 40,
    height: 50,
    backgroundColor: 'rgba(220, 220, 220, 0.20)',
  },
  searchBg: {
    borderColor: "#A1BFDF",
    borderWidth: 2,
    borderRadius: 5,
    marginHorizontal: 25,
    marginTop: 90,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: 'rgba(220, 220, 220, 0.20)',
  },
  searchBg01: {
    borderColor: "#A1BFDF",
    borderWidth: 2,
    borderRadius: 5,
    marginHorizontal: 25,
    marginTop: 50,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: 'rgba(220, 220, 220, 0.20)',
  },
  // search02Bg: {
  //   marginHorizontal: 10,
  //   height: '100%',
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   paddingHorizontal: 15,
  // },
  textTitleAdmin: {
    fontSize: 20,
    color: '#4E4E4E',
    fontFamily: 'semibold',
    margin: 20
  },
  textTitleAdmin02: {
    fontSize: 20,
    color: '#4E4E4E',
    fontFamily: 'semibold',
    marginHorizontal: 20,
    marginBottom: 10
  },
  textTitleAdmin03: {
    fontSize: 20,
    color: '#4E4E4E',
    fontFamily: 'semibold',
    marginHorizontal: 20,
  },
  card: {
    width: 300,
    marginRight: 15,
    padding: 15,
    justifyContent: 'space-between',
    borderRadius: 10,
    overflow: 'hidden',
    // padding: 10,
    // width: '100%',
    // alignSelf: 'center',
    // marginStart: 20,
    // borderRadius: 20,
    // marginEnd: 10
  },
  card02: {
    marginBottom: 20,
    marginRight: 15,
    padding: 15,
    justifyContent: 'space-between',
    borderRadius: 10,
    overflow: 'hidden',
    // padding: 10,
    // width: '100%',
    // alignSelf: 'center',
    // marginStart: 20,
    // borderRadius: 20,
    // marginEnd: 10
  },
  // card: {
  //   backgroundColor: '#fff',
  //   borderRadius: 10,
  //   padding: 20,
  //   marginBottom: 20,
  //   shadowColor: '#000',
  //   shadowOpacity: 0.1,
  //   shadowRadius: 10,
  //   elevation: 3,
  // },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileImage02: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  textContainer: {
    marginLeft: 15,
    flex: 1,
  },
  name: {
    fontFamily: 'bold',
    fontSize: 16,
    color: 'white'
  },
  title: {
    fontSize: 14,
    color: 'white'
  },
  requestText: {
    marginTop: 5,
    fontSize: 14,
    color: 'white'
  },
  moreIcon: {
    paddingLeft: 10,
  },
  approveButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  approveButtonText: {
    color: '#007BFF',
    fontFamily: 'bold',
    fontSize: 16,
  },
  cardAttend: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    padding: 10,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginBottom: 10
  },
  // profileImage: {
  //   width: 40,
  //   height: 40,
  //   borderRadius: 20,
  // },
  textContainer2: {
    marginLeft: 10,
    flex: 1,
  },
  name2: {
    fontFamily: 'bold',
    fontSize: 14,
  },
  title2: {
    color: '#777',
    fontSize: 12,
  },
  entryTimeContainer: {
    marginRight: 10,
  },
  entryTime: {
    color: '#FF0000',
    fontSize: 14,
    fontFamily: '500',
  },
  moreIcon2: {
    paddingHorizontal: 10,
  },
  listContent: {
    paddingBottom: 20,
  },
  listContainer: {
    paddingLeft: 16,
    paddingRight: 16,
  },

  listContentsHomes: {
    padding: 20,
  },
  cardsHomes: {
    backgroundColor: '#4F94F8',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    elevation: 3,
  },
  cardsHomes02: {
    backgroundColor: '#4F94F8',
    borderRadius: 10,
    padding: 15,
    elevation: 3,
    width: 320,
    marginEnd: 15,
  },
  cardsHomes03: {
    backgroundColor: '#4F94F8',
    borderRadius: 10,
    padding: 15,
    elevation: 3,
    width: 320,
    marginEnd: 15,
  },

  cardsHomes04: {
    backgroundColor: '#4F94F8',
    borderRadius: 10,
    padding: 15,
    elevation: 3,
    marginTop: 15,
  },
  cardsHomes05: {
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    padding: 15,
    elevation: 3,
    marginTop: 15,
  },
  
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
cardHeader02: {
  height: 100,
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'wrap', // Ensures content wraps if it exceeds width
},

  profileImagesHomes: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainersHomes: {
    flex: 1,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  roleText: {
    fontSize: 14,
    color: '#d0e2ff',
  },
  leaveText: {
    fontSize: 14,
    color: '#fff',
  },
  infoIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoIconContainer02: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50
  },
  infoIcon: {
    fontSize: 20,
    color: '#fff',
  },
  approveButtonsHomes: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 15,
  },
  approveButtonsHomes02: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4F94F8',
  },

  // Employe Record
  containerRecord: {
    flex: 1,
    marginHorizontal: 20,
    backgroundColor: '#F5F5F5',
  },
  headerRecord: {
    fontSize: 24,
    fontFamily: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  startLetter: {
    fontSize: 14,
    fontFamily: 'medium',
    marginTop: 25,
    marginBottom: 15,
    marginStart: 10,
    color: '#333',
  },
  employeeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  avatarImage: {
    width: 40,
    height: 40,
    // borderRadius: 25,
    // marginRight: 15,
  },
  imageRadiusBg: {
    width: 50,
    height: 50,
    marginRight: 15,
    borderRadius: 100,
    backgroundColor: 'white'
  },
  imagesRadiusBg02: {
    width: 40,
    height: 40,
    marginRight: 15,
    borderRadius: 100,
    backgroundColor: 'white'
  },
  imagesRadiusBg03: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 100,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  // infoContainer: {
  //   flex: 1,
  // },
  nameRecord: {
    fontSize: 14,
    fontFamily: 'bold',
    color: '#232323',
  },
  position: {
    fontSize: 14,
    color: '#4E4E4E',
    fontFamily: 'regular'
  },
  position002: {
    fontSize: 12,
    color: '#4E4E4E',
    fontFamily: 'regular'
  },
  position003: {
    fontSize: 14,
    color: '#4E4E4E',
    fontFamily: 'regular'
  },
  positions02: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'semibold',
    marginEnd: 5
  },
  nameRecord02: {
    fontSize: 14,
    fontFamily: 'semibold',
    color: '#232323',
    marginBottom: 5,
  },
  position02: {
    fontSize: 14,
    color: '#4E4E4E',
    // marginTop: 5,
    fontFamily: 'medium',
    marginEnd: 50,
    flexWrap: 'wrap',
  },
  position03: {
    fontSize: 14,
    color: '#4E4E4E',
    fontFamily: 'medium',
    flexWrap: 'wrap',
  },
  status: {
    fontSize: 14,
    fontFamily: 'regular',
  },
  present: {
    color: 'green',
  },
  absent: {
    color: 'red',
  },
  infoStatus: {
    flex: 1,
    marginLeft: 'auto',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  infoStatus02: {
    flex: 1,
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },

  deleteStatus: {
    position: 'relative',
    padding: 10,
  },
  topLeftIcon: {
    position: 'absolute',
    top: 0,
    left: -20,
},
  iconMargin: {
    marginBottom: 5
  },
  // iconMargin02: {
  //   marginBottom: 5
  // },
  iconMargin02: {
    marginLeft: -30
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
  },

  // Record Information
  btnEdit: {
    fontSize: 18,
    color: '#4876BA',
    fontFamily: 'bold'
  },
  bgMainRecords: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 15,
    marginTop: 10
  },
  bgMainsRecord02: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginStart: 25,
    marginHorizontal: 15,
    marginTop: 10
  },
  titlePersonal: {
    fontSize: 20,
    color: '#4E4E4E',
    fontFamily: 'semibold'
  },
  titlePersonal02: {
    fontSize: 18,
    color: '#4E4E4E',
    fontFamily: 'medium',
    marginTop: 10
  },
  titlePersonal03: {
    fontSize: 14,
    color: '#8A8A8A',
    fontFamily: 'regular',
    marginHorizontal: 25,
    marginTop: 7
  },
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  // card: {
  //   backgroundColor: '#fff',
  //   borderRadius: 10,
  //   padding: 20,
  //   marginBottom: 20,
  //   shadowColor: '#000',
  //   shadowOpacity: 0.1,
  //   shadowRadius: 10,
  //   elevation: 3,
  // },
  employeeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  // avatar: {
  //   width: 60,
  //   height: 60,
  //   borderRadius: 30,
  //   marginRight: 15,
  // },
  namePersonal: {
    fontSize: 16,
    fontFamily: 'bold',
    color: '#333',
  },
  positionPersonal: {
    fontSize: 14,
    color: '#666',
    marginTop: 5
  },
  infoRow: {
    marginEnd: 20
  },
  label: {
    fontSize: 14,
    color: '#232323',
    flex: 1,
    marginTop: 10,
    fontFamily: 'bold'
  },
  value: {
    fontSize: 14,
    color: '#4E4E4E',
    flex: 1,
    marginTop: 5,
    textAlign: 'left',
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'medium',
    color: '#22215B',
    marginTop: 20
  },
  noteDate: {
    fontSize: 12,
    color: '#4876BA',
    marginBottom: 10,
    fontFamily: 'medium',
  },
  notes: {
    fontSize: 14,
    color: '#4E4E4E',
    lineHeight: 20,
  },
  workingTime: {
    fontSize: 24,
    fontFamily: 'medium',
    textAlign: 'center',
    marginVertical: 10,
    color: '#22215B'
  },
  subTitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#999',
    fontFamily: 'regular',
    marginTop: -5
  },
  chartContainer: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
  },
  chart: {
    color: '#aaa',
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeCard: {
    flex: 1,
    alignItems: 'center',
  },
  timeLabel: {
    fontSize: 16,
    fontFamily: 'bold',
    color: '#333',
  },
  timeDesc: {
    fontSize: 12,
    color: '#666',
  },
  dataCard: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15,
  },
  bgInofoRecords: {
    marginHorizontal: 20,
    backgroundColor: '#F6F6F6'
  },
  bgInofoRecords02: {
    marginHorizontal: 20,
    backgroundColor: '#F6F6F6',
    marginTop: 90,
    height: 210
  },
  bgMainRecordsInfos: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  bgMainRecordsInfos02: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -10
  },
  iconByNotes: {
    alignItems: 'flex-start',
    marginRight: 10,
    marginLeft: -10,
    marginTop: 4
  },
  // container: {
  //   flex: 1,
  //   backgroundColor: '#f4f4f4',
  //   padding: 20,
  // },
  // card: {
  //   backgroundColor: '#fff',
  //   borderRadius: 10,
  //   padding: 20,
  //   marginBottom: 20,
  //   shadowColor: '#000',
  //   shadowOpacity: 0.1,
  //   shadowRadius: 10,
  //   elevation: 3,
  // },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  dataBox: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  dataTitle: {
    fontSize: 16,
    fontFamily: 'bold',
    color: '#4A5CD0',
  },
  dataLabel: {
    fontSize: 16,
    color: '#4E4E4E',
    marginTop: 5
  },
  // sectionTitle: {
  //   fontSize: 18,
  //   fontFamily: 'bold',
  //   color: '#333',
  //   marginBottom: 10,
  // },
  seeMore: {
    fontSize: 14,
    color: '#4E4E4E',
    fontFamily: 'regular'
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  taskBox: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  taskTitle: {
    fontSize: 16,
    fontFamily: 'bold',
    color: '#333',
  },
  taskDate: {
    fontSize: 12,
    color: '#666',
  },
  taskDesc: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
  },
  activityBox: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  activityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  activityTitle: {
    fontSize: 16,
    fontFamily: 'bold',
    color: '#333',
  },
  activityTime: {
    fontSize: 16,
    color: '#333',
  },
  activityStatusLate: {
    fontSize: 12,
    color: 'red',
  },
  activityStatusOnTime: {
    fontSize: 12,
    color: 'green',
  },
  activityStatusPending: {
    fontSize: 12,
    color: '#FF8C00',
  },
  activityDate: {
    fontSize: 12,
    color: '#999',
  },
  bgStatusChecked: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginEnd: 5,
    backgroundColor: '#F6F6F6',
    borderRadius: 10
  },
  bgStatus02Checked: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginStart: 5,
    backgroundColor: '#F6F6F6',
    borderRadius: 10
  },
  viewBgPersonal: {
    flexDirection: 'row',
  },
  iconAllBg: {
    backgroundColor: '#4876BA',
    padding: 5,
    borderRadius: 3
  },
  viewMargins: {
    marginHorizontal: 20
  },

  // Task
  taskContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#F6F6F6',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    marginStart: 5,
  },
  taskMainContainer: {
    marginTop: 15,
    backgroundColor: '#00C853',
    borderRadius: 10,
    elevation: 3,
    marginHorizontal: 2
  },
  task2MainContainer: {
    marginTop: 15,
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    elevation: 3,
    marginHorizontal: 20
  },
  task3MainContainer: {
    marginTop: 15,
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    elevation: 3,
    marginHorizontal: 10,
    width: 300
  },
  textContainerTask: {
    flex: 1,
  },
  completedTaskMainContainer: {
    backgroundColor: '#00C853',
  },
  completedTime: {
    color: '#00C853',
  },
  titleTask: {
    fontSize: 16,
    fontFamily: 'medium',
    marginBottom: 10,
    color: 'black'
  },
  titleTask2: {
    fontSize: 16,
    fontFamily: 'medium',
    color: 'black'
  },
  titleTask03: {
    fontSize: 14,
    fontFamily: 'medium',
    color: 'black'
  },
  // titleTask04: {
  //   fontSize: 16,
  //   fontFamily: 'medium',
  //   color: 'black'
  // },
  time: {
    fontSize: 14,
    color: '#999',
    marginBottom: 10,
    marginStart: 10,
    fontFamily: 'semibold'
  },
  time2: {
    fontSize: 14,
    color: '#4876BA',
    marginBottom: 10,
    marginStart: 10,
    fontFamily: 'semibold'
  },
  time3: {
    fontSize: 13,
    color: '#4876BA',
    marginStart: 10,
    fontFamily: 'medium'
  },
  description: {
    fontSize: 14,
    color: '#555',
    fontFamily: 'regular'
  },
  statusContainer: {
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  statusContainer02: {
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  completedStatus: {
    backgroundColor: '#00C853',
  },
  pendingStatus: {
    backgroundColor: '#FF5252',
  },
  statusText: {
    color: '#FFFFFF',
    fontSize: 12,
  },

  // Dialog Leave Request
  containerDialog: {
    padding: 20,
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
    margin: 20,
    justifyContent: 'center',
  },
  headerDialog: {
    fontSize: 20,
    fontFamily: 'medium',
    color: '#4E4E4E',
    marginBottom: 20,
    textAlign: 'center',
  },
  headerDialog02: {
    fontSize: 14,
    fontFamily: 'regular',
    color: '#ABABAB',
    textAlign: 'center',
  },
  headerDialog03: {
    fontSize: 20,
    fontFamily: 'medium',
    color: '#4E4E4E',
    marginBottom: 10,
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: 15,
  },
  formGroup02: {
    marginBottom: 15,
    marginHorizontal: 20
  },
  labelDialog: {
    fontSize: 16,
    color: '#073C59',
    fontFamily: 'medium',
    marginBottom: 5
  },
  input: {
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    color: '#829DAB',
    fontFamily: 'regular',
    backgroundColor: '#FFFFFF',
  },
  input2: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginRight: 5,
    color: '#829DAB',
    fontFamily: 'regular',
    backgroundColor: '#FFFFFF',
  },
  input3: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 5,
    color: '#829DAB',
    fontFamily: 'regular',
    backgroundColor: '#FFFFFF',
  },
  input4: {
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    color: '#073C59',
    fontFamily: 'regular',
    backgroundColor: '#F6F6F6',
  },
  input5: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    color: '#073C59',
    marginRight: 5,
    fontFamily: 'regular',
    backgroundColor: '#F6F6F6',
  },
  input6: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    color: '#073C59',
    marginLeft: 5,
    fontFamily: 'regular',
    backgroundColor: '#F6F6F6',
  },
  input7: {
    flex: 1,
    borderRadius: 5
  },
  leaveContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leaveContainer02: {
    flexDirection: 'row',
  },
  leaveContainer03: {
    flex: 1,
    justifyContent: 'space-between',
  },
  attachmentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  attachmentContainer02: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 5,
    paddingVertical: 5
  },
  attachmentText: {
    fontSize: 14,
    padding: 10,
    borderRadius: 10,
    marginLeft: -5,
    color: '#829DAB',
    fontFamily: 'regular',
    backgroundColor: '#F6F6F6',
  },
  attachmentText02: {
    flex: 1,
    fontSize: 14,
    padding: 10,
    borderRadius: 10,
    color: '#073C59',
    fontFamily: 'regular',
    backgroundColor: '#F6F6F6',
  },
  attachmentText03: {
    fontSize: 16,
    padding: 10,
    borderRadius: 10,
    color: '#232323',
    fontFamily: 'medium',
    backgroundColor: '#F6F6F6',
  },
  downloadButton: {
    padding: 5,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  downloadText: {
    fontSize: 18,
    color: '#555',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  buttonContainer02: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: 20,
  },
  acceptButton: {
    backgroundColor: '#16B8A4',
    padding: 15,
    borderRadius: 8,
    flex: 1,
    marginRight: 5,
  },
  acceptButton02: {
    backgroundColor: '#4E85C2',
    padding: 15,
    borderRadius: 8,
    flex: 1,
    marginRight: 5,
  },
  rejectButton: {
    backgroundColor: '#F44040',
    padding: 15,
    borderRadius: 8,
    flex: 1,
    marginLeft: 5,
  },
  buttonTextDialog: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'medium',
  },
  dialogContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  dialogBox: {
    width: 350,
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    padding: 20,
    // alignItems: 'center',
  },
  leaveRequestBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 25,
    marginTop: 80,
  },
  leaveRequestBox02: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginTop: 80,
  },
  leaveRequestBox03: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
  dialogTitle: {
    fontSize: 20,
    fontFamily: 'bold',
    marginBottom: 10,
  },
  dialogContent: {
    fontSize: 16,
    marginBottom: 20,
  },
  dialogButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  // Check In Out
  donutChartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statsContainer: {
    flex: 1,
    paddingLeft: 20,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  statLabel: {
    width: 100,
    fontSize: 14,
    color: '#333',
  },
  statValue: {
    marginLeft: 10,
    fontSize: 14,
    color: '#333',
  },
  checkOutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#F5F5F5',
  },
  checkOutContainers002: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#F5F5F5',
  },
  checkOutContainer2: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20
  },
  checkOutContainer03: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
  },
  iconByNotes2: {
    alignItems: 'flex-start',
    marginRight: 10,
    marginLeft: -10,
  },
  late: {
    color: '#E40000',
  },
  onTime: {
    color: '#009470',
  },
  early: {
    color: '#4876BA',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelAttandance01: {
    fontSize: 14,
    fontFamily: 'regular',
    color: '#232323',
  },
  labelAttandance: {
    fontSize: 14,
    fontFamily: 'regular',
    color: '#232323',
    marginTop: 10
  },
  progressBarContainer: {
    flex: 1,
    height: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    overflow: 'hidden',
    marginTop: 2
  },
  progressBar: {
    height: '100%',
    borderRadius: 3,
  },
  topSpace: {
    marginTop: 15,
  },
  bgMainAttandance: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewAttandandce: {
    width: 100,
    height: 100,
    marginRight: 15,
  },
  viewAttandandces2: {
    flex: 1
  },
  dropdownContainerList3: {
    borderRadius: 5,
    padding: 10,
    minWidth: 100,
    backgroundColor: '#F6F6F6',
  },
  dropdownContainerList04: {
    borderRadius: 5,
    padding: 10,
    minWidth: 100,
    backgroundColor: '#FFFFFF',
  },
  dropdownContainerList05: {
    borderRadius: 5,
    padding: 13,
    minWidth: 100,
    backgroundColor: '#F6F6F6',
  },
  dropdownContainerList06: {
    borderRadius: 5,
    padding: 13,
    minWidth: 100,
    backgroundColor: '#FFFFFF',
  },
  placeholderStyleList2: {
    fontSize: 14,
    fontFamily: 'regular',
    color: '#4E4E4E'
  },
  selectedTextStyleList2: {
    fontSize: 14,
    fontFamily: 'regular',
    color: '#4E4E4E'
  },
  placeholderStyleList03: {
    fontSize: 12,
    fontFamily: 'regular',
    color: '#4E4E4E'
  },
  selectedTextStyleList03: {
    fontSize: 12,
    fontFamily: 'regular',
    color: '#4E4E4E'
  },
  containerProgress: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    position: 'absolute',
    fontSize: 12,
    fontFamily: 'medium',
    color: '#232323',
    textAlign: 'center',
    padding: 10,
    lineHeight: 17,
  },
  containerRecordsTabs: {
    backgroundColor: '#FFFFFF',
  },
  container2RecordsTabs: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  tabsBgsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    marginBottom: 15,
    marginHorizontal: 5,
  },
  tabsBgsContainerEmploye: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    marginBottom: 15,
    marginHorizontal: 5,
  },
  tabsBgContainers01: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    marginBottom: 15,
    marginHorizontal: 5,
  },
  tabsBgsContainer02: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    marginTop: 15,
    marginHorizontal: 5,
  },
  tabsBgsContainer03: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
  },
  // tabsBgsContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   padding: 15,
  //   backgroundColor: '#F6F6F6',
  //   borderRadius: 10,
  //   marginBottom: 15,
  //   shadowColor: '#000',
  //   shadowOpacity: 0.1,
  //   shadowRadius: 5,
  //   elevation: 3,
  //   marginHorizontal: 5,
  // },
  bgSafeAreaViews: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  // verticalLine: {
  //   height: 20,
  //   width: 2,
  //   marginHorizontal: 10,
  //   backgroundColor: '#B2B2B2',
  //   alignItems: 'center'
  // },
  dropdownItemTextStyle: {
    fontSize: 12,
    color: '#4E4E4E',
    padding: 10
  },
  searchRow: {
    flexDirection: 'row', // Aligns items in a row
    justifyContent: 'space-between', // Ensures space between searchBg and MessageIcon
    alignItems: 'center', // Centers them vertically
    paddingHorizontal: 10, // Adjust padding as needed
  },
  searchRow02: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
  search001Bg: {
    flex: 1,
    borderColor: "#A1BFDF",
    borderWidth: 2,
    borderRadius: 5,
    marginHorizontal: 10,
    marginTop: 90,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: 'rgba(220, 220, 220, 0.20)',
  },
  search00Bg: {
    flex: 1,
    borderRadius: 5,
    marginHorizontal: 10,
    marginTop: 90,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#F6F6F6',
    justifyContent: 'space-between',
    paddingVertical: 5
  },
  view001Margin: {
    fontSize: 16,
    color: 'white',
    // color: '#8E8282',
    // flex: 1,
    // paddingVertical: 10,
    // marginStart: 10,

  },
  iconContainer: {
    marginTop: 90,
    marginEnd: 10
  },
  iconContainer02: {
    // marginTop: 90,
    marginEnd: 10
  },
  containerHomeAdmin: {
    backgroundColor: '#4A90E2',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 20,
    marginRight: 15,
    overflow: 'hidden',

  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskText: {
    color: '#ffffff',
    fontSize: 14,
    fontFamily: '600',
  },
  circleContainer: {
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressTextHome: {
    color: '#ffffff',
    fontSize: 14,
  },
  buttonHomeProgress: {
    width: 130,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextHome: {
    color: '#4A90E2',
    fontFamily: '600',
    textAlign: 'center',
    width: '100%'
  },
  mainBgHomeProgress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topZeroInfo: {
    top: 5
  },
  attendanceContainer: {
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 20
  },
  dateTimeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  dateText: {
    fontSize: 14,
    fontFamily: 'medium',
    color: '#4E4E4E',
  },
  timeText: {
    fontSize: 16,
    color: '#4E4E4E',
    fontFamily: 'medium',
  },
  timerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10
  },
  timerText: {
    height: 50,
    width: 50,
    fontSize: 16,
    fontFamily: 'medium',
    marginHorizontal: 10,
    color: '#525252',
    borderRadius: 5,
    // padding: 15,
    lineHeight: 50,
    textAlign: 'center',
    backgroundColor: '#FFFFFF'
  },
  timerTex02: {
    fontSize: 12,
    fontFamily: 'medium',
    paddingHorizontal: 5,
    paddingVertical: 3,
    color: '#FFFFFF',
    borderRadius: 5,
    backgroundColor: '#4876BA'
  },
  hrsText: {
    fontSize: 16,
    marginLeft: 10,
    fontFamily: 'medium',
    color: '#4E4E4E',
  },
  shiftText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#4E4E4E',
    marginBottom: 20,
    fontFamily: 'regular'
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  notesButton: {
    backgroundColor: '#F6F6F6',
    padding: 10,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#4E85C2'
  },
  checkInButton: {
    backgroundColor: '#4E85C2',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginLeft: 7.5,
    alignItems: 'center',
  },
  checkInButton02: {
    backgroundColor: '#F44040',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  buttonTextIn: {
    color: '#fff',
    fontFamily: 'medium',
  },
  leaveContainerIn: {
    backgroundColor: '#4A75BA',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: 20
  },
  leaveTitle: {
    fontSize: 16,
    fontFamily: 'medium',
    marginBottom: 5,
    color: '#FFFFFF',
  },
  leaveSubtitle: {
    fontSize: 14,
    marginBottom: 20,
    color: '#FFFFFF',
    fontFamily: 'regular',
  },
  requestButton: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  requestButtonText: {
    color: '#4A75BA',
    fontFamily: 'semibold',
  },
  containerCheckIn: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  messageContainer: {
    marginHorizontal: 15,
  },
  senderMessage: {
    backgroundColor: '#f1f1f1',
    padding: 12,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    alignSelf: 'flex-start',
    maxWidth: '80%',
    marginBottom: 5,
  },
  receiverContainer: {
    alignItems: 'flex-end',
    marginHorizontal: 15,
    // margin: 15,
  },
  receiverMessage: {
    backgroundColor: '#4877BA',
    padding: 12,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    alignSelf: 'flex-end',
    maxWidth: '80%',
    marginBottom: 5,
  },
  messageText: {
    color: '#FFFFFF',
  },
  messageText02: {
    color: '#2C2D3A',
  },
  timeText02: {
    fontSize: 12,
    color: '#999',
    alignSelf: 'flex-start',
    marginLeft: 5,
    // marginTop: 5
  },
  timeText03: {
    fontSize: 12,
    color: '#999',
    alignSelf: 'flex-end',
    marginLeft: 5,
    marginTop: 5
  },
  containerAddMmember: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    height: 230
  },
  profileSection: {
    marginRight: 20,
  },
  imageContainer: {
    position: 'relative',
    width: 100,
    height: 100,
  },
  profileAddMmember: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  uploadButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 20,
  },
  uploadIcon: {
    width: 20,
    height: 20,
  },
  textFields: {
    flex: 1,
  },
  inputContainer: {
    marginBottom: 15,
  },
  labelAddMmember: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  inputAddMmember: {
    padding: 10,
    marginTop: 5,
    color: '#829DAB',
    borderRadius: 5,
    fontFamily: 'regular',
    backgroundColor: '#FFFFFF',
  },
  labelHour: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2C3E50',
  },
  rateContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  rateInput: {
    flex: 1,
    backgroundColor: '#F1F2F6',
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
    color: '#2C3E50',
    marginRight: 10,
    fontFamily: 'regular',
  },
  optionButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#567DF4',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  optionButton02: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selectedButton: {
    backgroundColor: '#4A90E2',
  },
  optionText: {
    fontSize: 16,
    color: '#2C3E50',
    fontFamily: 'regular'
  },
  optionText02: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'regular'
  },
  selectedText: {
    color: '#FFFFFF',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
    marginLeft: 5,
  },
  successText: {
    color: 'green',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5, // For Android shadow effect
  },
  modalContent2: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    elevation: 5, // For Android shadow effect
  },
  modalText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical:5
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: semi-transparent background
    zIndex: 999, // To make sure it is on top
  },
  loadingText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  successModalContent: {
    position: 'absolute',
    bottom: 100,
    // left: '50%',  // Center horizontally
    // transform: [{ translateX: -50 }], // Adjust to center based on width
    padding: 7,
    borderRadius: 5,
    elevation: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    // Set a maxWidth or width as needed
    // width: '80%', // This sets a width of 80% of the screen width
    // maxWidth: 300, // Optional: limit to a maximum width
},


successText02: {
    textAlign: 'center',
    fontSize: 16,
},

loadingBackground: {
  backgroundColor: 'white', // Background for loading state
  padding: 20,
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
},
noRecordcontainer: {
  flex: 1,
  justifyContent: 'center', // Center content vertically
  alignItems: 'center', // Center content horizontally
},
noChatText: {
  fontSize: 18,
  color: 'gray', // Optional: You can adjust the color to match your design
  textAlign: 'center',
},
emptyText: {
  textAlign: 'center',
  width: '100%',
  paddingVertical: 20,
  fontSize: 14,
  color: '#333',
  marginStart: 80
},
emptyText02: {
  textAlign: 'center',
  paddingVertical: 10,
  fontSize: 14,
  color: '#333',
},
});
