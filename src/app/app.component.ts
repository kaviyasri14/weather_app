import { WeatherFetchService } from './services/weather-fetch.service';
import { Component } from '@angular/core';
import {Http} from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCityId;
  cities2 = [
    {
      "City": "SGM",
      "State": "Rajasthan",
      "District": "Ganganagar"
    },
    {
      "City": "STR",
      "State": "Rajasthan",
      "District": "Ganganagar"
    },
    {
      "City": "A.Thirumuruganpoondi",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "A.Vellalapatti",
      "State": "Tamil Nadu",
      "District": "Madurai"
    },
    {
      "City": "Aadityana",
      "State": "Gujarat",
      "District": "Porbandar"
    },
    {
      "City": "Aambaliyasan",
      "State": "Gujarat",
      "District": "Mahesana"
    },
    {
      "City": "Aantaliya",
      "State": "Gujarat",
      "District": "Navsari"
    },
    {
      "City": "Aarambhada",
      "State": "Gujarat",
      "District": "Jamnagar"
    },
    {
      "City": "Abhayapuri",
      "State": "Assam",
      "District": "Bongaigaon"
    },
    {
      "City": "Abiramam",
      "State": "Tamil Nadu",
      "District": "Ramanathapuram"
    },
    {
      "City": "Abohar",
      "State": "Punjab",
      "District": "Firozpur"
    },
    {
      "City": "Abrama",
      "State": "Gujarat",
      "District": "Valsad"
    },
    {
      "City": "Abu Road",
      "State": "Rajasthan",
      "District": "Sirohi"
    },
    {
      "City": "Achabal",
      "State": "Jammu & Kashmir",
      "District": "Anantnag"
    },
    {
      "City": "Achalpur",
      "State": "Maharashtra",
      "District": "Amravati"
    },
    {
      "City": "Achampudur",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Acharapakkam",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Acharipallam",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Achhalda",
      "State": "Uttar Pradesh",
      "District": "Auraiya"
    },
    {
      "City": "Achhnera",
      "State": "Uttar Pradesh",
      "District": "Agra"
    },
    {
      "City": "Achipatti",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Adalaj",
      "State": "Gujarat",
      "District": "Gandhinagar"
    },
    {
      "City": "Adampur",
      "State": "Punjab",
      "District": "Jalandhar"
    },
    {
      "City": "Adari",
      "State": "Uttar Pradesh",
      "District": "Mau"
    },
    {
      "City": "Adikaratti",
      "State": "Tamil Nadu",
      "District": "The Nilgiris"
    },
    {
      "City": "Adilabad",
      "State": "Andhra Pradesh",
      "District": "Adilabad"
    },
    {
      "City": "Adiramapattinam",
      "State": "Tamil Nadu",
      "District": "Thanjavur"
    },
    {
      "City": "Adityapatna",
      "State": "Karnataka",
      "District": "Tumkur"
    },
    {
      "City": "Adityapur",
      "State": "Jharkhand",
      "District": "Pashchimi Singhbhum"
    },
    {
      "City": "Adoni",
      "State": "Andhra Pradesh",
      "District": "Kurnool"
    },
    {
      "City": "Adoor",
      "State": "Kerala",
      "District": "Pathanamthitta"
    },
    {
      "City": "Adra",
      "State": "West Bengal",
      "District": "Puruliya"
    },
    {
      "City": "Aduthurai alias Maruthuvakudi",
      "State": "Tamil Nadu",
      "District": "Thanjavur"
    },
    {
      "City": "Adyar",
      "State": "Karnataka",
      "District": "Dakshina Kannada"
    },
    {
      "City": "Afzalgarh",
      "State": "Uttar Pradesh",
      "District": "Bijnor"
    },
    {
      "City": "Afzalpur",
      "State": "Karnataka",
      "District": "Gulbarga"
    },
    {
      "City": "Agar",
      "State": "Madhya Pradesh",
      "District": "Shajapur"
    },
    {
      "City": "Agaram",
      "State": "Tamil Nadu",
      "District": "Dindigul"
    },
    {
      "City": "Agartala",
      "State": "Tripura",
      "District": "West Tripura"
    },
    {
      "City": "Agarwal Mandi",
      "State": "Uttar Pradesh",
      "District": "Baghpat"
    },
    {
      "City": "Agastheeswaram",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Agra",
      "State": "Uttar Pradesh",
      "District": "Agra"
    },
    {
      "City": "Agra",
      "State": "Uttar Pradesh",
      "District": "Agra"
    },
    {
      "City": "Ahiwara",
      "State": "Chhattisgarh",
      "District": "Durg"
    },
    {
      "City": "Ahmadnagar",
      "State": "Maharashtra",
      "District": "Ahmadnagar"
    },
    {
      "City": "Ahmadnagar",
      "State": "Maharashtra",
      "District": "Ahmadnagar"
    },
    {
      "City": "Ahmadpur",
      "State": "West Bengal",
      "District": "Birbhum"
    },
    {
      "City": "Ahmadpur",
      "State": "Maharashtra",
      "District": "Latur"
    },
    {
      "City": "Ahmedabad",
      "State": "Gujarat",
      "District": "Ahmadabad"
    },
    {
      "City": "Ahmedabad Cantonment",
      "State": "Gujarat",
      "District": "Ahmadabad"
    },
    {
      "City": "Ahmedgarh",
      "State": "Punjab",
      "District": "Sangrur"
    },
    {
      "City": "Ahraura",
      "State": "Uttar Pradesh",
      "District": "Mirzapur"
    },
    {
      "City": "Aiho",
      "State": "West Bengal",
      "District": "Maldah"
    },
    {
      "City": "Ailum",
      "State": "Uttar Pradesh",
      "District": "Muzaffarnagar"
    },
    {
      "City": "Air Force Area",
      "State": "Uttar Pradesh",
      "District": "Gorakhpur"
    },
    {
      "City": "Aistala",
      "State": "West Bengal",
      "District": "Nadia"
    },
    {
      "City": "Aizawl",
      "State": "Mizoram",
      "District": "Aizawl"
    },
    {
      "City": "Ajaigarh",
      "State": "Madhya Pradesh",
      "District": "Panna"
    },
    {
      "City": "Ajhuwa",
      "State": "Uttar Pradesh",
      "District": "Kaushambi"
    },
    {
      "City": "Ajmer",
      "State": "Rajasthan",
      "District": "Ajmer"
    },
    {
      "City": "Ajnala",
      "State": "Punjab",
      "District": "Amritsar"
    },
    {
      "City": "Ajra",
      "State": "Maharashtra",
      "District": "Kolhapur"
    },
    {
      "City": "Akalgarh",
      "State": "Punjab",
      "District": "Ludhiana"
    },
    {
      "City": "Akaltara",
      "State": "Chhattisgarh",
      "District": "Janjgir-Champa"
    },
    {
      "City": "Akathiyoor",
      "State": "Kerala",
      "District": "Thrissur"
    },
    {
      "City": "Akbarpur",
      "State": "Uttar Pradesh",
      "District": "Kanpur Dehat"
    },
    {
      "City": "Akbarpur",
      "State": "Uttar Pradesh",
      "District": "Ambedaker Nagar"
    },
    {
      "City": "Akhnoor",
      "State": "Jammu & Kashmir",
      "District": "Jammu"
    },
    {
      "City": "Akkalkot",
      "State": "Maharashtra",
      "District": "Solapur"
    },
    {
      "City": "Akkarampalle",
      "State": "Andhra Pradesh",
      "District": "Chittoor"
    },
    {
      "City": "Akkayapalle",
      "State": "Andhra Pradesh",
      "District": "Cuddapah"
    },
    {
      "City": "Aklera",
      "State": "Rajasthan",
      "District": "Jhalawar"
    },
    {
      "City": "Akoda",
      "State": "Madhya Pradesh",
      "District": "Bhind"
    },
    {
      "City": "Akodia",
      "State": "Madhya Pradesh",
      "District": "Shajapur"
    },
    {
      "City": "Akola",
      "State": "Maharashtra",
      "District": "Akola"
    },
    {
      "City": "Akot",
      "State": "Maharashtra",
      "District": "Akola"
    },
    {
      "City": "Alagappapuram",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Alampalayam",
      "State": "Tamil Nadu",
      "District": "Namakkal"
    },
    {
      "City": "Alampur",
      "State": "Madhya Pradesh",
      "District": "Bhind"
    },
    {
      "City": "Aland",
      "State": "Karnataka",
      "District": "Gulbarga"
    },
    {
      "City": "Alandi",
      "State": "Maharashtra",
      "District": "Pune"
    },
    {
      "City": "Alandur",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Alang",
      "State": "Gujarat",
      "District": "Bhavnagar"
    },
    {
      "City": "Alanganallur",
      "State": "Tamil Nadu",
      "District": "Madurai"
    },
    {
      "City": "Alangayam",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Alangudi",
      "State": "Tamil Nadu",
      "District": "Pudukkottai"
    },
    {
      "City": "Alangulam",
      "State": "Tamil Nadu",
      "District": "Virudhunagar"
    },
    {
      "City": "Alangulam",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Alanthurai",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Alapakkam",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Alappuzha",
      "State": "Kerala",
      "District": "Alappuzha"
    },
    {
      "City": "Alawalpur",
      "State": "Punjab",
      "District": "Jalandhar"
    },
    {
      "City": "Aldona",
      "State": "Goa",
      "District": "North Goa"
    },
    {
      "City": "Ali Pur",
      "State": "Delhi *",
      "District": "North West"
    },
    {
      "City": "Alibag",
      "State": "Maharashtra",
      "District": "Raigarh"
    },
    {
      "City": "Aliganj",
      "State": "Uttar Pradesh",
      "District": "Etah"
    },
    {
      "City": "Aligarh",
      "State": "Uttar Pradesh",
      "District": "Aligarh"
    },
    {
      "City": "Alipurduar",
      "State": "West Bengal",
      "District": "Jalpaiguri"
    },
    {
      "City": "Alipurduar Rly.Jnc.",
      "State": "West Bengal",
      "District": "Jalpaiguri"
    },
    {
      "City": "Alirajpur",
      "State": "Madhya Pradesh",
      "District": "Jhabua"
    },
    {
      "City": "Allahabad",
      "State": "Uttar Pradesh",
      "District": "Allahabad"
    },
    {
      "City": "Allahabad",
      "State": "Uttar Pradesh",
      "District": "Allahabad"
    },
    {
      "City": "Allahganj",
      "State": "Uttar Pradesh",
      "District": "Shahjahanpur"
    },
    {
      "City": "Allapur",
      "State": "Uttar Pradesh",
      "District": "Budaun"
    },
    {
      "City": "Allapuram",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Almora",
      "State": "Uttaranchal",
      "District": "Almora"
    },
    {
      "City": "Almora",
      "State": "Uttaranchal",
      "District": "Almora"
    },
    {
      "City": "Alnavar",
      "State": "Karnataka",
      "District": "Dharwad"
    },
    {
      "City": "Along",
      "State": "Arunachal Pradesh",
      "District": "West Siang"
    },
    {
      "City": "Alot",
      "State": "Madhya Pradesh",
      "District": "Ratlam"
    },
    {
      "City": "Alpur",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Alur",
      "State": "Karnataka",
      "District": "Hassan"
    },
    {
      "City": "Alur",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Aluva",
      "State": "Kerala",
      "District": "Ernakulam"
    },
    {
      "City": "Alwal",
      "State": "Andhra Pradesh",
      "District": "Rangareddi"
    },
    {
      "City": "Alwar",
      "State": "Rajasthan",
      "District": "Alwar"
    },
    {
      "City": "Alwarkurichi",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Alwarthirunagiri",
      "State": "Tamil Nadu",
      "District": "Toothukudi"
    },
    {
      "City": "Amadalavalasa",
      "State": "Andhra Pradesh",
      "District": "Srikakulam"
    },
    {
      "City": "Amalapuram",
      "State": "Andhra Pradesh",
      "District": "East Godavari"
    },
    {
      "City": "Amalner",
      "State": "Maharashtra",
      "District": "Jalgaon"
    },
    {
      "City": "Amanganj",
      "State": "Madhya Pradesh",
      "District": "Panna"
    },
    {
      "City": "Amanpur",
      "State": "Uttar Pradesh",
      "District": "Etah"
    },
    {
      "City": "Amarkantak",
      "State": "Madhya Pradesh",
      "District": "Shahdol"
    },
    {
      "City": "Amarpatan",
      "State": "Madhya Pradesh",
      "District": "Satna"
    },
    {
      "City": "Amarpur",
      "State": "Tripura",
      "District": "South Tripura"
    },
    {
      "City": "Amarpur",
      "State": "Bihar",
      "District": "Banka"
    },
    {
      "City": "Amarwara",
      "State": "Madhya Pradesh",
      "District": "Chhindwara"
    },
    {
      "City": "Ambad",
      "State": "Maharashtra",
      "District": "Jalna"
    },
    {
      "City": "Ambada",
      "State": "Madhya Pradesh",
      "District": "Chhindwara"
    },
    {
      "City": "Ambagarh Chowki",
      "State": "Chhattisgarh",
      "District": "Rajnandgaon"
    },
    {
      "City": "Ambah",
      "State": "Madhya Pradesh",
      "District": "Morena"
    },
    {
      "City": "Ambaji",
      "State": "Gujarat",
      "District": "Banas Kantha"
    },
    {
      "City": "Ambala",
      "State": "Haryana",
      "District": "Ambala"
    },
    {
      "City": "Ambala Cantt.",
      "State": "Haryana",
      "District": "Ambala"
    },
    {
      "City": "Ambala Sadar",
      "State": "Haryana",
      "District": "Ambala"
    },
    {
      "City": "Ambarnath",
      "State": "Maharashtra",
      "District": "Thane"
    },
    {
      "City": "Ambasamudram",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Ambassa",
      "State": "Tripura",
      "District": "Dhalai"
    },
    {
      "City": "Ambattur",
      "State": "Tamil Nadu",
      "District": "Thiruvallur"
    },
    {
      "City": "Ambehta",
      "State": "Uttar Pradesh",
      "District": "Saharanpur"
    },
    {
      "City": "Ambejogai",
      "State": "Maharashtra",
      "District": "Bid"
    },
    {
      "City": "Ambikanagara",
      "State": "Karnataka",
      "District": "Uttara Kannada"
    },
    {
      "City": "Ambikapur",
      "State": "Chhattisgarh",
      "District": "Surguja"
    },
    {
      "City": "Ambikapur Part-X",
      "State": "Assam",
      "District": "Cachar"
    },
    {
      "City": "Ambivali Tarf Wankhal",
      "State": "Maharashtra",
      "District": "Raigarh"
    },
    {
      "City": "Ambur",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Amet",
      "State": "Rajasthan",
      "District": "Rajsamand"
    },
    {
      "City": "Amethi",
      "State": "Uttar Pradesh",
      "District": "Lucknow"
    },
    {
      "City": "Amethi",
      "State": "Uttar Pradesh",
      "District": "Sultanpur"
    },
    {
      "City": "Amguri",
      "State": "Assam",
      "District": "Sibsagar"
    },
    {
      "City": "Amila",
      "State": "Uttar Pradesh",
      "District": "Mau"
    },
    {
      "City": "Amilo",
      "State": "Uttar Pradesh",
      "District": "Azamgarh"
    },
    {
      "City": "Aminagar Sarai",
      "State": "Uttar Pradesh",
      "District": "Baghpat"
    },
    {
      "City": "Aminagar Urf Bhurbaral",
      "State": "Uttar Pradesh",
      "District": "Meerut"
    },
    {
      "City": "Amini",
      "State": "Lakshadweep *",
      "District": "Lakshadweep"
    },
    {
      "City": "Amkula",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Amla",
      "State": "Madhya Pradesh",
      "District": "Betul"
    },
    {
      "City": "Amlabad",
      "State": "Jharkhand",
      "District": "Bokaro"
    },
    {
      "City": "Amlai",
      "State": "Madhya Pradesh",
      "District": "Shahdol"
    },
    {
      "City": "Amli",
      "State": "Dadra & Nagar Haveli *",
      "District": "Dadra & Nagar Haveli"
    },
    {
      "City": "Amloh",
      "State": "Punjab",
      "District": "Fatehgarh Sahib"
    },
    {
      "City": "Ammainaickanur",
      "State": "Tamil Nadu",
      "District": "Dindigul"
    },
    {
      "City": "Ammapettai",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Ammapettai",
      "State": "Tamil Nadu",
      "District": "Thanjavur"
    },
    {
      "City": "Ammavarikuppam",
      "State": "Tamil Nadu",
      "District": "Thiruvallur"
    },
    {
      "City": "Ammoor",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Amodghata",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "Amraudha",
      "State": "Uttar Pradesh",
      "District": "Kanpur Dehat"
    },
    {
      "City": "Amravati",
      "State": "Maharashtra",
      "District": "Amravati"
    },
    {
      "City": "Amreli",
      "State": "Gujarat",
      "District": "Amreli"
    },
    {
      "City": "Amritsar",
      "State": "Punjab",
      "District": "Amritsar"
    },
    {
      "City": "Amritsar Cantt.",
      "State": "Punjab",
      "District": "Amritsar"
    },
    {
      "City": "Amroha",
      "State": "Uttar Pradesh",
      "District": "Jyotiba Phule Nagar"
    },
    {
      "City": "Amtala",
      "State": "West Bengal",
      "District": "South Twentyfour Parganas"
    },
    {
      "City": "Anaimalai",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Anaiyur",
      "State": "Tamil Nadu",
      "District": "Madurai"
    },
    {
      "City": "Anaiyur",
      "State": "Tamil Nadu",
      "District": "Virudhunagar"
    },
    {
      "City": "Anakapalle",
      "State": "Andhra Pradesh",
      "District": "Visakhapatnam"
    },
    {
      "City": "Anakaputhur",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Anand",
      "State": "Gujarat",
      "District": "Anand"
    },
    {
      "City": "Anand Nagar",
      "State": "Assam",
      "District": "Dhubri"
    },
    {
      "City": "Anandapur",
      "State": "Orissa",
      "District": "Kendujhar"
    },
    {
      "City": "Anandnagar",
      "State": "Uttar Pradesh",
      "District": "Maharajganj"
    },
    {
      "City": "Anandpur Sahib",
      "State": "Punjab",
      "District": "Rupnagar"
    },
    {
      "City": "Anantapur",
      "State": "Andhra Pradesh",
      "District": "Anantapur"
    },
    {
      "City": "Ananthapuram",
      "State": "Tamil Nadu",
      "District": "Viluppuram"
    },
    {
      "City": "Anantnag",
      "State": "Jammu & Kashmir",
      "District": "Anantnag"
    },
    {
      "City": "Ancharakandy",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Andada",
      "State": "Gujarat",
      "District": "Bharuch"
    },
    {
      "City": "Andipalayam",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Andipatti Jakkampatti",
      "State": "Tamil Nadu",
      "District": "Theni"
    },
    {
      "City": "Andro",
      "State": "Manipur",
      "District": "Imphal East"
    },
    {
      "City": "Andul",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Anekal",
      "State": "Karnataka",
      "District": "Bangalore"
    },
    {
      "City": "Angamaly",
      "State": "Kerala",
      "District": "Ernakulam"
    },
    {
      "City": "Angarpathar",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Anjad",
      "State": "Madhya Pradesh",
      "District": "Barwani"
    },
    {
      "City": "Anjangaon",
      "State": "Maharashtra",
      "District": "Amravati"
    },
    {
      "City": "Anjar",
      "State": "Gujarat",
      "District": "Kachchh"
    },
    {
      "City": "Anjugramam",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Anklav",
      "State": "Gujarat",
      "District": "Anand"
    },
    {
      "City": "Anklesvar",
      "State": "Gujarat",
      "District": "Bharuch"
    },
    {
      "City": "Anklesvar INA",
      "State": "Gujarat",
      "District": "Bharuch"
    },
    {
      "City": "Ankola",
      "State": "Karnataka",
      "District": "Uttara Kannada"
    },
    {
      "City": "Anksa",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Ankurhati",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Annamalai Nagar",
      "State": "Tamil Nadu",
      "District": "Cuddalore"
    },
    {
      "City": "Annavasal",
      "State": "Tamil Nadu",
      "District": "Pudukkottai"
    },
    {
      "City": "Annigeri",
      "State": "Karnataka",
      "District": "Dharwad"
    },
    {
      "City": "Annur",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Anpara",
      "State": "Uttar Pradesh",
      "District": "Sonbhadra"
    },
    {
      "City": "Antah",
      "State": "Rajasthan",
      "District": "Baran"
    },
    {
      "City": "Antari",
      "State": "Madhya Pradesh",
      "District": "Gwalior"
    },
    {
      "City": "Anthiyur",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Antu",
      "State": "Uttar Pradesh",
      "District": "Pratapgarh"
    },
    {
      "City": "Anugul",
      "State": "Orissa",
      "District": "Anugul"
    },
    {
      "City": "Anup Nagar",
      "State": "West Bengal",
      "District": "Murshidabad"
    },
    {
      "City": "Anupgarh",
      "State": "Rajasthan",
      "District": "Ganganagar"
    },
    {
      "City": "Anuppur",
      "State": "Madhya Pradesh",
      "District": "Shahdol"
    },
    {
      "City": "Anupshahr",
      "State": "Uttar Pradesh",
      "District": "Bulandshahr"
    },
    {
      "City": "Aonla",
      "State": "Uttar Pradesh",
      "District": "Bareilly"
    },
    {
      "City": "Appakudal",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Aquem",
      "State": "Goa",
      "District": "South Goa"
    },
    {
      "City": "Ara",
      "State": "Jharkhand",
      "District": "Hazaribag"
    },
    {
      "City": "Arachalur",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Arakandanallur",
      "State": "Tamil Nadu",
      "District": "Viluppuram"
    },
    {
      "City": "Arakonam",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Aralvaimozhi",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Arambag",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "Arang",
      "State": "Chhattisgarh",
      "District": "Raipur"
    },
    {
      "City": "Arani",
      "State": "Tamil Nadu",
      "District": "Thiruvallur"
    },
    {
      "City": "Arani",
      "State": "Tamil Nadu",
      "District": "Tiruvanamalai"
    },
    {
      "City": "Aranthangi",
      "State": "Tamil Nadu",
      "District": "Pudukkottai"
    },
    {
      "City": "Araria",
      "State": "Bihar",
      "District": "Araria"
    },
    {
      "City": "Arasiramani",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Aravakurichi",
      "State": "Tamil Nadu",
      "District": "Kapur"
    },
    {
      "City": "Aravankad",
      "State": "Tamil Nadu",
      "District": "The Nilgiris"
    },
    {
      "City": "Arcot",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Areraj",
      "State": "Bihar",
      "District": "Purba Champaran"
    },
    {
      "City": "Argari",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Arimalam",
      "State": "Tamil Nadu",
      "District": "Pudukkottai"
    },
    {
      "City": "Ariyalur",
      "State": "Tamil Nadu",
      "District": "Ariyalur"
    },
    {
      "City": "Ariyappampalayam",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Ariyur",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Arkalgud",
      "State": "Karnataka",
      "District": "Hassan"
    },
    {
      "City": "Arki",
      "State": "Himachal Pradesh",
      "District": "Solan"
    },
    {
      "City": "Armapur Estate",
      "State": "Uttar Pradesh",
      "District": "Kanpur Nagar"
    },
    {
      "City": "Arnia",
      "State": "Jammu & Kashmir",
      "District": "Jammu"
    },
    {
      "City": "Aron",
      "State": "Madhya Pradesh",
      "District": "Guna"
    },
    {
      "City": "Arookutty",
      "State": "Kerala",
      "District": "Alappuzha"
    },
    {
      "City": "Aroor",
      "State": "Kerala",
      "District": "Alappuzha"
    },
    {
      "City": "Arra",
      "State": "West Bengal",
      "District": "Puruliya"
    },
    {
      "City": "Arrah",
      "State": "Bihar",
      "District": "Bhojpur"
    },
    {
      "City": "Arsikere",
      "State": "Karnataka",
      "District": "Hassan"
    },
    {
      "City": "Arumanai",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Arumbavur",
      "State": "Tamil Nadu",
      "District": "Perambalur"
    },
    {
      "City": "Arumuganeri",
      "State": "Tamil Nadu",
      "District": "Toothukudi"
    },
    {
      "City": "Aruppukkottai",
      "State": "Tamil Nadu",
      "District": "Virudhunagar"
    },
    {
      "City": "Arvi",
      "State": "Maharashtra",
      "District": "Wardha"
    },
    {
      "City": "Asan Khurd",
      "State": "Haryana",
      "District": "Panipat"
    },
    {
      "City": "Asansol",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Asarganj",
      "State": "Bihar",
      "District": "Munger"
    },
    {
      "City": "Ashok Nagar",
      "State": "Madhya Pradesh",
      "District": "Guna"
    },
    {
      "City": "Ashokapuram",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Ashoknagar Kalyangarh",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Ashrafpur Kichhauchha",
      "State": "Uttar Pradesh",
      "District": "Ambedaker Nagar"
    },
    {
      "City": "Ashta",
      "State": "Madhya Pradesh",
      "District": "Sehore"
    },
    {
      "City": "Ashta",
      "State": "Maharashtra",
      "District": "Sangli"
    },
    {
      "City": "Asifabad",
      "State": "Andhra Pradesh",
      "District": "Adilabad"
    },
    {
      "City": "Asika",
      "State": "Orissa",
      "District": "Ganjam"
    },
    {
      "City": "Asind",
      "State": "Rajasthan",
      "District": "Bhilwara"
    },
    {
      "City": "Asola",
      "State": "Delhi *",
      "District": "South"
    },
    {
      "City": "Assandh",
      "State": "Haryana",
      "District": "Karnal"
    },
    {
      "City": "Atarra",
      "State": "Uttar Pradesh",
      "District": "Banda"
    },
    {
      "City": "Atasu",
      "State": "Uttar Pradesh",
      "District": "Auraiya"
    },
    {
      "City": "Ateli",
      "State": "Haryana",
      "District": "Mahendragarh"
    },
    {
      "City": "Athagad",
      "State": "Orissa",
      "District": "Cuttack"
    },
    {
      "City": "Athani",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Athanur",
      "State": "Tamil Nadu",
      "District": "Namakkal"
    },
    {
      "City": "Athimarapatti",
      "State": "Tamil Nadu",
      "District": "Toothukudi"
    },
    {
      "City": "Athipattu",
      "State": "Tamil Nadu",
      "District": "Thiruvallur"
    },
    {
      "City": "Athmallik",
      "State": "Orissa",
      "District": "Anugul"
    },
    {
      "City": "Athni",
      "State": "Karnataka",
      "District": "Belgaum"
    },
    {
      "City": "Athur",
      "State": "Tamil Nadu",
      "District": "Toothukudi"
    },
    {
      "City": "Athur",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Atrauli",
      "State": "Uttar Pradesh",
      "District": "Aligarh"
    },
    {
      "City": "Atraulia",
      "State": "Uttar Pradesh",
      "District": "Azamgarh"
    },
    {
      "City": "Attayampatti",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Attingal",
      "State": "Kerala",
      "District": "Thiruvananthapuram"
    },
    {
      "City": "Attur",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Atul",
      "State": "Gujarat",
      "District": "Valsad"
    },
    {
      "City": "Aurad",
      "State": "Karnataka",
      "District": "Bidar"
    },
    {
      "City": "Auraiya",
      "State": "Uttar Pradesh",
      "District": "Auraiya"
    },
    {
      "City": "Aurangabad",
      "State": "West Bengal",
      "District": "Murshidabad"
    },
    {
      "City": "Aurangabad",
      "State": "Uttar Pradesh",
      "District": "Bulandshahr"
    },
    {
      "City": "Aurangabad",
      "State": "Maharashtra",
      "District": "Aurangabad"
    },
    {
      "City": "Aurangabad",
      "State": "Maharashtra",
      "District": "Aurangabad"
    },
    {
      "City": "Aurangabad",
      "State": "Bihar",
      "District": "Aurangabad"
    },
    {
      "City": "Aurangabad Bangar",
      "State": "Uttar Pradesh",
      "District": "Mathura"
    },
    {
      "City": "Auras",
      "State": "Uttar Pradesh",
      "District": "Unnao"
    },
    {
      "City": "Ausa",
      "State": "Maharashtra",
      "District": "Latur"
    },
    {
      "City": "Avadattur",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Avadi",
      "State": "Tamil Nadu",
      "District": "Thiruvallur"
    },
    {
      "City": "Avalpoondurai",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Avanashi",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Avaniapuram",
      "State": "Tamil Nadu",
      "District": "Madurai"
    },
    {
      "City": "Avinissery",
      "State": "Kerala",
      "District": "Thrissur"
    },
    {
      "City": "Awagarh",
      "State": "Uttar Pradesh",
      "District": "Etah"
    },
    {
      "City": "Awantipora",
      "State": "Jammu & Kashmir",
      "District": "Pulwama"
    },
    {
      "City": "Ayakudi",
      "State": "Tamil Nadu",
      "District": "Dindigul"
    },
    {
      "City": "Aygudi",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Ayodhya",
      "State": "Uttar Pradesh",
      "District": "Faizabad"
    },
    {
      "City": "Ayothiapattinam",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Ayyalur",
      "State": "Tamil Nadu",
      "District": "Dindigul"
    },
    {
      "City": "Ayyampalayam",
      "State": "Tamil Nadu",
      "District": "Dindigul"
    },
    {
      "City": "Ayyampettai",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Ayyampettai",
      "State": "Tamil Nadu",
      "District": "Thanjavur"
    },
    {
      "City": "Azamgarh",
      "State": "Uttar Pradesh",
      "District": "Azamgarh"
    },
    {
      "City": "Azhagiapandiapuram",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Azhikode North",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Azhikode South",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Azizpur",
      "State": "Uttar Pradesh",
      "District": "Agra"
    },
    {
      "City": "Azmatgarh",
      "State": "Uttar Pradesh",
      "District": "Azamgarh"
    },
    {
      "City": "B. Mallapuram",
      "State": "Tamil Nadu",
      "District": "Dharmapuri"
    },
    {
      "City": "B. Meenakshipuram",
      "State": "Tamil Nadu",
      "District": "Theni"
    },
    {
      "City": "Babai",
      "State": "Madhya Pradesh",
      "District": "Hoshangabad"
    },
    {
      "City": "Babar Pur",
      "State": "Delhi *",
      "District": "North East"
    },
    {
      "City": "Babarpur Ajitmal",
      "State": "Uttar Pradesh",
      "District": "Auraiya"
    },
    {
      "City": "Baberu",
      "State": "Uttar Pradesh",
      "District": "Banda"
    },
    {
      "City": "Babhulgaon",
      "State": "Maharashtra",
      "District": "Hingoli"
    },
    {
      "City": "Babina",
      "State": "Uttar Pradesh",
      "District": "Jhansi"
    },
    {
      "City": "Babiyal",
      "State": "Haryana",
      "District": "Ambala"
    },
    {
      "City": "Bablari Dewanganj",
      "State": "West Bengal",
      "District": "Nadia"
    },
    {
      "City": "Babrala",
      "State": "Uttar Pradesh",
      "District": "Budaun"
    },
    {
      "City": "Babua Kalan",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Babugarh",
      "State": "Uttar Pradesh",
      "District": "Ghaziabad"
    },
    {
      "City": "Bachhraon",
      "State": "Uttar Pradesh",
      "District": "Jyotiba Phule Nagar"
    },
    {
      "City": "Bachhrawan",
      "State": "Uttar Pradesh",
      "District": "Rae Bareli"
    },
    {
      "City": "Bad",
      "State": "Uttar Pradesh",
      "District": "Mathura"
    },
    {
      "City": "Bada Malhera",
      "State": "Madhya Pradesh",
      "District": "Chhatarpur"
    },
    {
      "City": "Badagaon",
      "State": "Madhya Pradesh",
      "District": "Tikamgarh"
    },
    {
      "City": "Badagoan",
      "State": "Madhya Pradesh",
      "District": "Shajapur"
    },
    {
      "City": "Badami",
      "State": "Karnataka",
      "District": "Bagalkot"
    },
    {
      "City": "Badami Bagh",
      "State": "Jammu & Kashmir",
      "District": "Srinagar"
    },
    {
      "City": "Badarpur",
      "State": "Assam",
      "District": "Karimganj"
    },
    {
      "City": "Badarpur Rly Town",
      "State": "Assam",
      "District": "Karimganj"
    },
    {
      "City": "Badarwas",
      "State": "Madhya Pradesh",
      "District": "Shivpuri"
    },
    {
      "City": "Badawada",
      "State": "Madhya Pradesh",
      "District": "Ratlam"
    },
    {
      "City": "Baddi",
      "State": "Himachal Pradesh",
      "District": "Solan"
    },
    {
      "City": "Bade Bacheli",
      "State": "Chhattisgarh",
      "District": "Dantewada"
    },
    {
      "City": "Badepalle",
      "State": "Andhra Pradesh",
      "District": "Mahbubnagar"
    },
    {
      "City": "Badgam",
      "State": "Jammu & Kashmir",
      "District": "Badgam"
    },
    {
      "City": "Badhagachhi",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "Badharghat",
      "State": "Tripura",
      "District": "West Tripura"
    },
    {
      "City": "Badhni Kalan",
      "State": "Punjab",
      "District": "Moga"
    },
    {
      "City": "Badi",
      "State": "Madhya Pradesh",
      "District": "Raisen"
    },
    {
      "City": "Badkuhi",
      "State": "Madhya Pradesh",
      "District": "Chhindwara"
    },
    {
      "City": "Badlapur",
      "State": "Maharashtra",
      "District": "Thane"
    },
    {
      "City": "Badnagar",
      "State": "Madhya Pradesh",
      "District": "Ujjain"
    },
    {
      "City": "Badnawar",
      "State": "Madhya Pradesh",
      "District": "Dhar"
    },
    {
      "City": "Badod",
      "State": "Madhya Pradesh",
      "District": "Shajapur"
    },
    {
      "City": "Badoda",
      "State": "Madhya Pradesh",
      "District": "Sheopur"
    },
    {
      "City": "Badra",
      "State": "Madhya Pradesh",
      "District": "Shahdol"
    },
    {
      "City": "Badrinathpuri",
      "State": "Uttaranchal",
      "District": "Chamoli"
    },
    {
      "City": "Baduria",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Bagaha",
      "State": "Bihar",
      "District": "Pashchim Champaran"
    },
    {
      "City": "Bagalkot",
      "State": "Karnataka",
      "District": "Bagalkot"
    },
    {
      "City": "Bagasara",
      "State": "Gujarat",
      "District": "Amreli"
    },
    {
      "City": "Bagbahara",
      "State": "Chhattisgarh",
      "District": "Mahasamund"
    },
    {
      "City": "Bagbera",
      "State": "Jharkhand",
      "District": "Purbi Singhbhum"
    },
    {
      "City": "Bagepalli",
      "State": "Karnataka",
      "District": "Kolar"
    },
    {
      "City": "Bageshwar",
      "State": "Uttaranchal",
      "District": "Bageshwar"
    },
    {
      "City": "Baggar",
      "State": "Rajasthan",
      "District": "Jhunjhunun"
    },
    {
      "City": "Bagh",
      "State": "Madhya Pradesh",
      "District": "Dhar"
    },
    {
      "City": "Bagha Purana",
      "State": "Punjab",
      "District": "Moga"
    },
    {
      "City": "Baghmara",
      "State": "Meghalaya",
      "District": "South Garo Hills"
    },
    {
      "City": "Baghpat",
      "State": "Uttar Pradesh",
      "District": "Baghpat"
    },
    {
      "City": "Bagli",
      "State": "Madhya Pradesh",
      "District": "Dewas"
    },
    {
      "City": "Bagnan",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Bagru",
      "State": "Rajasthan",
      "District": "Jaipur"
    },
    {
      "City": "Bah",
      "State": "Uttar Pradesh",
      "District": "Agra"
    },
    {
      "City": "Bahadurganj",
      "State": "Bihar",
      "District": "Kishanganj"
    },
    {
      "City": "Bahadurganj",
      "State": "Uttar Pradesh",
      "District": "Ghazipur"
    },
    {
      "City": "Bahadurgarh",
      "State": "Haryana",
      "District": "Jhajjar"
    },
    {
      "City": "Baharampur",
      "State": "West Bengal",
      "District": "Murshidabad"
    },
    {
      "City": "Bahbari Gaon",
      "State": "Assam",
      "District": "Tinsukia"
    },
    {
      "City": "Baheri",
      "State": "Uttar Pradesh",
      "District": "Bareilly"
    },
    {
      "City": "Bahirgram",
      "State": "West Bengal",
      "District": "Medinipur"
    },
    {
      "City": "Bahjoi",
      "State": "Uttar Pradesh",
      "District": "Moradabad"
    },
    {
      "City": "Bahraich",
      "State": "Uttar Pradesh",
      "District": "Bahraich"
    },
    {
      "City": "Bahsuma",
      "State": "Uttar Pradesh",
      "District": "Meerut"
    },
    {
      "City": "Bahula",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Bahuwa",
      "State": "Uttar Pradesh",
      "District": "Fatehpur"
    },
    {
      "City": "Baidyabati",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "Baihar",
      "State": "Madhya Pradesh",
      "District": "Balaghat"
    },
    {
      "City": "Baikunthpur",
      "State": "Chhattisgarh",
      "District": "Koriya"
    },
    {
      "City": "Baikunthpur",
      "State": "Madhya Pradesh",
      "District": "Rewa"
    },
    {
      "City": "Bail Hongal",
      "State": "Karnataka",
      "District": "Belgaum"
    },
    {
      "City": "Bairabi",
      "State": "Mizoram",
      "District": "Kolasib"
    },
    {
      "City": "Bairatisal",
      "State": "West Bengal",
      "District": "Darjiling"
    },
    {
      "City": "Bairgania",
      "State": "Bihar",
      "District": "Sitamarhi"
    },
    {
      "City": "Bajala",
      "State": "Karnataka",
      "District": "Dakshina Kannada"
    },
    {
      "City": "Bajna",
      "State": "Uttar Pradesh",
      "District": "Mathura"
    },
    {
      "City": "Bajpe",
      "State": "Karnataka",
      "District": "Dakshina Kannada"
    },
    {
      "City": "Bajpur",
      "State": "Uttaranchal",
      "District": "Udham Singh Nagar"
    },
    {
      "City": "Bajva",
      "State": "Gujarat",
      "District": "Vadodara"
    },
    {
      "City": "Bakani",
      "State": "Rajasthan",
      "District": "Jhalawar"
    },
    {
      "City": "Bakewar",
      "State": "Uttar Pradesh",
      "District": "Etawah"
    },
    {
      "City": "Bakhtiarpur",
      "State": "Bihar",
      "District": "Patna"
    },
    {
      "City": "Bakiabad",
      "State": "Uttar Pradesh",
      "District": "Mirzapur"
    },
    {
      "City": "Bakloh",
      "State": "Himachal Pradesh",
      "District": "Chamba"
    },
    {
      "City": "Balachaur",
      "State": "Punjab",
      "District": "Nawanshahr"
    },
    {
      "City": "Balaghat",
      "State": "Madhya Pradesh",
      "District": "Balaghat"
    },
    {
      "City": "Balagoda (Bolani)",
      "State": "Orissa",
      "District": "Kendujhar"
    },
    {
      "City": "Balakrishnampatti",
      "State": "Tamil Nadu",
      "District": "Tiruchirappalli"
    },
    {
      "City": "Balakrishnapuram",
      "State": "Tamil Nadu",
      "District": "Dindigul"
    },
    {
      "City": "Balangir",
      "State": "Orissa",
      "District": "Balangir"
    },
    {
      "City": "Balapallam",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Balapur",
      "State": "Maharashtra",
      "District": "Akola"
    },
    {
      "City": "Balaram Pota",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Balarampur",
      "State": "West Bengal",
      "District": "Puruliya"
    },
    {
      "City": "Balarampur",
      "State": "West Bengal",
      "District": "South Twentyfour Parganas"
    },
    {
      "City": "Balasamudram",
      "State": "Tamil Nadu",
      "District": "Dindigul"
    },
    {
      "City": "Balasinor",
      "State": "Gujarat",
      "District": "Kheda"
    },
    {
      "City": "Baldeo",
      "State": "Uttar Pradesh",
      "District": "Mathura"
    },
    {
      "City": "Baldeogarh",
      "State": "Madhya Pradesh",
      "District": "Tikamgarh"
    },
    {
      "City": "Baleshwar",
      "State": "Orissa",
      "District": "Baleshwar"
    },
    {
      "City": "Bali",
      "State": "Rajasthan",
      "District": "Pali"
    },
    {
      "City": "Baliari",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Balichak",
      "State": "West Bengal",
      "District": "Medinipur"
    },
    {
      "City": "Balimela",
      "State": "Orissa",
      "District": "Malkangiri"
    },
    {
      "City": "Balkundra",
      "State": "Jharkhand",
      "District": "Hazaribag"
    },
    {
      "City": "Ballarpur",
      "State": "Maharashtra",
      "District": "Chandrapur"
    },
    {
      "City": "Ballavpur",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Ballia",
      "State": "Uttar Pradesh",
      "District": "Ballia"
    },
    {
      "City": "Bally",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Bally",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Balod",
      "State": "Chhattisgarh",
      "District": "Durg"
    },
    {
      "City": "Baloda",
      "State": "Chhattisgarh",
      "District": "Janjgir-Champa"
    },
    {
      "City": "Baloda Bazar",
      "State": "Chhattisgarh",
      "District": "Raipur"
    },
    {
      "City": "Balotra",
      "State": "Rajasthan",
      "District": "Barmer"
    },
    {
      "City": "Balrampur",
      "State": "Uttar Pradesh",
      "District": "Balrampur"
    },
    {
      "City": "Balugaon",
      "State": "Orissa",
      "District": "Khordha"
    },
    {
      "City": "Balurghat",
      "State": "West Bengal",
      "District": "Dakshin Dinajpur"
    },
    {
      "City": "Bambolim",
      "State": "Goa",
      "District": "North Goa"
    },
    {
      "City": "Bamhani",
      "State": "Madhya Pradesh",
      "District": "Mandla"
    },
    {
      "City": "Bamor",
      "State": "Madhya Pradesh",
      "District": "Morena"
    },
    {
      "City": "Bamora",
      "State": "Madhya Pradesh",
      "District": "Sagar"
    },
    {
      "City": "Bamun Sualkuchi",
      "State": "Assam",
      "District": "Kamrup"
    },
    {
      "City": "Bamunari",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "Banapur",
      "State": "Orissa",
      "District": "Khordha"
    },
    {
      "City": "Banarhat Tea Garden",
      "State": "West Bengal",
      "District": "Jalpaiguri"
    },
    {
      "City": "Banarsi",
      "State": "Chhattisgarh",
      "District": "Raipur"
    },
    {
      "City": "Banat",
      "State": "Uttar Pradesh",
      "District": "Muzaffarnagar"
    },
    {
      "City": "Banaur",
      "State": "Punjab",
      "District": "Patiala"
    },
    {
      "City": "Banbasa",
      "State": "Uttaranchal",
      "District": "Champawat"
    },
    {
      "City": "Banda",
      "State": "Madhya Pradesh",
      "District": "Sagar"
    },
    {
      "City": "Banda",
      "State": "Uttar Pradesh",
      "District": "Banda"
    },
    {
      "City": "Bandarulanka",
      "State": "Andhra Pradesh",
      "District": "East Godavari"
    },
    {
      "City": "Bandhgora",
      "State": "Jharkhand",
      "District": "Bokaro"
    },
    {
      "City": "Bandia",
      "State": "Uttaranchal",
      "District": "Udham Singh Nagar"
    },
    {
      "City": "Bandikui",
      "State": "Rajasthan",
      "District": "Dausa"
    },
    {
      "City": "Bandipore",
      "State": "Jammu & Kashmir",
      "District": "Baramula"
    },
    {
      "City": "Bandora",
      "State": "Goa",
      "District": "North Goa"
    },
    {
      "City": "Banga",
      "State": "Punjab",
      "District": "Nawanshahr"
    },
    {
      "City": "Bangalore",
      "State": "Karnataka",
      "District": "Bangalore"
    },
    {
      "City": "Bangaon",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Bangarapet",
      "State": "Karnataka",
      "District": "Kolar"
    },
    {
      "City": "Bangarmau",
      "State": "Uttar Pradesh",
      "District": "Unnao"
    },
    {
      "City": "Bangawan",
      "State": "Madhya Pradesh",
      "District": "Shahdol"
    },
    {
      "City": "Bangramanjeshwar",
      "State": "Kerala",
      "District": "Kasaragod"
    },
    {
      "City": "Bangura",
      "State": "Orissa",
      "District": "Kendujhar"
    },
    {
      "City": "Banihal",
      "State": "Jammu & Kashmir",
      "District": "Doda"
    },
    {
      "City": "Banjar",
      "State": "Himachal Pradesh",
      "District": "Kullu"
    },
    {
      "City": "Banka",
      "State": "Bihar",
      "District": "Banka"
    },
    {
      "City": "Bankapura",
      "State": "Karnataka",
      "District": "Haveri"
    },
    {
      "City": "Banki",
      "State": "Orissa",
      "District": "Cuttack"
    },
    {
      "City": "Banki",
      "State": "Uttar Pradesh",
      "District": "Barabanki"
    },
    {
      "City": "Bankner",
      "State": "Delhi *",
      "District": "North West"
    },
    {
      "City": "Bankra",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Bankura",
      "State": "West Bengal",
      "District": "Bankura"
    },
    {
      "City": "Banmankhi Bazar",
      "State": "Bihar",
      "District": "Purnia"
    },
    {
      "City": "Bannur",
      "State": "Karnataka",
      "District": "Mysore"
    },
    {
      "City": "Bansatar Kheda",
      "State": "Madhya Pradesh",
      "District": "Damoh"
    },
    {
      "City": "Bansberia",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "Bansdih",
      "State": "Uttar Pradesh",
      "District": "Ballia"
    },
    {
      "City": "Bansgaon",
      "State": "Uttar Pradesh",
      "District": "Gorakhpur"
    },
    {
      "City": "Banshra",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Bansi",
      "State": "Uttar Pradesh",
      "District": "Siddharthnagar"
    },
    {
      "City": "Banswara",
      "State": "Rajasthan",
      "District": "Banswara"
    },
    {
      "City": "Bantwa",
      "State": "Gujarat",
      "District": "Junagadh"
    },
    {
      "City": "Bantwal",
      "State": "Karnataka",
      "District": "Dakshina Kannada"
    },
    {
      "City": "Banupur",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Bapatla",
      "State": "Andhra Pradesh",
      "District": "Guntur"
    },
    {
      "City": "Bara Bamonia",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Barabazar",
      "State": "West Bengal",
      "District": "Puruliya"
    },
    {
      "City": "Baragaon",
      "State": "Uttar Pradesh",
      "District": "Jhansi"
    },
    {
      "City": "Baragaon",
      "State": "Uttar Pradesh",
      "District": "Varanasi"
    },
    {
      "City": "Barahiya",
      "State": "Bihar",
      "District": "Lakhisarai"
    },
    {
      "City": "Baraily",
      "State": "Madhya Pradesh",
      "District": "Raisen"
    },
    {
      "City": "Barajamda",
      "State": "Jharkhand",
      "District": "Pashchimi Singhbhum"
    },
    {
      "City": "Baramati",
      "State": "Maharashtra",
      "District": "Pune"
    },
    {
      "City": "Baramula",
      "State": "Jammu & Kashmir",
      "District": "Baramula"
    },
    {
      "City": "Baran",
      "State": "Rajasthan",
      "District": "Baran"
    },
    {
      "City": "Baranagar",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Barapali",
      "State": "Orissa",
      "District": "Bargarh"
    },
    {
      "City": "Barasat",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Barauli",
      "State": "Bihar",
      "District": "Gopalganj"
    },
    {
      "City": "Barauni IOC Township",
      "State": "Bihar",
      "District": "Begusarai"
    },
    {
      "City": "Baraut",
      "State": "Uttar Pradesh",
      "District": "Baghpat"
    },
    {
      "City": "Barbari (AMC Area)",
      "State": "Assam",
      "District": "Dibrugarh"
    },
    {
      "City": "Barbigha",
      "State": "Bihar",
      "District": "Sheikhpura"
    },
    {
      "City": "Barbil",
      "State": "Orissa",
      "District": "Kendujhar"
    },
    {
      "City": "Barddhaman",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Bardoli",
      "State": "Gujarat",
      "District": "Surat"
    },
    {
      "City": "Bareilly",
      "State": "Uttar Pradesh",
      "District": "Bareilly"
    },
    {
      "City": "Bareilly",
      "State": "Uttar Pradesh",
      "District": "Bareilly"
    },
    {
      "City": "Barela",
      "State": "Madhya Pradesh",
      "District": "Jabalpur"
    },
    {
      "City": "Baretta",
      "State": "Punjab",
      "District": "Mansa"
    },
    {
      "City": "Bargarh",
      "State": "Orissa",
      "District": "Bargarh"
    },
    {
      "City": "Barghat",
      "State": "Madhya Pradesh",
      "District": "Seoni"
    },
    {
      "City": "Bargur",
      "State": "Tamil Nadu",
      "District": "Dharmapuri"
    },
    {
      "City": "Barh",
      "State": "Bihar",
      "District": "Patna"
    },
    {
      "City": "Barhalganj",
      "State": "Uttar Pradesh",
      "District": "Gorakhpur"
    },
    {
      "City": "Barhani Bazar",
      "State": "Uttar Pradesh",
      "District": "Siddharthnagar"
    },
    {
      "City": "Barhi",
      "State": "Jharkhand",
      "District": "Hazaribag"
    },
    {
      "City": "Barhi",
      "State": "Madhya Pradesh",
      "District": "Katni"
    },
    {
      "City": "Bari",
      "State": "Rajasthan",
      "District": "Dhaulpur"
    },
    {
      "City": "Bari Brahmana",
      "State": "Jammu & Kashmir",
      "District": "Jammu"
    },
    {
      "City": "Bari Sadri",
      "State": "Rajasthan",
      "District": "Chittaurgarh"
    },
    {
      "City": "Barigarh",
      "State": "Madhya Pradesh",
      "District": "Chhatarpur"
    },
    {
      "City": "Barijhati",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "Baripada",
      "State": "Orissa",
      "District": "Mayurbhanj"
    },
    {
      "City": "Bariwala",
      "State": "Punjab",
      "District": "Muktsar"
    },
    {
      "City": "Barjora",
      "State": "West Bengal",
      "District": "Bankura"
    },
    {
      "City": "Barkakana",
      "State": "Jharkhand",
      "District": "Hazaribag"
    },
    {
      "City": "Barkhera",
      "State": "Uttar Pradesh",
      "District": "Pilibhit"
    },
    {
      "City": "Barkot",
      "State": "Uttaranchal",
      "District": "Uttarkashi"
    },
    {
      "City": "Barmer",
      "State": "Rajasthan",
      "District": "Barmer"
    },
    {
      "City": "Barnala",
      "State": "Punjab",
      "District": "Sangrur"
    },
    {
      "City": "Barpathar",
      "State": "Assam",
      "District": "Golaghat"
    },
    {
      "City": "Barpeta",
      "State": "Assam",
      "District": "Barpeta"
    },
    {
      "City": "Barpeta Road",
      "State": "Assam",
      "District": "Barpeta"
    },
    {
      "City": "Barrackpur",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Barrackpur Cantonment",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Barsana",
      "State": "Uttar Pradesh",
      "District": "Mathura"
    },
    {
      "City": "Barshi",
      "State": "Maharashtra",
      "District": "Solapur"
    },
    {
      "City": "Barua Sagar",
      "State": "Uttar Pradesh",
      "District": "Jhansi"
    },
    {
      "City": "Barughutu",
      "State": "Jharkhand",
      "District": "Hazaribag"
    },
    {
      "City": "Baruihuda",
      "State": "West Bengal",
      "District": "Nadia"
    },
    {
      "City": "Baruipur",
      "State": "West Bengal",
      "District": "South Twentyfour Parganas"
    },
    {
      "City": "Barwadih",
      "State": "Jharkhand",
      "District": "Palamu"
    },
    {
      "City": "Barwaha",
      "State": "Madhya Pradesh",
      "District": "West Nimar"
    },
    {
      "City": "Barwala",
      "State": "Haryana",
      "District": "Hisar"
    },
    {
      "City": "Barwani",
      "State": "Madhya Pradesh",
      "District": "Barwani"
    },
    {
      "City": "Barwar",
      "State": "Uttar Pradesh",
      "District": "Kheri"
    },
    {
      "City": "Basar",
      "State": "Arunachal Pradesh",
      "District": "West Siang"
    },
    {
      "City": "Basaria",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Basavakalyan",
      "State": "Karnataka",
      "District": "Bidar"
    },
    {
      "City": "Basavana Bagevadi",
      "State": "Karnataka",
      "District": "Bijapur"
    },
    {
      "City": "Bashohli",
      "State": "Jammu & Kashmir",
      "District": "Kathua"
    },
    {
      "City": "Basirhat",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Baska",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Basmath",
      "State": "Maharashtra",
      "District": "Hingoli"
    },
    {
      "City": "Basna",
      "State": "Chhattisgarh",
      "District": "Mahasamund"
    },
    {
      "City": "Basni Belima",
      "State": "Rajasthan",
      "District": "Nagaur"
    },
    {
      "City": "Basoda",
      "State": "Madhya Pradesh",
      "District": "Vidisha"
    },
    {
      "City": "Bassi Pathana",
      "State": "Punjab",
      "District": "Fatehgarh Sahib"
    },
    {
      "City": "Basti",
      "State": "Uttar Pradesh",
      "District": "Basti"
    },
    {
      "City": "Basudebpur",
      "State": "Orissa",
      "District": "Bhadrak"
    },
    {
      "City": "Basugaon",
      "State": "Assam",
      "District": "Kokrajhar"
    },
    {
      "City": "Basukinath",
      "State": "Jharkhand",
      "District": "Dumka"
    },
    {
      "City": "Batala",
      "State": "Punjab",
      "District": "Gurdaspur"
    },
    {
      "City": "Bathinda",
      "State": "Punjab",
      "District": "Bathinda"
    },
    {
      "City": "Batlagundu",
      "State": "Tamil Nadu",
      "District": "Dindigul"
    },
    {
      "City": "Batote",
      "State": "Jammu & Kashmir",
      "District": "Doda"
    },
    {
      "City": "Baudhgarh",
      "State": "Orissa",
      "District": "Baudh"
    },
    {
      "City": "Bavla",
      "State": "Gujarat",
      "District": "Ahmadabad"
    },
    {
      "City": "Bawal",
      "State": "Haryana",
      "District": "Rewari"
    },
    {
      "City": "Bawana",
      "State": "Delhi *",
      "District": "North West"
    },
    {
      "City": "Bawani Khera",
      "State": "Haryana",
      "District": "Bhiwani"
    },
    {
      "City": "Bayana",
      "State": "Rajasthan",
      "District": "Bharatpur"
    },
    {
      "City": "Beawar",
      "State": "Rajasthan",
      "District": "Ajmer"
    },
    {
      "City": "Bedi",
      "State": "Gujarat",
      "District": "Jamnagar"
    },
    {
      "City": "Beejoliya Kalan",
      "State": "Rajasthan",
      "District": "Bhilwara"
    },
    {
      "City": "Beerwah",
      "State": "Jammu & Kashmir",
      "District": "Badgam"
    },
    {
      "City": "Begamganj",
      "State": "Madhya Pradesh",
      "District": "Raisen"
    },
    {
      "City": "Begampur",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "Begowal",
      "State": "Punjab",
      "District": "Kapurthala"
    },
    {
      "City": "Begum Pur",
      "State": "Delhi *",
      "District": "North West"
    },
    {
      "City": "Begumabad Budhana",
      "State": "Uttar Pradesh",
      "District": "Ghaziabad"
    },
    {
      "City": "Begun",
      "State": "Rajasthan",
      "District": "Chittaurgarh"
    },
    {
      "City": "Begusarai",
      "State": "Bihar",
      "District": "Begusarai"
    },
    {
      "City": "Behat",
      "State": "Rajasthan",
      "District": "Saharanpur"
    },
    {
      "City": "Behea",
      "State": "Bihar",
      "District": "Bhojpur"
    },
    {
      "City": "Behror",
      "State": "Rajasthan",
      "District": "Alwar"
    },
    {
      "City": "Behta Hajipur",
      "State": "Uttar Pradesh",
      "District": "Ghaziabad"
    },
    {
      "City": "Bela Pratapgarh",
      "State": "Uttar Pradesh",
      "District": "Pratapgarh"
    },
    {
      "City": "Belagachhia",
      "State": "Orissa",
      "District": "Cuttack"
    },
    {
      "City": "Beldanga",
      "State": "West Bengal",
      "District": "Murshidabad"
    },
    {
      "City": "Beldubi",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Belebathan",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Belgaum",
      "State": "Karnataka",
      "District": "Belgaum"
    },
    {
      "City": "Belgaum Cantonment",
      "State": "Karnataka",
      "District": "Belgaum"
    },
    {
      "City": "Beliatore",
      "State": "West Bengal",
      "District": "Bankura"
    },
    {
      "City": "Bellaguntha",
      "State": "Orissa",
      "District": "Ganjam"
    },
    {
      "City": "Bellampalle",
      "State": "Andhra Pradesh",
      "District": "Adilabad"
    },
    {
      "City": "Bellary",
      "State": "Karnataka",
      "District": "Bellary"
    },
    {
      "City": "Belonia",
      "State": "Tripura",
      "District": "South Tripura"
    },
    {
      "City": "Belpahar",
      "State": "Orissa",
      "District": "Jharsuguda"
    },
    {
      "City": "Belsand",
      "State": "Bihar",
      "District": "Sitamarhi"
    },
    {
      "City": "Beltangadi",
      "State": "Karnataka",
      "District": "Dakshina Kannada"
    },
    {
      "City": "Belthara Road",
      "State": "Uttar Pradesh",
      "District": "Ballia"
    },
    {
      "City": "Belur",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Belur",
      "State": "Karnataka",
      "District": "Hassan"
    },
    {
      "City": "Belvata",
      "State": "Karnataka",
      "District": "Mysore"
    },
    {
      "City": "Bemetra",
      "State": "Chhattisgarh",
      "District": "Durg"
    },
    {
      "City": "Benaulim",
      "State": "Goa",
      "District": "South Goa"
    },
    {
      "City": "Beniganj",
      "State": "Uttar Pradesh",
      "District": "Hardoi"
    },
    {
      "City": "Beohari",
      "State": "Madhya Pradesh",
      "District": "Shahdol"
    },
    {
      "City": "Berasia",
      "State": "Madhya Pradesh",
      "District": "Bhopal"
    },
    {
      "City": "Beri",
      "State": "Haryana",
      "District": "Jhajjar"
    },
    {
      "City": "Bermo",
      "State": "Jharkhand",
      "District": "Bokaro"
    },
    {
      "City": "Bestavaripeta",
      "State": "Andhra Pradesh",
      "District": "Prakasam"
    },
    {
      "City": "Beswan",
      "State": "Uttar Pradesh",
      "District": "Aligarh"
    },
    {
      "City": "Bethamcheria",
      "State": "Andhra Pradesh",
      "District": "Kurnool"
    },
    {
      "City": "Betma",
      "State": "Madhya Pradesh",
      "District": "Indore"
    },
    {
      "City": "Bettiah",
      "State": "Bihar",
      "District": "Pashchim Champaran"
    },
    {
      "City": "Betul",
      "State": "Madhya Pradesh",
      "District": "Betul"
    },
    {
      "City": "Betul-Bazar",
      "State": "Madhya Pradesh",
      "District": "Betul"
    },
    {
      "City": "Bewar",
      "State": "Uttar Pradesh",
      "District": "Mainpuri"
    },
    {
      "City": "Beypore",
      "State": "Kerala",
      "District": "Kozhikode"
    },
    {
      "City": "Bhabat",
      "State": "Punjab",
      "District": "Rupnagar"
    },
    {
      "City": "Bhabua",
      "State": "Bihar",
      "District": "Kaimur (Bhabua)"
    },
    {
      "City": "Bhachau",
      "State": "Gujarat",
      "District": "Kachchh"
    },
    {
      "City": "Bhadarsa",
      "State": "Uttar Pradesh",
      "District": "Faizabad"
    },
    {
      "City": "Bhadaur",
      "State": "Punjab",
      "District": "Sangrur"
    },
    {
      "City": "Bhaderwah",
      "State": "Jammu & Kashmir",
      "District": "Doda"
    },
    {
      "City": "Bhadohi",
      "State": "Uttar Pradesh",
      "District": "Sant Ravidas Nagar"
    },
    {
      "City": "Bhadra",
      "State": "Rajasthan",
      "District": "Hanumangarh"
    },
    {
      "City": "Bhadrachalam",
      "State": "Andhra Pradesh",
      "District": "Khammam"
    },
    {
      "City": "Bhadrak",
      "State": "Orissa",
      "District": "Bhadrak"
    },
    {
      "City": "Bhadravati",
      "State": "Maharashtra",
      "District": "Chandrapur"
    },
    {
      "City": "Bhadravati",
      "State": "Karnataka",
      "District": "Shimoga"
    },
    {
      "City": "Bhadreswar",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "Bhagalpur (M.Corp)",
      "State": "Bihar",
      "District": "Bhagalpur"
    },
    {
      "City": "Bhagatdih",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Bhagur",
      "State": "Maharashtra",
      "District": "Nashik"
    },
    {
      "City": "Bhagwant Nagar",
      "State": "Uttar Pradesh",
      "District": "Unnao"
    },
    {
      "City": "Bhainsa",
      "State": "Andhra Pradesh",
      "District": "Adilabad"
    },
    {
      "City": "Bhainsdehi",
      "State": "Madhya Pradesh",
      "District": "Betul"
    },
    {
      "City": "Bhalariya",
      "State": "Rajasthan",
      "District": "Udaipur"
    },
    {
      "City": "Bhalki",
      "State": "Karnataka",
      "District": "Bidar"
    },
    {
      "City": "Bhalswa Jahangir Pur",
      "State": "Delhi *",
      "District": "North West"
    },
    {
      "City": "Bhamodi",
      "State": "Madhya Pradesh",
      "District": "Chhindwara"
    },
    {
      "City": "Bhandara",
      "State": "Maharashtra",
      "District": "Bhandara"
    },
    {
      "City": "Bhandardaha",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Bhander",
      "State": "Madhya Pradesh",
      "District": "Datia"
    },
    {
      "City": "Bhangar Raghunathpur",
      "State": "West Bengal",
      "District": "South Twentyfour Parganas"
    },
    {
      "City": "Bhangri Pratham Khanda",
      "State": "West Bengal",
      "District": "Koch Bihar"
    },
    {
      "City": "Bhanjanagar",
      "State": "Orissa",
      "District": "Ganjam"
    },
    {
      "City": "Bhankharpur",
      "State": "Punjab",
      "District": "Patiala"
    },
    {
      "City": "Bhanowara",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Bhanpura",
      "State": "Madhya Pradesh",
      "District": "Mandsaur"
    },
    {
      "City": "Bhanpuri",
      "State": "Chhattisgarh",
      "District": "Raipur"
    },
    {
      "City": "Bhanvad",
      "State": "Gujarat",
      "District": "Jamnagar"
    },
    {
      "City": "Bharat Heavy Electrical Limited Ranipur",
      "State": "Uttaranchal",
      "District": "Hardwar"
    },
    {
      "City": "Bharatganj",
      "State": "Uttar Pradesh",
      "District": "Allahabad"
    },
    {
      "City": "Bharatpur",
      "State": "Rajasthan",
      "District": "Bharatpur"
    },
    {
      "City": "Bhargain",
      "State": "Uttar Pradesh",
      "District": "Etah"
    },
    {
      "City": "Bharoli Kalan",
      "State": "Punjab",
      "District": "Gurdaspur"
    },
    {
      "City": "Bharthana",
      "State": "Uttar Pradesh",
      "District": "Etawah"
    },
    {
      "City": "Bharuch",
      "State": "Gujarat",
      "District": "Bharuch"
    },
    {
      "City": "Bharuch INA",
      "State": "Gujarat",
      "District": "Bharuch"
    },
    {
      "City": "Bharuhana",
      "State": "Uttar Pradesh",
      "District": "Mirzapur"
    },
    {
      "City": "Bharveli",
      "State": "Madhya Pradesh",
      "District": "Balaghat"
    },
    {
      "City": "Bharwari",
      "State": "Uttar Pradesh",
      "District": "Kaushambi"
    },
    {
      "City": "Bhatapara",
      "State": "Chhattisgarh",
      "District": "Raipur"
    },
    {
      "City": "Bhatgaon",
      "State": "Chhattisgarh",
      "District": "Raipur"
    },
    {
      "City": "Bhati",
      "State": "Delhi *",
      "District": "South"
    },
    {
      "City": "Bhatkal",
      "State": "Karnataka",
      "District": "Uttara Kannada"
    },
    {
      "City": "Bhatni Bazar",
      "State": "Uttar Pradesh",
      "District": "Deoria"
    },
    {
      "City": "Bhatpar Rani",
      "State": "Uttar Pradesh",
      "District": "Deoria"
    },
    {
      "City": "Bhatpara",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Bhaurasa",
      "State": "Madhya Pradesh",
      "District": "Dewas"
    },
    {
      "City": "Bhavani",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Bhavanisagar",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Bhavnagar",
      "State": "Gujarat",
      "District": "Bhavnagar"
    },
    {
      "City": "Bhavra",
      "State": "Madhya Pradesh",
      "District": "Jhabua"
    },
    {
      "City": "Bhawan Bahadur Nagar",
      "State": "Uttar Pradesh",
      "District": "Bulandshahr"
    },
    {
      "City": "Bhawani Mandi",
      "State": "Rajasthan",
      "District": "Jhalawar"
    },
    {
      "City": "Bhawanigarh",
      "State": "Punjab",
      "District": "Sangrur"
    },
    {
      "City": "Bhawanipatna",
      "State": "Orissa",
      "District": "Kalahandi"
    },
    {
      "City": "Bhayavadar",
      "State": "Gujarat",
      "District": "Rajkot"
    },
    {
      "City": "Bhedaghat",
      "State": "Madhya Pradesh",
      "District": "Jabalpur"
    },
    {
      "City": "Bheemavaram",
      "State": "Andhra Pradesh",
      "District": "West Godavari"
    },
    {
      "City": "Bheemunipatnam",
      "State": "Andhra Pradesh",
      "District": "Visakhapatnam"
    },
    {
      "City": "Bhikangaon",
      "State": "Madhya Pradesh",
      "District": "West Nimar"
    },
    {
      "City": "Bhikhi",
      "State": "Punjab",
      "District": "Mansa"
    },
    {
      "City": "Bhikhiwind",
      "State": "Punjab",
      "District": "Amritsar"
    },
    {
      "City": "Bhilai Charoda",
      "State": "Chhattisgarh",
      "District": "Durg"
    },
    {
      "City": "Bhilai Nagar",
      "State": "Chhattisgarh",
      "District": "Durg"
    },
    {
      "City": "Bhilakhedi",
      "State": "Madhya Pradesh",
      "District": "Hoshangabad"
    },
    {
      "City": "Bhilwara",
      "State": "Rajasthan",
      "District": "Bhilwara"
    },
    {
      "City": "Bhimarayanagudi",
      "State": "Karnataka",
      "District": "Gulbarga"
    },
    {
      "City": "Bhimtal",
      "State": "Uttaranchal",
      "District": "Nainital"
    },
    {
      "City": "Bhind",
      "State": "Madhya Pradesh",
      "District": "Bhind"
    },
    {
      "City": "Bhinder",
      "State": "Rajasthan",
      "District": "Udaipur"
    },
    {
      "City": "Bhinga",
      "State": "Uttar Pradesh",
      "District": "Shrawasti"
    },
    {
      "City": "Bhingar",
      "State": "Maharashtra",
      "District": "Ahmadnagar"
    },
    {
      "City": "Bhinmal",
      "State": "Rajasthan",
      "District": "Jalor"
    },
    {
      "City": "Bhisiana",
      "State": "Punjab",
      "District": "Bathinda"
    },
    {
      "City": "Bhitarwar",
      "State": "Madhya Pradesh",
      "District": "Gwalior"
    },
    {
      "City": "Bhiwadi",
      "State": "Rajasthan",
      "District": "Alwar"
    },
    {
      "City": "Bhiwandi",
      "State": "Maharashtra",
      "District": "Thane"
    },
    {
      "City": "Bhiwani",
      "State": "Haryana",
      "District": "Bhiwani"
    },
    {
      "City": "Bhogadi",
      "State": "Karnataka",
      "District": "Mysore"
    },
    {
      "City": "Bhogaon",
      "State": "Uttar Pradesh",
      "District": "Mainpuri"
    },
    {
      "City": "Bhogpur",
      "State": "Punjab",
      "District": "Jalandhar"
    },
    {
      "City": "Bhojpur Dharampur",
      "State": "Uttar Pradesh",
      "District": "Moradabad"
    },
    {
      "City": "Bhojudih",
      "State": "Jharkhand",
      "District": "Bokaro"
    },
    {
      "City": "Bhokardan",
      "State": "Maharashtra",
      "District": "Jalna"
    },
    {
      "City": "Bhokarhedi",
      "State": "Uttar Pradesh",
      "District": "Muzaffarnagar"
    },
    {
      "City": "Bholar Dabri",
      "State": "West Bengal",
      "District": "Jalpaiguri"
    },
    {
      "City": "Bhongir",
      "State": "Andhra Pradesh",
      "District": "Nalgonda"
    },
    {
      "City": "Bhopal",
      "State": "Madhya Pradesh",
      "District": "Bhopal"
    },
    {
      "City": "Bhor",
      "State": "Maharashtra",
      "District": "Pune"
    },
    {
      "City": "Bhota",
      "State": "Himachal Pradesh",
      "District": "Hamirpur"
    },
    {
      "City": "Bhowali",
      "State": "Uttaranchal",
      "District": "Nainital"
    },
    {
      "City": "Bhowrah",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Bhuban",
      "State": "Orissa",
      "District": "Dhenkanal"
    },
    {
      "City": "Bhubaneswar",
      "State": "Orissa",
      "District": "Khordha"
    },
    {
      "City": "Bhucho Mandi",
      "State": "Punjab",
      "District": "Bathinda"
    },
    {
      "City": "Bhuj",
      "State": "Gujarat",
      "District": "Kachchh"
    },
    {
      "City": "Bhulath",
      "State": "Punjab",
      "District": "Kapurthala"
    },
    {
      "City": "Bhulepur",
      "State": "Uttar Pradesh",
      "District": "Ambedaker Nagar"
    },
    {
      "City": "Bhuli",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Bhum",
      "State": "Maharashtra",
      "District": "Osmanabad"
    },
    {
      "City": "Bhuntar",
      "State": "Himachal Pradesh",
      "District": "Kullu"
    },
    {
      "City": "Bhusawal",
      "State": "Maharashtra",
      "District": "Jalgaon"
    },
    {
      "City": "Bhusawar",
      "State": "Rajasthan",
      "District": "Bharatpur"
    },
    {
      "City": "Bhuvanagiri",
      "State": "Tamil Nadu",
      "District": "Cuddalore"
    },
    {
      "City": "Biaora",
      "State": "Madhya Pradesh",
      "District": "Rajgarh"
    },
    {
      "City": "Biate",
      "State": "Mizoram",
      "District": "Serchhip"
    },
    {
      "City": "Bicholim",
      "State": "Goa",
      "District": "North Goa"
    },
    {
      "City": "Bid",
      "State": "Maharashtra",
      "District": "Bid"
    },
    {
      "City": "Bidar",
      "State": "Karnataka",
      "District": "Bidar"
    },
    {
      "City": "Bidasar",
      "State": "Rajasthan",
      "District": "Churu"
    },
    {
      "City": "Bidhan Nagar",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Bidhuna",
      "State": "Uttar Pradesh",
      "District": "Auraiya"
    },
    {
      "City": "Bighapur",
      "State": "Uttar Pradesh",
      "District": "Unnao"
    },
    {
      "City": "Bihar",
      "State": "Bihar",
      "District": "Nalanda"
    },
    {
      "City": "Bihpuria",
      "State": "Assam",
      "District": "Lakhimpur"
    },
    {
      "City": "Bijapur",
      "State": "Karnataka",
      "District": "Bijapur"
    },
    {
      "City": "Bijawar",
      "State": "Madhya Pradesh",
      "District": "Chhatarpur"
    },
    {
      "City": "Bijbehara",
      "State": "Jammu & Kashmir",
      "District": "Anantnag"
    },
    {
      "City": "Bijeypur",
      "State": "Madhya Pradesh",
      "District": "Sheopur"
    },
    {
      "City": "Bijni",
      "State": "Assam",
      "District": "Bongaigaon"
    },
    {
      "City": "Bijnor",
      "State": "Uttar Pradesh",
      "District": "Bijnor"
    },
    {
      "City": "Bijpur",
      "State": "Uttar Pradesh",
      "District": "Sonbhadra"
    },
    {
      "City": "Bijuri",
      "State": "Madhya Pradesh",
      "District": "Shahdol"
    },
    {
      "City": "Bikaner",
      "State": "Rajasthan",
      "District": "Bikaner"
    },
    {
      "City": "Bikapur",
      "State": "Uttar Pradesh",
      "District": "Faizabad"
    },
    {
      "City": "Bikihakola",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Bikketti",
      "State": "Tamil Nadu",
      "District": "The Nilgiris"
    },
    {
      "City": "Bikramganj",
      "State": "Bihar",
      "District": "Rohtas"
    },
    {
      "City": "Bilandapur",
      "State": "West Bengal",
      "District": "South Twentyfour Parganas"
    },
    {
      "City": "Bilara",
      "State": "Rajasthan",
      "District": "Jodhpur"
    },
    {
      "City": "Bilari",
      "State": "Uttar Pradesh",
      "District": "Moradabad"
    },
    {
      "City": "Bilariaganj",
      "State": "Uttar Pradesh",
      "District": "Azamgarh"
    },
    {
      "City": "Bilasipara",
      "State": "Assam",
      "District": "Dhubri"
    },
    {
      "City": "Bilaspur",
      "State": "Haryana",
      "District": "Yamunanagar"
    },
    {
      "City": "Bilaspur",
      "State": "Uttar Pradesh",
      "District": "Rampur"
    },
    {
      "City": "Bilaspur",
      "State": "Chhattisgarh",
      "District": "Bilaspur"
    },
    {
      "City": "Bilaspur",
      "State": "Himachal Pradesh",
      "District": "Bilaspur"
    },
    {
      "City": "Bilaspur",
      "State": "Uttar Pradesh",
      "District": "Gautam Buddha Nagar"
    },
    {
      "City": "Bilaua",
      "State": "Madhya Pradesh",
      "District": "Gwalior"
    },
    {
      "City": "Bilgi",
      "State": "Karnataka",
      "District": "Bagalkot"
    },
    {
      "City": "Bilgram",
      "State": "Uttar Pradesh",
      "District": "Hardoi"
    },
    {
      "City": "Bilha",
      "State": "Chhattisgarh",
      "District": "Bilaspur"
    },
    {
      "City": "Bilhaur",
      "State": "Uttar Pradesh",
      "District": "Kanpur Nagar"
    },
    {
      "City": "Bilimora",
      "State": "Gujarat",
      "District": "Navsari"
    },
    {
      "City": "Billawar",
      "State": "Jammu & Kashmir",
      "District": "Kathua"
    },
    {
      "City": "Biloli",
      "State": "Maharashtra",
      "District": "Nanded"
    },
    {
      "City": "Bilpahari",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Bilpura",
      "State": "Madhya Pradesh",
      "District": "Jabalpur"
    },
    {
      "City": "Bilram",
      "State": "Uttar Pradesh",
      "District": "Etah"
    },
    {
      "City": "Bilsanda",
      "State": "Uttar Pradesh",
      "District": "Pilibhit"
    },
    {
      "City": "Bilsi",
      "State": "Uttar Pradesh",
      "District": "Budaun"
    },
    {
      "City": "Bina Etawa",
      "State": "Madhya Pradesh",
      "District": "Sagar"
    },
    {
      "City": "Bina Rly Colony",
      "State": "Madhya Pradesh",
      "District": "Sagar"
    },
    {
      "City": "Bindki",
      "State": "Uttar Pradesh",
      "District": "Fatehpur"
    },
    {
      "City": "Binika",
      "State": "Orissa",
      "District": "Sonapur"
    },
    {
      "City": "Bipra Noapara",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Biramitrapur",
      "State": "Orissa",
      "District": "Sundargarh"
    },
    {
      "City": "Birgaon",
      "State": "Chhattisgarh",
      "District": "Raipur"
    },
    {
      "City": "Birlapur",
      "State": "West Bengal",
      "District": "South Twentyfour Parganas"
    },
    {
      "City": "Birnagar",
      "State": "West Bengal",
      "District": "Nadia"
    },
    {
      "City": "Birpur",
      "State": "Bihar",
      "District": "Supaul"
    },
    {
      "City": "Birsinghpur",
      "State": "Madhya Pradesh",
      "District": "Satna"
    },
    {
      "City": "Birur",
      "State": "Karnataka",
      "District": "Chikmagalur"
    },
    {
      "City": "Birwadi",
      "State": "Maharashtra",
      "District": "Raigarh"
    },
    {
      "City": "Bisalpur",
      "State": "Uttar Pradesh",
      "District": "Pilibhit"
    },
    {
      "City": "Bisanda Buzurg",
      "State": "Uttar Pradesh",
      "District": "Banda"
    },
    {
      "City": "Bisauli",
      "State": "Uttar Pradesh",
      "District": "Budaun"
    },
    {
      "City": "Bishama Katek",
      "State": "Orissa",
      "District": "Rayagada"
    },
    {
      "City": "Bisharatganj",
      "State": "Uttar Pradesh",
      "District": "Bareilly"
    },
    {
      "City": "Bishna",
      "State": "Jammu & Kashmir",
      "District": "Jammu"
    },
    {
      "City": "Bishnupur",
      "State": "Manipur",
      "District": "Bishnupur"
    },
    {
      "City": "Bishnupur",
      "State": "West Bengal",
      "District": "Bankura"
    },
    {
      "City": "Bishnupur",
      "State": "West Bengal",
      "District": "South Twentyfour Parganas"
    },
    {
      "City": "Bisokhar",
      "State": "Uttar Pradesh",
      "District": "Ghaziabad"
    },
    {
      "City": "Bissau",
      "State": "Rajasthan",
      "District": "Jhunjhunun"
    },
    {
      "City": "Biswan",
      "State": "Uttar Pradesh",
      "District": "Sitapur"
    },
    {
      "City": "Biswanath Chariali",
      "State": "Assam",
      "District": "Sonitpur"
    },
    {
      "City": "Bithoor",
      "State": "Uttar Pradesh",
      "District": "Kanpur Nagar"
    },
    {
      "City": "Bobbili",
      "State": "Andhra Pradesh",
      "District": "Vizianagaram"
    },
    {
      "City": "Boda",
      "State": "Madhya Pradesh",
      "District": "Rajgarh"
    },
    {
      "City": "Bodeli",
      "State": "Gujarat",
      "District": "Vadodara"
    },
    {
      "City": "Bodh Gaya",
      "State": "Bihar",
      "District": "Gaya"
    },
    {
      "City": "Bodhan",
      "State": "Andhra Pradesh",
      "District": "Nizamabad"
    },
    {
      "City": "Bodinayakkanur",
      "State": "Tamil Nadu",
      "District": "Theni"
    },
    {
      "City": "Bodri",
      "State": "Chhattisgarh",
      "District": "Bilaspur"
    },
    {
      "City": "Bohari",
      "State": "Assam",
      "District": "Barpeta"
    },
    {
      "City": "Boisar",
      "State": "Maharashtra",
      "District": "Thane"
    },
    {
      "City": "Bokajan",
      "State": "Assam",
      "District": "Karbi Anglong"
    },
    {
      "City": "Bokakhat",
      "State": "Assam",
      "District": "Golaghat"
    },
    {
      "City": "Bokaro",
      "State": "Jharkhand",
      "District": "Bokaro"
    },
    {
      "City": "Bokaro Steel City",
      "State": "Jharkhand",
      "District": "Bokaro"
    },
    {
      "City": "Bollaram",
      "State": "Andhra Pradesh",
      "District": "Medak"
    },
    {
      "City": "Bolpur",
      "State": "West Bengal",
      "District": "Birbhum"
    },
    {
      "City": "Bombooflat",
      "State": "Andaman & Nicobar Islands *",
      "District": "Andamans"
    },
    {
      "City": "Bomdila",
      "State": "Arunachal Pradesh",
      "District": "West Kameng"
    },
    {
      "City": "Bommanahalli",
      "State": "Karnataka",
      "District": "Bangalore"
    },
    {
      "City": "Bommasandra",
      "State": "Karnataka",
      "District": "Bangalore"
    },
    {
      "City": "Bongaigaon",
      "State": "Assam",
      "District": "Bongaigaon"
    },
    {
      "City": "Bongaigaon, Refinery & Petro-chemical Ltd. Township",
      "State": "Assam",
      "District": "Bongaigaon"
    },
    {
      "City": "Boothapandi",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Boothipuram",
      "State": "Tamil Nadu",
      "District": "Theni"
    },
    {
      "City": "Bopal",
      "State": "Gujarat",
      "District": "Ahmadabad"
    },
    {
      "City": "Borgolai Grant No.11",
      "State": "Assam",
      "District": "Tinsukia"
    },
    {
      "City": "Boriavi",
      "State": "Gujarat",
      "District": "Anand"
    },
    {
      "City": "Borsad",
      "State": "Gujarat",
      "District": "Anand"
    },
    {
      "City": "Botad",
      "State": "Gujarat",
      "District": "Bhavnagar"
    },
    {
      "City": "Bowali",
      "State": "West Bengal",
      "District": "South Twentyfour Parganas"
    },
    {
      "City": "Brahmakulam",
      "State": "Kerala",
      "District": "Thrissur"
    },
    {
      "City": "Brahmana Periya-Agraharam",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Brahmapur",
      "State": "Orissa",
      "District": "Ganjam"
    },
    {
      "City": "Brahmapuri",
      "State": "Maharashtra",
      "District": "Chandrapur"
    },
    {
      "City": "Brajarajnagar",
      "State": "Orissa",
      "District": "Jharsuguda"
    },
    {
      "City": "Budaun",
      "State": "Uttar Pradesh",
      "District": "Budaun"
    },
    {
      "City": "Budge Budge",
      "State": "West Bengal",
      "District": "South Twentyfour Parganas"
    },
    {
      "City": "Budha Theh",
      "State": "Punjab",
      "District": "Amritsar"
    },
    {
      "City": "Budhana",
      "State": "Uttar Pradesh",
      "District": "Muzaffarnagar"
    },
    {
      "City": "Budhgaon",
      "State": "Maharashtra",
      "District": "Sangli"
    },
    {
      "City": "Budhlada",
      "State": "Punjab",
      "District": "Mansa"
    },
    {
      "City": "Budhni",
      "State": "Madhya Pradesh",
      "District": "Sehore"
    },
    {
      "City": "Budhpura",
      "State": "Rajasthan",
      "District": "Bundi"
    },
    {
      "City": "Bugganipalle",
      "State": "Andhra Pradesh",
      "District": "Kurnool"
    },
    {
      "City": "Bugrasi",
      "State": "Uttar Pradesh",
      "District": "Bulandshahr"
    },
    {
      "City": "Buguda",
      "State": "Orissa",
      "District": "Ganjam"
    },
    {
      "City": "Bulandshahr",
      "State": "Uttar Pradesh",
      "District": "Bulandshahr"
    },
    {
      "City": "Buldana",
      "State": "Maharashtra",
      "District": "Buldana"
    },
    {
      "City": "Bundi",
      "State": "Rajasthan",
      "District": "Bundi"
    },
    {
      "City": "Bundu",
      "State": "Jharkhand",
      "District": "Ranchi"
    },
    {
      "City": "Burari",
      "State": "Delhi *",
      "District": "North"
    },
    {
      "City": "Burhanpur",
      "State": "Madhya Pradesh",
      "District": "East Nimar"
    },
    {
      "City": "Burhar",
      "State": "Madhya Pradesh",
      "District": "Shahdol"
    },
    {
      "City": "Buria",
      "State": "Haryana",
      "District": "Yamunanagar"
    },
    {
      "City": "Burla",
      "State": "Orissa",
      "District": "Sambalpur"
    },
    {
      "City": "Buxar",
      "State": "Bihar",
      "District": "Buxar"
    },
    {
      "City": "Buxwaha",
      "State": "Madhya Pradesh",
      "District": "Chhatarpur"
    },
    {
      "City": "Byadgi",
      "State": "Karnataka",
      "District": "Haveri"
    },
    {
      "City": "Byasanagar",
      "State": "Orissa",
      "District": "Jajapur"
    },
    {
      "City": "Byatarayanapura",
      "State": "Karnataka",
      "District": "Bangalore"
    },
    {
      "City": "Calangute",
      "State": "Goa",
      "District": "North Goa"
    },
    {
      "City": "Calapor",
      "State": "Goa",
      "District": "North Goa"
    },
    {
      "City": "Canacona",
      "State": "Goa",
      "District": "South Goa"
    },
    {
      "City": "Candolim",
      "State": "Goa",
      "District": "North Goa"
    },
    {
      "City": "Carapur",
      "State": "Goa",
      "District": "North Goa"
    },
    {
      "City": "Cart Road",
      "State": "West Bengal",
      "District": "Darjiling"
    },
    {
      "City": "Chabua",
      "State": "Assam",
      "District": "Dibrugarh"
    },
    {
      "City": "Chachanda",
      "State": "West Bengal",
      "District": "Murshidabad"
    },
    {
      "City": "Chachaura-Binaganj",
      "State": "Madhya Pradesh",
      "District": "Guna"
    },
    {
      "City": "Chaibasa",
      "State": "Jharkhand",
      "District": "Pashchimi Singhbhum"
    },
    {
      "City": "Chail",
      "State": "Uttar Pradesh",
      "District": "Kaushambi"
    },
    {
      "City": "Chak Bankola",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Chak Bansberia",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "Chak Enayetnagar",
      "State": "West Bengal",
      "District": "South Twentyfour Parganas"
    },
    {
      "City": "Chak Imam Ali",
      "State": "Uttar Pradesh",
      "District": "Allahabad"
    },
    {
      "City": "Chak Kashipur",
      "State": "West Bengal",
      "District": "South Twentyfour Parganas"
    },
    {
      "City": "Chakan",
      "State": "Maharashtra",
      "District": "Pune"
    },
    {
      "City": "Chakapara",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Chakdaha",
      "State": "West Bengal",
      "District": "Nadia"
    },
    {
      "City": "Chakeri",
      "State": "Uttar Pradesh",
      "District": "Kanpur Nagar"
    },
    {
      "City": "Chakghat",
      "State": "Madhya Pradesh",
      "District": "Rewa"
    },
    {
      "City": "Chakia",
      "State": "Bihar",
      "District": "Purba Champaran"
    },
    {
      "City": "Chakia",
      "State": "Uttar Pradesh",
      "District": "Chandauli"
    },
    {
      "City": "Chaklasi",
      "State": "Gujarat",
      "District": "Kheda"
    },
    {
      "City": "Chakradharpur",
      "State": "Jharkhand",
      "District": "Pashchimi Singhbhum"
    },
    {
      "City": "Chakrata",
      "State": "Uttaranchal",
      "District": "Dehradun"
    },
    {
      "City": "Chaksu",
      "State": "Rajasthan",
      "District": "Jaipur"
    },
    {
      "City": "Chakulia",
      "State": "Jharkhand",
      "District": "Purbi Singhbhum"
    },
    {
      "City": "Chala",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Chala",
      "State": "Gujarat",
      "District": "Valsad"
    },
    {
      "City": "Chalakudy",
      "State": "Kerala",
      "District": "Thrissur"
    },
    {
      "City": "Chalala",
      "State": "Gujarat",
      "District": "Amreli"
    },
    {
      "City": "Chalisgaon",
      "State": "Maharashtra",
      "District": "Jalgaon"
    },
    {
      "City": "Challakere",
      "State": "Karnataka",
      "District": "Chitradurga"
    },
    {
      "City": "Chalthan",
      "State": "Gujarat",
      "District": "Surat"
    },
    {
      "City": "Chamba",
      "State": "Himachal Pradesh",
      "District": "Chamba"
    },
    {
      "City": "Chamba",
      "State": "Uttaranchal",
      "District": "Tehri Garhwal"
    },
    {
      "City": "Chamoli Gopeshwar",
      "State": "Uttaranchal",
      "District": "Chamoli"
    },
    {
      "City": "Champa",
      "State": "Chhattisgarh",
      "District": "Janjgir-Champa"
    },
    {
      "City": "Champawat",
      "State": "Uttaranchal",
      "District": "Champawat"
    },
    {
      "City": "Champdani",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "Champhai",
      "State": "Mizoram",
      "District": "Champhai"
    },
    {
      "City": "Champua",
      "State": "Orissa",
      "District": "Kendujhar"
    },
    {
      "City": "Chamrail",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Chamrajnagar",
      "State": "Karnataka",
      "District": "Chamarajanagar"
    },
    {
      "City": "Chanasma",
      "State": "Gujarat",
      "District": "Patan"
    },
    {
      "City": "Chandameta-Butaria",
      "State": "Madhya Pradesh",
      "District": "Chhindwara"
    },
    {
      "City": "Chandannagar",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "Chandapur",
      "State": "Orissa",
      "District": "Nayagarh"
    },
    {
      "City": "Chandauli",
      "State": "Uttar Pradesh",
      "District": "Chandauli"
    },
    {
      "City": "Chandaur",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Chandausi",
      "State": "Uttar Pradesh",
      "District": "Moradabad"
    },
    {
      "City": "Chanderi",
      "State": "Madhya Pradesh",
      "District": "Guna"
    },
    {
      "City": "Chandia",
      "State": "Madhya Pradesh",
      "District": "Umaria"
    },
    {
      "City": "Chandigarh",
      "State": "Chandigarh *",
      "District": "Chandigarh"
    },
    {
      "City": "Chandil",
      "State": "Jharkhand",
      "District": "Pashchimi Singhbhum"
    },
    {
      "City": "Chandili",
      "State": "Orissa",
      "District": "Rayagada"
    },
    {
      "City": "Chandkheda",
      "State": "Gujarat",
      "District": "Gandhinagar"
    },
    {
      "City": "Chandla",
      "State": "Madhya Pradesh",
      "District": "Chhatarpur"
    },
    {
      "City": "Chandlodiya",
      "State": "Gujarat",
      "District": "Ahmadabad"
    },
    {
      "City": "Chandpur",
      "State": "Uttar Pradesh",
      "District": "Bijnor"
    },
    {
      "City": "Chandpur",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Chandrakona",
      "State": "West Bengal",
      "District": "Medinipur"
    },
    {
      "City": "Chandrapur",
      "State": "Maharashtra",
      "District": "Chandrapur"
    },
    {
      "City": "Chandrapur Bagicha",
      "State": "Assam",
      "District": "Kamrup"
    },
    {
      "City": "Chandrapura",
      "State": "Jharkhand",
      "District": "Bokaro"
    },
    {
      "City": "Chandur",
      "State": "Maharashtra",
      "District": "Amravati"
    },
    {
      "City": "Chandur",
      "State": "Andhra Pradesh",
      "District": "Nalgonda"
    },
    {
      "City": "Chandur",
      "State": "Maharashtra",
      "District": "Chandrapur"
    },
    {
      "City": "Chandurbazar",
      "State": "Maharashtra",
      "District": "Amravati"
    },
    {
      "City": "Changanassery",
      "State": "Kerala",
      "District": "Kottayam"
    },
    {
      "City": "Changlang",
      "State": "Arunachal Pradesh",
      "District": "Changlang"
    },
    {
      "City": "Channagiri",
      "State": "Karnataka",
      "District": "Davanagere"
    },
    {
      "City": "Channapatna",
      "State": "Karnataka",
      "District": "Bangalore Rural"
    },
    {
      "City": "Channarayapattana",
      "State": "Karnataka",
      "District": "Hassan"
    },
    {
      "City": "Chanod",
      "State": "Gujarat",
      "District": "Valsad"
    },
    {
      "City": "Chanpatia",
      "State": "Bihar",
      "District": "Pashchim Champaran"
    },
    {
      "City": "Chapar",
      "State": "Assam",
      "District": "Dhubri"
    },
    {
      "City": "Chapari",
      "State": "West Bengal",
      "District": "Puruliya"
    },
    {
      "City": "Chapra",
      "State": "Bihar",
      "District": "Saran"
    },
    {
      "City": "Chapui",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Char Brahmanagar",
      "State": "West Bengal",
      "District": "Nadia"
    },
    {
      "City": "Char Maijdia",
      "State": "West Bengal",
      "District": "Nadia"
    },
    {
      "City": "Charari Sharief",
      "State": "Jammu & Kashmir",
      "District": "Badgam"
    },
    {
      "City": "Charibatia",
      "State": "Orissa",
      "District": "Cuttack"
    },
    {
      "City": "Charka",
      "State": "West Bengal",
      "District": "Murshidabad"
    },
    {
      "City": "Charkhari",
      "State": "Uttar Pradesh",
      "District": "Mahoba"
    },
    {
      "City": "Charkhi Dadri",
      "State": "Haryana",
      "District": "Bhiwani"
    },
    {
      "City": "Charthaval",
      "State": "Uttar Pradesh",
      "District": "Muzaffarnagar"
    },
    {
      "City": "Chas",
      "State": "Jharkhand",
      "District": "Bokaro"
    },
    {
      "City": "Chata Kalikapur",
      "State": "West Bengal",
      "District": "South Twentyfour Parganas"
    },
    {
      "City": "Chatakonda",
      "State": "Andhra Pradesh",
      "District": "Khammam"
    },
    {
      "City": "Chatra",
      "State": "Jharkhand",
      "District": "Chatra"
    },
    {
      "City": "Chaumuhan",
      "State": "Uttar Pradesh",
      "District": "Mathura"
    },
    {
      "City": "Chaupal",
      "State": "Himachal Pradesh",
      "District": "Shimla"
    },
    {
      "City": "Chaurai Khas",
      "State": "Madhya Pradesh",
      "District": "Chhindwara"
    },
    {
      "City": "Chavakkad",
      "State": "Kerala",
      "District": "Thrissur"
    },
    {
      "City": "Chechakhata",
      "State": "West Bengal",
      "District": "Jalpaiguri"
    },
    {
      "City": "Chechat",
      "State": "Rajasthan",
      "District": "Kota"
    },
    {
      "City": "Cheeka",
      "State": "Haryana",
      "District": "Kaithal"
    },
    {
      "City": "Cheema",
      "State": "Punjab",
      "District": "Sangrur"
    },
    {
      "City": "Chekonidhara",
      "State": "Assam",
      "District": "Jorhat"
    },
    {
      "City": "Chelad",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Chelora",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Chemmumiahpet",
      "State": "Andhra Pradesh",
      "District": "Cuddapah"
    },
    {
      "City": "Chenani",
      "State": "Jammu & Kashmir",
      "District": "Udhampur"
    },
    {
      "City": "Chendamangalam",
      "State": "Kerala",
      "District": "Ernakulam"
    },
    {
      "City": "Chengalpattu",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Chengam",
      "State": "Tamil Nadu",
      "District": "Tiruvanamalai"
    },
    {
      "City": "Chengamanad",
      "State": "Kerala",
      "District": "Ernakulam"
    },
    {
      "City": "Chengannur",
      "State": "Kerala",
      "District": "Alappuzha"
    },
    {
      "City": "Chennai",
      "State": "Tamil Nadu",
      "District": "Chennai"
    },
    {
      "City": "Chennasamudram",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Chennimalai",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Cheranallur",
      "State": "Kerala",
      "District": "Ernakulam"
    },
    {
      "City": "Cheranmadevi",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Cherapunjee",
      "State": "Meghalaya",
      "District": "East Khasi Hills"
    },
    {
      "City": "Cherthala",
      "State": "Kerala",
      "District": "Alappuzha"
    },
    {
      "City": "Cheruthazham",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Cheruvannur",
      "State": "Kerala",
      "District": "Kozhikode"
    },
    {
      "City": "Chetpet",
      "State": "Tamil Nadu",
      "District": "Tiruvanamalai"
    },
    {
      "City": "Chettiarpatti",
      "State": "Tamil Nadu",
      "District": "Virudhunagar"
    },
    {
      "City": "Chettipalayam",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Chettipalayam",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Chettithangal",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Chevvoor",
      "State": "Kerala",
      "District": "Thrissur"
    },
    {
      "City": "Chhabra",
      "State": "Rajasthan",
      "District": "Baran"
    },
    {
      "City": "Chhachhrauli",
      "State": "Haryana",
      "District": "Yamunanagar"
    },
    {
      "City": "Chhapar",
      "State": "Rajasthan",
      "District": "Churu"
    },
    {
      "City": "Chhaprabhatha",
      "State": "Gujarat",
      "District": "Surat"
    },
    {
      "City": "Chhaprauli",
      "State": "Uttar Pradesh",
      "District": "Baghpat"
    },
    {
      "City": "Chharchha",
      "State": "Chhattisgarh",
      "District": "Koriya"
    },
    {
      "City": "Chharra Rafatpur",
      "State": "Uttar Pradesh",
      "District": "Aligarh"
    },
    {
      "City": "Chhata",
      "State": "Uttar Pradesh",
      "District": "Mathura"
    },
    {
      "City": "Chhatari",
      "State": "Uttar Pradesh",
      "District": "Bulandshahr"
    },
    {
      "City": "Chhatarpur",
      "State": "Madhya Pradesh",
      "District": "Chhatarpur"
    },
    {
      "City": "Chhatatanr",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Chhatral INA",
      "State": "Gujarat",
      "District": "Gandhinagar"
    },
    {
      "City": "Chhatrapur",
      "State": "Orissa",
      "District": "Ganjam"
    },
    {
      "City": "Chhawla",
      "State": "Delhi *",
      "District": "South West"
    },
    {
      "City": "Chhaya",
      "State": "Gujarat",
      "District": "Porbandar"
    },
    {
      "City": "Chhibramau",
      "State": "Uttar Pradesh",
      "District": "Kannauj"
    },
    {
      "City": "Chhindwara",
      "State": "Madhya Pradesh",
      "District": "Chhindwara"
    },
    {
      "City": "Chhipabarod",
      "State": "Rajasthan",
      "District": "Baran"
    },
    {
      "City": "Chhora",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Chhota Chhindwara (Gotegaon)",
      "State": "Madhya Pradesh",
      "District": "Narsimhapur"
    },
    {
      "City": "Chhota Gobindpur",
      "State": "Jharkhand",
      "District": "Purbi Singhbhum"
    },
    {
      "City": "Chhota Udaipur",
      "State": "Gujarat",
      "District": "Vadodara"
    },
    {
      "City": "Chhotaputki",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Chhoti Sadri",
      "State": "Rajasthan",
      "District": "Chittaurgarh"
    },
    {
      "City": "Chhuikhadan",
      "State": "Chhattisgarh",
      "District": "Rajnandgaon"
    },
    {
      "City": "Chhutmalpur",
      "State": "Uttar Pradesh",
      "District": "Saharanpur"
    },
    {
      "City": "Chicalim",
      "State": "Goa",
      "District": "South Goa"
    },
    {
      "City": "Chichli",
      "State": "Madhya Pradesh",
      "District": "Narsimhapur"
    },
    {
      "City": "Chicholi",
      "State": "Maharashtra",
      "District": "Nagpur"
    },
    {
      "City": "Chidambaram",
      "State": "Tamil Nadu",
      "District": "Cuddalore"
    },
    {
      "City": "Chik Ballapur",
      "State": "Karnataka",
      "District": "Kolar"
    },
    {
      "City": "Chikhaldara",
      "State": "Maharashtra",
      "District": "Amravati"
    },
    {
      "City": "Chikhli",
      "State": "Maharashtra",
      "District": "Buldana"
    },
    {
      "City": "Chikhli",
      "State": "Gujarat",
      "District": "Navsari"
    },
    {
      "City": "Chikiti",
      "State": "Orissa",
      "District": "Ganjam"
    },
    {
      "City": "Chikmagalur",
      "State": "Karnataka",
      "District": "Chikmagalur"
    },
    {
      "City": "Chiknayakanhalli",
      "State": "Karnataka",
      "District": "Tumkur"
    },
    {
      "City": "Chikodi",
      "State": "Karnataka",
      "District": "Belgaum"
    },
    {
      "City": "Chikrand",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "Chilakaluripet",
      "State": "Andhra Pradesh",
      "District": "Guntur"
    },
    {
      "City": "Chilkana Sultanpur",
      "State": "Uttar Pradesh",
      "District": "Saharanpur"
    },
    {
      "City": "Chilla Saroda Bangar",
      "State": "Delhi *",
      "District": "East"
    },
    {
      "City": "Chiloda(Naroda)",
      "State": "Gujarat",
      "District": "Gandhinagar"
    },
    {
      "City": "Chimbel",
      "State": "Goa",
      "District": "North Goa"
    },
    {
      "City": "Chinchani",
      "State": "Maharashtra",
      "District": "Thane"
    },
    {
      "City": "Chinchinim",
      "State": "Goa",
      "District": "South Goa"
    },
    {
      "City": "Chincholi",
      "State": "Karnataka",
      "District": "Gulbarga"
    },
    {
      "City": "Chinna Anuppanadi",
      "State": "Tamil Nadu",
      "District": "Madurai"
    },
    {
      "City": "Chinnachowk",
      "State": "Andhra Pradesh",
      "District": "Cuddapah"
    },
    {
      "City": "Chinnakkampalayam",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Chinnalapatti",
      "State": "Tamil Nadu",
      "District": "Dindigul"
    },
    {
      "City": "Chinnamanur",
      "State": "Tamil Nadu",
      "District": "Theni"
    },
    {
      "City": "Chinnampalayam",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Chinnasalem",
      "State": "Tamil Nadu",
      "District": "Viluppuram"
    },
    {
      "City": "Chinnasekkadu",
      "State": "Tamil Nadu",
      "District": "Thiruvallur"
    },
    {
      "City": "Chinnavedampatti",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Chintalavalasa",
      "State": "Andhra Pradesh",
      "District": "Vizianagaram"
    },
    {
      "City": "Chintamani",
      "State": "Karnataka",
      "District": "Kolar"
    },
    {
      "City": "Chiplun",
      "State": "Maharashtra",
      "District": "Ratnagiri"
    },
    {
      "City": "Chirakkal",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Chirala",
      "State": "Andhra Pradesh",
      "District": "Prakasam"
    },
    {
      "City": "Chirawa",
      "State": "Rajasthan",
      "District": "Jhunjhunun"
    },
    {
      "City": "Chirgaon",
      "State": "Uttar Pradesh",
      "District": "Jhansi"
    },
    {
      "City": "Chiria",
      "State": "Jharkhand",
      "District": "Pashchimi Singhbhum"
    },
    {
      "City": "Chirkunda",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Chirmiri",
      "State": "Chhattisgarh",
      "District": "Koriya"
    },
    {
      "City": "Chitapur",
      "State": "Karnataka",
      "District": "Gulbarga"
    },
    {
      "City": "Chitbara Gaon",
      "State": "Uttar Pradesh",
      "District": "Ballia"
    },
    {
      "City": "Chitgoppa",
      "State": "Karnataka",
      "District": "Bidar"
    },
    {
      "City": "Chithode",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Chitlapakkam",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Chitradurga",
      "State": "Karnataka",
      "District": "Chitradurga"
    },
    {
      "City": "Chitrakoot",
      "State": "Madhya Pradesh",
      "District": "Satna"
    },
    {
      "City": "Chitrakoot Dham (Karwi)",
      "State": "Uttar Pradesh",
      "District": "Chitrakoot"
    },
    {
      "City": "Chittaranjan",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Chittaurgarh",
      "State": "Rajasthan",
      "District": "Chittaurgarh"
    },
    {
      "City": "Chittoor",
      "State": "Andhra Pradesh",
      "District": "Chittoor"
    },
    {
      "City": "Chittur-Thathamangalam",
      "State": "Kerala",
      "District": "Palakkad"
    },
    {
      "City": "Chockli",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Chohal",
      "State": "Punjab",
      "District": "Hoshiarpur"
    },
    {
      "City": "Cholapuram",
      "State": "Tamil Nadu",
      "District": "Thanjavur"
    },
    {
      "City": "Chomu",
      "State": "Rajasthan",
      "District": "Jaipur"
    },
    {
      "City": "Choornikkara",
      "State": "Kerala",
      "District": "Ernakulam"
    },
    {
      "City": "Chopan",
      "State": "Uttar Pradesh",
      "District": "Sonbhadra"
    },
    {
      "City": "Chopda",
      "State": "Maharashtra",
      "District": "Jalgaon"
    },
    {
      "City": "Chorvad",
      "State": "Gujarat",
      "District": "Junagadh"
    },
    {
      "City": "Choto Haibor",
      "State": "Assam",
      "District": "Nagaon"
    },
    {
      "City": "Choubepur Kalan",
      "State": "Uttar Pradesh",
      "District": "Kanpur Nagar"
    },
    {
      "City": "Choudwar",
      "State": "Orissa",
      "District": "Cuttack"
    },
    {
      "City": "Choutuppal",
      "State": "Andhra Pradesh",
      "District": "Nalgonda"
    },
    {
      "City": "Chowwara",
      "State": "Kerala",
      "District": "Ernakulam"
    },
    {
      "City": "Chuari Khas",
      "State": "Himachal Pradesh",
      "District": "Chamba"
    },
    {
      "City": "Chumukedima",
      "State": "Nagaland",
      "District": "Dimapur"
    },
    {
      "City": "Chunar",
      "State": "Uttar Pradesh",
      "District": "Mirzapur"
    },
    {
      "City": "Chunchupalle",
      "State": "Andhra Pradesh",
      "District": "Khammam"
    },
    {
      "City": "Churhat",
      "State": "Madhya Pradesh",
      "District": "Sidhi"
    },
    {
      "City": "Churi",
      "State": "Jharkhand",
      "District": "Ranchi"
    },
    {
      "City": "Churk Ghurma",
      "State": "Uttar Pradesh",
      "District": "Sonbhadra"
    },
    {
      "City": "Churu",
      "State": "Rajasthan",
      "District": "Churu"
    },
    {
      "City": "Clement Town",
      "State": "Uttaranchal",
      "District": "Dehradun"
    },
    {
      "City": "Coimbatore",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Colgong",
      "State": "Bihar",
      "District": "Bhagalpur"
    },
    {
      "City": "Colonelganj",
      "State": "Uttar Pradesh",
      "District": "Gonda"
    },
    {
      "City": "Colvale",
      "State": "Goa",
      "District": "North Goa"
    },
    {
      "City": "Contai",
      "State": "West Bengal",
      "District": "Medinipur"
    },
    {
      "City": "Coonoor",
      "State": "Tamil Nadu",
      "District": "The Nilgiris"
    },
    {
      "City": "Cooper's Camp",
      "State": "West Bengal",
      "District": "Nadia"
    },
    {
      "City": "Courtalam",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Cuddalore",
      "State": "Tamil Nadu",
      "District": "Cuddalore"
    },
    {
      "City": "Cuddapah",
      "State": "Andhra Pradesh",
      "District": "Cuddapah"
    },
    {
      "City": "Cuncolim",
      "State": "Goa",
      "District": "South Goa"
    },
    {
      "City": "Curchorem Cacora",
      "State": "Goa",
      "District": "South Goa"
    },
    {
      "City": "Curti",
      "State": "Goa",
      "District": "North Goa"
    },
    {
      "City": "Cuttack",
      "State": "Orissa",
      "District": "Cuttack"
    },
    {
      "City": "Dabhoi",
      "State": "Gujarat",
      "District": "Vadodara"
    },
    {
      "City": "Daboh",
      "State": "Madhya Pradesh",
      "District": "Bhind"
    },
    {
      "City": "Dabra",
      "State": "Madhya Pradesh",
      "District": "Gwalior"
    },
    {
      "City": "Dadhapatna",
      "State": "Orissa",
      "District": "Cuttack"
    },
    {
      "City": "Dadri",
      "State": "Uttar Pradesh",
      "District": "Gautam Buddha Nagar"
    },
    {
      "City": "Dafahat",
      "State": "West Bengal",
      "District": "Murshidabad"
    },
    {
      "City": "Dagshai",
      "State": "Himachal Pradesh",
      "District": "Solan"
    },
    {
      "City": "Dahanu",
      "State": "Maharashtra",
      "District": "Thane"
    },
    {
      "City": "Dahegam",
      "State": "Gujarat",
      "District": "Gandhinagar"
    },
    {
      "City": "Dainhat",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Daitari",
      "State": "Orissa",
      "District": "Kendujhar"
    },
    {
      "City": "Dakor",
      "State": "Gujarat",
      "District": "Kheda"
    },
    {
      "City": "Dakshin Baguan",
      "State": "West Bengal",
      "District": "Medinipur"
    },
    {
      "City": "Dakshin Jhapardaha",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Dakshin Rajyadharpur",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "Dalavaipatti",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Dalhousie",
      "State": "Himachal Pradesh",
      "District": "Chamba"
    },
    {
      "City": "Dalhousie",
      "State": "Himachal Pradesh",
      "District": "Chamba"
    },
    {
      "City": "Dalkhola",
      "State": "West Bengal",
      "District": "Uttar Dinajpur"
    },
    {
      "City": "Dalli-Rajhara",
      "State": "Chhattisgarh",
      "District": "Durg"
    },
    {
      "City": "Dallo Pura",
      "State": "Delhi *",
      "District": "East"
    },
    {
      "City": "Dalmau",
      "State": "Uttar Pradesh",
      "District": "Rae Bareli"
    },
    {
      "City": "Dalsinghsarai",
      "State": "Bihar",
      "District": "Samastipur"
    },
    {
      "City": "Daltonganj",
      "State": "Jharkhand",
      "District": "Palamu"
    },
    {
      "City": "Dalurband",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Daman",
      "State": "Daman & Diu *",
      "District": "Daman"
    },
    {
      "City": "Damanjodi",
      "State": "Orissa",
      "District": "Koraput"
    },
    {
      "City": "Damnagar",
      "State": "Gujarat",
      "District": "Amreli"
    },
    {
      "City": "Damoh",
      "State": "Madhya Pradesh",
      "District": "Damoh"
    },
    {
      "City": "Damua",
      "State": "Madhya Pradesh",
      "District": "Chhindwara"
    },
    {
      "City": "Dandeli",
      "State": "Karnataka",
      "District": "Uttara Kannada"
    },
    {
      "City": "Danguwapasi",
      "State": "Jharkhand",
      "District": "Pashchimi Singhbhum"
    },
    {
      "City": "Dankaur",
      "State": "Uttar Pradesh",
      "District": "Gautam Buddha Nagar"
    },
    {
      "City": "Dantewada",
      "State": "Chhattisgarh",
      "District": "Dantewada"
    },
    {
      "City": "Dapoli Camp",
      "State": "Maharashtra",
      "District": "Ratnagiri"
    },
    {
      "City": "Daporijo",
      "State": "Arunachal Pradesh",
      "District": "Upper Subansiri"
    },
    {
      "City": "Darappur",
      "State": "West Bengal",
      "District": "Nadia"
    },
    {
      "City": "Darbhanga",
      "State": "Bihar",
      "District": "Darbhanga"
    },
    {
      "City": "Dargajogihalli",
      "State": "Karnataka",
      "District": "Bangalore Rural"
    },
    {
      "City": "Dari",
      "State": "Jharkhand",
      "District": "Hazaribag"
    },
    {
      "City": "Dariba",
      "State": "Rajasthan",
      "District": "Rajsamand"
    },
    {
      "City": "Dariyabad",
      "State": "Uttar Pradesh",
      "District": "Barabanki"
    },
    {
      "City": "Darjiling",
      "State": "West Bengal",
      "District": "Darjiling"
    },
    {
      "City": "Darlawn",
      "State": "Mizoram",
      "District": "Aizawl"
    },
    {
      "City": "Daroha",
      "State": "Punjab",
      "District": "Ludhiana"
    },
    {
      "City": "Darwha",
      "State": "Maharashtra",
      "District": "Yavatmal"
    },
    {
      "City": "Daryapur Banosa",
      "State": "Maharashtra",
      "District": "Amravati"
    },
    {
      "City": "Dasarahalli",
      "State": "Karnataka",
      "District": "Bangalore"
    },
    {
      "City": "Dasna",
      "State": "Uttar Pradesh",
      "District": "Ghaziabad"
    },
    {
      "City": "Dasnapur",
      "State": "Andhra Pradesh",
      "District": "Adilabad"
    },
    {
      "City": "Dasua",
      "State": "Punjab",
      "District": "Hoshiarpur"
    },
    {
      "City": "Dataganj",
      "State": "Uttar Pradesh",
      "District": "Budaun"
    },
    {
      "City": "Datia",
      "State": "Madhya Pradesh",
      "District": "Datia"
    },
    {
      "City": "Dattapur Dhamangaon",
      "State": "Maharashtra",
      "District": "Amravati"
    },
    {
      "City": "Daudnagar",
      "State": "Bihar",
      "District": "Aurangabad"
    },
    {
      "City": "Daulatpur",
      "State": "Punjab",
      "District": "Gurdaspur"
    },
    {
      "City": "Daulatpur",
      "State": "Himachal Pradesh",
      "District": "Una"
    },
    {
      "City": "Daund",
      "State": "Maharashtra",
      "District": "Pune"
    },
    {
      "City": "Daurala",
      "State": "Uttar Pradesh",
      "District": "Meerut"
    },
    {
      "City": "Dausa",
      "State": "Rajasthan",
      "District": "Dausa"
    },
    {
      "City": "Davanagere",
      "State": "Karnataka",
      "District": "Davanagere"
    },
    {
      "City": "Davlameti",
      "State": "Maharashtra",
      "District": "Nagpur"
    },
    {
      "City": "Davorlim",
      "State": "Goa",
      "District": "South Goa"
    },
    {
      "City": "Dayal Pur",
      "State": "Delhi *",
      "District": "North East"
    },
    {
      "City": "Dayalbagh",
      "State": "Uttar Pradesh",
      "District": "Agra"
    },
    {
      "City": "Debagarh",
      "State": "Orissa",
      "District": "Debagarh"
    },
    {
      "City": "Debipur",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Deeg",
      "State": "Rajasthan",
      "District": "Bharatpur"
    },
    {
      "City": "Deesa",
      "State": "Gujarat",
      "District": "Banas Kantha"
    },
    {
      "City": "Deglur",
      "State": "Maharashtra",
      "District": "Nanded"
    },
    {
      "City": "Dehradun",
      "State": "Uttaranchal",
      "District": "Dehradun"
    },
    {
      "City": "Dehradun",
      "State": "Uttaranchal",
      "District": "Dehradun"
    },
    {
      "City": "Dehri",
      "State": "Bihar",
      "District": "Rohtas"
    },
    {
      "City": "Dehu",
      "State": "Maharashtra",
      "District": "Pune"
    },
    {
      "City": "Dehu Road",
      "State": "Maharashtra",
      "District": "Pune"
    },
    {
      "City": "Delhi Cantt.",
      "State": "Delhi *",
      "District": "South West"
    },
    {
      "City": "Delhi Municipal Corporation (U)",
      "State": "Delhi *",
      "District": "In all 9 dsitricts"
    },
    {
      "City": "Denkanikottai",
      "State": "Tamil Nadu",
      "District": "Dharmapuri"
    },
    {
      "City": "Deoband",
      "State": "Uttar Pradesh",
      "District": "Saharanpur"
    },
    {
      "City": "Deodara",
      "State": "Madhya Pradesh",
      "District": "Mandla"
    },
    {
      "City": "Deoghar",
      "State": "Jharkhand",
      "District": "Deoghar"
    },
    {
      "City": "Deolali",
      "State": "Maharashtra",
      "District": "Nashik"
    },
    {
      "City": "Deolali Pravara",
      "State": "Maharashtra",
      "District": "Ahmadnagar"
    },
    {
      "City": "Deoli",
      "State": "Maharashtra",
      "District": "Wardha"
    },
    {
      "City": "Deoli",
      "State": "Delhi *",
      "District": "South"
    },
    {
      "City": "Deoli",
      "State": "Rajasthan",
      "District": "Tonk"
    },
    {
      "City": "Deomali",
      "State": "Arunachal Pradesh",
      "District": "Tirap"
    },
    {
      "City": "Deoranian",
      "State": "Uttar Pradesh",
      "District": "Bareilly"
    },
    {
      "City": "Deori",
      "State": "Chhattisgarh",
      "District": "Bilaspur"
    },
    {
      "City": "Deori",
      "State": "Madhya Pradesh",
      "District": "Sagar"
    },
    {
      "City": "Deori",
      "State": "Madhya Pradesh",
      "District": "Shahdol"
    },
    {
      "City": "Deoria",
      "State": "Uttar Pradesh",
      "District": "Deoria"
    },
    {
      "City": "Deorikalan",
      "State": "Jharkhand",
      "District": "Palamu"
    },
    {
      "City": "Depalpur",
      "State": "Madhya Pradesh",
      "District": "Indore"
    },
    {
      "City": "Dera Baba Nanak",
      "State": "Punjab",
      "District": "Gurdaspur"
    },
    {
      "City": "Dera Bassi",
      "State": "Punjab",
      "District": "Patiala"
    },
    {
      "City": "Dera Gopipur",
      "State": "Himachal Pradesh",
      "District": "Kangra"
    },
    {
      "City": "Deracolliery Township",
      "State": "Orissa",
      "District": "Anugul"
    },
    {
      "City": "Dergaon",
      "State": "Assam",
      "District": "Golaghat"
    },
    {
      "City": "Desaiganj",
      "State": "Maharashtra",
      "District": "Gadchiroli"
    },
    {
      "City": "Deshnoke",
      "State": "Rajasthan",
      "District": "Bikaner"
    },
    {
      "City": "Desur",
      "State": "Tamil Nadu",
      "District": "Tiruvanamalai"
    },
    {
      "City": "Deulgaon Raja",
      "State": "Maharashtra",
      "District": "Buldana"
    },
    {
      "City": "Deuli",
      "State": "West Bengal",
      "District": "Medinipur"
    },
    {
      "City": "Dev Prayag",
      "State": "Uttaranchal",
      "District": "Tehri Garhwal & Garhwal"
    },
    {
      "City": "Devadanapatti",
      "State": "Tamil Nadu",
      "District": "Theni"
    },
    {
      "City": "Devadurga",
      "State": "Karnataka",
      "District": "Raichur"
    },
    {
      "City": "Devakottai",
      "State": "Tamil Nadu",
      "District": "Sivaganga"
    },
    {
      "City": "Devanangurichi",
      "State": "Tamil Nadu",
      "District": "Namakkal"
    },
    {
      "City": "Devanhalli",
      "State": "Karnataka",
      "District": "Bangalore Rural"
    },
    {
      "City": "Devarakonda",
      "State": "Andhra Pradesh",
      "District": "Nalgonda"
    },
    {
      "City": "Devarshola",
      "State": "Tamil Nadu",
      "District": "The Nilgiris"
    },
    {
      "City": "Devendranagar",
      "State": "Madhya Pradesh",
      "District": "Panna"
    },
    {
      "City": "Devgadbaria",
      "State": "Gujarat",
      "District": "Dohad"
    },
    {
      "City": "Devgarh",
      "State": "Rajasthan",
      "District": "Rajsamand"
    },
    {
      "City": "Devhara",
      "State": "Madhya Pradesh",
      "District": "Shahdol"
    },
    {
      "City": "Devsar",
      "State": "Gujarat",
      "District": "Navsari"
    },
    {
      "City": "Dewa",
      "State": "Uttar Pradesh",
      "District": "Barabanki"
    },
    {
      "City": "Dewas",
      "State": "Madhya Pradesh",
      "District": "Dewas"
    },
    {
      "City": "Dewhadi",
      "State": "Maharashtra",
      "District": "Bhandara"
    },
    {
      "City": "Dhaka",
      "State": "Bihar",
      "District": "Purba Champaran"
    },
    {
      "City": "Dhakuria",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Dhalavoipuram",
      "State": "Tamil Nadu",
      "District": "Virudhunagar"
    },
    {
      "City": "Dhali",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Dhaliyur",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Dhaluwala",
      "State": "Uttaranchal",
      "District": "Tehri Garhwal"
    },
    {
      "City": "Dhamanagar",
      "State": "Orissa",
      "District": "Bhadrak"
    },
    {
      "City": "Dhamdha",
      "State": "Chhattisgarh",
      "District": "Durg"
    },
    {
      "City": "Dhamnod",
      "State": "Madhya Pradesh",
      "District": "Dhar"
    },
    {
      "City": "Dhampur",
      "State": "Uttar Pradesh",
      "District": "Bijnor"
    },
    {
      "City": "Dhamtari",
      "State": "Chhattisgarh",
      "District": "Dhamtari"
    },
    {
      "City": "Dhana",
      "State": "Madhya Pradesh",
      "District": "Sagar"
    },
    {
      "City": "Dhanauha",
      "State": "Uttar Pradesh",
      "District": "Jaunpur"
    },
    {
      "City": "Dhanaula",
      "State": "Punjab",
      "District": "Sangrur"
    },
    {
      "City": "Dhanauli",
      "State": "Uttar Pradesh",
      "District": "Agra"
    },
    {
      "City": "Dhanaura",
      "State": "Uttar Pradesh",
      "District": "Jyotiba Phule Nagar"
    },
    {
      "City": "Dhanbad",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Dhandadihi",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Dhandera",
      "State": "Uttaranchal",
      "District": "Hardwar"
    },
    {
      "City": "Dhandhuka",
      "State": "Gujarat",
      "District": "Ahmadabad"
    },
    {
      "City": "Dhanera",
      "State": "Gujarat",
      "District": "Banas Kantha"
    },
    {
      "City": "Dhanpuri",
      "State": "Madhya Pradesh",
      "District": "Shahdol"
    },
    {
      "City": "Dhanwar",
      "State": "Jharkhand",
      "District": "Giridih"
    },
    {
      "City": "Dhanyakuria",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Dhar",
      "State": "Madhya Pradesh",
      "District": "Dhar"
    },
    {
      "City": "Dharamjaigarh",
      "State": "Chhattisgarh",
      "District": "Raigarh"
    },
    {
      "City": "Dharamkot",
      "State": "Punjab",
      "District": "Moga"
    },
    {
      "City": "Dharampur",
      "State": "Gujarat",
      "District": "Valsad"
    },
    {
      "City": "Dharampuri",
      "State": "Madhya Pradesh",
      "District": "Dhar"
    },
    {
      "City": "Dharangaon",
      "State": "Maharashtra",
      "District": "Jalgaon"
    },
    {
      "City": "Dharapadavedu",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Dharapur",
      "State": "Assam",
      "District": "Kamrup"
    },
    {
      "City": "Dharapuram",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Dharasuram",
      "State": "Tamil Nadu",
      "District": "Thanjavur"
    },
    {
      "City": "Dharchula",
      "State": "Uttaranchal",
      "District": "Pithoragarh"
    },
    {
      "City": "Dharchula Dehat",
      "State": "Uttaranchal",
      "District": "Pithoragarh"
    },
    {
      "City": "Dhariawad",
      "State": "Rajasthan",
      "District": "Udaipur"
    },
    {
      "City": "Dhariwal",
      "State": "Punjab",
      "District": "Gurdaspur"
    },
    {
      "City": "Dharmabad",
      "State": "Maharashtra",
      "District": "Nanded"
    },
    {
      "City": "Dharmadom",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Dharmanagar",
      "State": "Tripura",
      "District": "North Tripura"
    },
    {
      "City": "Dharmapur",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "Dharmapuri",
      "State": "Tamil Nadu",
      "District": "Dharmapuri"
    },
    {
      "City": "Dharmavaram",
      "State": "Andhra Pradesh",
      "District": "Anantapur"
    },
    {
      "City": "Dharmsala",
      "State": "Himachal Pradesh",
      "District": "Kangra"
    },
    {
      "City": "Dharoti Khurd",
      "State": "Uttar Pradesh",
      "District": "Ghaziabad"
    },
    {
      "City": "Dharuhera",
      "State": "Haryana",
      "District": "Rewari"
    },
    {
      "City": "Dharur",
      "State": "Maharashtra",
      "District": "Bid"
    },
    {
      "City": "Dhatau",
      "State": "Maharashtra",
      "District": "Raigarh"
    },
    {
      "City": "Dhatrigram",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Dhaulpur",
      "State": "Rajasthan",
      "District": "Dhaulpur"
    },
    {
      "City": "Dhaunsar",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Dhaura Tanda",
      "State": "Uttar Pradesh",
      "District": "Bareilly"
    },
    {
      "City": "Dhaurehra",
      "State": "Uttar Pradesh",
      "District": "Kheri"
    },
    {
      "City": "Dhekiajuli",
      "State": "Assam",
      "District": "Sonitpur"
    },
    {
      "City": "Dhemaji",
      "State": "Assam",
      "District": "Dhemaji"
    },
    {
      "City": "Dhenkanal",
      "State": "Orissa",
      "District": "Dhenkanal"
    },
    {
      "City": "Dhilwan",
      "State": "Punjab",
      "District": "Kapurthala"
    },
    {
      "City": "Dhing",
      "State": "Assam",
      "District": "Nagaon"
    },
    {
      "City": "Dhola",
      "State": "Gujarat",
      "District": "Bhavnagar"
    },
    {
      "City": "Dholka",
      "State": "Gujarat",
      "District": "Ahmadabad"
    },
    {
      "City": "Dhoraji",
      "State": "Gujarat",
      "District": "Rajkot"
    },
    {
      "City": "Dhrangadhra",
      "State": "Gujarat",
      "District": "Surendranagar"
    },
    {
      "City": "Dhrol",
      "State": "Gujarat",
      "District": "Jamnagar"
    },
    {
      "City": "Dhubri",
      "State": "Assam",
      "District": "Dhubri"
    },
    {
      "City": "Dhuilya",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Dhule",
      "State": "Maharashtra",
      "District": "Dhule"
    },
    {
      "City": "Dhulian",
      "State": "West Bengal",
      "District": "Murshidabad"
    },
    {
      "City": "Dhupguri",
      "State": "West Bengal",
      "District": "Jalpaiguri"
    },
    {
      "City": "Dhuri",
      "State": "Punjab",
      "District": "Sangrur"
    },
    {
      "City": "Dhusaripara",
      "State": "West Bengal",
      "District": "Murshidabad"
    },
    {
      "City": "Diamond Harbour",
      "State": "West Bengal",
      "District": "South Twentyfour Parganas"
    },
    {
      "City": "Dibai",
      "State": "Uttar Pradesh",
      "District": "Bulandshahr"
    },
    {
      "City": "Dibiyapur",
      "State": "Uttar Pradesh",
      "District": "Auraiya"
    },
    {
      "City": "Dibrugarh",
      "State": "Assam",
      "District": "Dibrugarh"
    },
    {
      "City": "Didihat",
      "State": "Uttaranchal",
      "District": "Pithoragarh"
    },
    {
      "City": "Didwana",
      "State": "Rajasthan",
      "District": "Nagaur"
    },
    {
      "City": "Digapahandi",
      "State": "Orissa",
      "District": "Ganjam"
    },
    {
      "City": "Digboi",
      "State": "Assam",
      "District": "Tinsukia"
    },
    {
      "City": "Digboi Oil Town",
      "State": "Assam",
      "District": "Tinsukia"
    },
    {
      "City": "Digdoh",
      "State": "Maharashtra",
      "District": "Nagpur"
    },
    {
      "City": "Dighawani",
      "State": "Madhya Pradesh",
      "District": "Chhindwara"
    },
    {
      "City": "Dighwara",
      "State": "Bihar",
      "District": "Saran"
    },
    {
      "City": "Dignala",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Digras",
      "State": "Maharashtra",
      "District": "Yavatmal"
    },
    {
      "City": "Digvijaygram",
      "State": "Gujarat",
      "District": "Jamnagar"
    },
    {
      "City": "Diken",
      "State": "Madhya Pradesh",
      "District": "Neemuch"
    },
    {
      "City": "Dildarnagar Fatehpur Bazar",
      "State": "Uttar Pradesh",
      "District": "Ghazipur"
    },
    {
      "City": "Dimapur",
      "State": "Nagaland",
      "District": "Dimapur"
    },
    {
      "City": "Dimaruguri",
      "State": "Assam",
      "District": "Nagaon"
    },
    {
      "City": "Dina Nagar",
      "State": "Punjab",
      "District": "Gurdaspur"
    },
    {
      "City": "Dinapur Cantt.",
      "State": "Bihar",
      "District": "Patna"
    },
    {
      "City": "Dinapur Nizamat",
      "State": "Bihar",
      "District": "Patna"
    },
    {
      "City": "Dindigul",
      "State": "Tamil Nadu",
      "District": "Dindigul"
    },
    {
      "City": "Dindori",
      "State": "Madhya Pradesh",
      "District": "Dindori"
    },
    {
      "City": "Dineshpur",
      "State": "Uttaranchal",
      "District": "Udham Singh Nagar"
    },
    {
      "City": "Dinhata",
      "State": "West Bengal",
      "District": "Koch Bihar"
    },
    {
      "City": "Diphu",
      "State": "Assam",
      "District": "Karbi Anglong"
    },
    {
      "City": "Dipka",
      "State": "Chhattisgarh",
      "District": "Korba"
    },
    {
      "City": "Dirba",
      "State": "Punjab",
      "District": "Sangrur"
    },
    {
      "City": "Diu",
      "State": "Daman & Diu *",
      "District": "Diu"
    },
    {
      "City": "Doboka",
      "State": "Assam",
      "District": "Nagaon"
    },
    {
      "City": "Dod Ballapur",
      "State": "Karnataka",
      "District": "Bangalore Rural"
    },
    {
      "City": "Doda",
      "State": "Jammu & Kashmir",
      "District": "Doda"
    },
    {
      "City": "Dogadda",
      "State": "Uttaranchal",
      "District": "Garhwal"
    },
    {
      "City": "Doghat",
      "State": "Uttar Pradesh",
      "District": "Baghpat"
    },
    {
      "City": "Dohad",
      "State": "Gujarat",
      "District": "Dohad"
    },
    {
      "City": "Dohrighat",
      "State": "Uttar Pradesh",
      "District": "Mau"
    },
    {
      "City": "Doiwala",
      "State": "Uttaranchal",
      "District": "Dehradun"
    },
    {
      "City": "Dokmoka",
      "State": "Assam",
      "District": "Karbi Anglong"
    },
    {
      "City": "Dola",
      "State": "Madhya Pradesh",
      "District": "Shahdol"
    },
    {
      "City": "Domjur",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Dommara Nandyal",
      "State": "Andhra Pradesh",
      "District": "Cuddapah"
    },
    {
      "City": "Dondaicha-Warwade",
      "State": "Maharashtra",
      "District": "Dhule"
    },
    {
      "City": "Dongar Parasia",
      "State": "Madhya Pradesh",
      "District": "Chhindwara"
    },
    {
      "City": "Dongargaon",
      "State": "Chhattisgarh",
      "District": "Rajnandgaon"
    },
    {
      "City": "Dongragarh",
      "State": "Chhattisgarh",
      "District": "Rajnandgaon"
    },
    {
      "City": "Donimalai Township",
      "State": "Karnataka",
      "District": "Bellary"
    },
    {
      "City": "Donkamokam",
      "State": "Assam",
      "District": "Karbi Anglong"
    },
    {
      "City": "Doom Dooma",
      "State": "Assam",
      "District": "Tinsukia"
    },
    {
      "City": "Dostpur",
      "State": "Uttar Pradesh",
      "District": "Sultanpur"
    },
    {
      "City": "Dowleswaram",
      "State": "Andhra Pradesh",
      "District": "East Godavari"
    },
    {
      "City": "Dubrajpur",
      "State": "West Bengal",
      "District": "Birbhum"
    },
    {
      "City": "Dudhani",
      "State": "Maharashtra",
      "District": "Solapur"
    },
    {
      "City": "Dudhi",
      "State": "Uttar Pradesh",
      "District": "Sonbhadra"
    },
    {
      "City": "Dugda",
      "State": "Jharkhand",
      "District": "Bokaro"
    },
    {
      "City": "Dulhipur",
      "State": "Uttar Pradesh",
      "District": "Chandauli"
    },
    {
      "City": "Duliajan No.1",
      "State": "Assam",
      "District": "Dibrugarh"
    },
    {
      "City": "Duliajan Oil Town",
      "State": "Assam",
      "District": "Dibrugarh"
    },
    {
      "City": "Dumar Kachhar",
      "State": "Madhya Pradesh",
      "District": "Shahdol"
    },
    {
      "City": "Dumarkunda",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Dumdum",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Dumka",
      "State": "Jharkhand",
      "District": "Dumka"
    },
    {
      "City": "Dumra",
      "State": "Bihar",
      "District": "Sitamarhi"
    },
    {
      "City": "Dumraon",
      "State": "Bihar",
      "District": "Buxar"
    },
    {
      "City": "Dundahera",
      "State": "Haryana",
      "District": "Gurgaon"
    },
    {
      "City": "Dungamal",
      "State": "Orissa",
      "District": "Khordha"
    },
    {
      "City": "Dungargarh",
      "State": "Rajasthan",
      "District": "Churu"
    },
    {
      "City": "Dungarpur",
      "State": "Rajasthan",
      "District": "Dungarpur"
    },
    {
      "City": "Dungra",
      "State": "Gujarat",
      "District": "Valsad"
    },
    {
      "City": "Durg",
      "State": "Chhattisgarh",
      "District": "Durg"
    },
    {
      "City": "Durga Nagar Part-V",
      "State": "Assam",
      "District": "Cachar"
    },
    {
      "City": "Durgapur",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Durgapur",
      "State": "Maharashtra",
      "District": "Chandrapur"
    },
    {
      "City": "Durllabhganj",
      "State": "West Bengal",
      "District": "Medinipur"
    },
    {
      "City": "Duru-Verinag",
      "State": "Jammu & Kashmir",
      "District": "Anantnag"
    },
    {
      "City": "Dusi",
      "State": "Tamil Nadu",
      "District": "Tiruvanamalai"
    },
    {
      "City": "Dwarahat",
      "State": "Uttaranchal",
      "District": "Almora"
    },
    {
      "City": "Dwarka",
      "State": "Gujarat",
      "District": "Jamnagar"
    },
    {
      "City": "Dyane",
      "State": "Maharashtra",
      "District": "Nashik"
    },
    {
      "City": "Edaganasalai",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Edaikodu",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Edakalinadu",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Edappadi",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Edathala",
      "State": "Kerala",
      "District": "Ernakulam"
    },
    {
      "City": "Eddumailaram",
      "State": "Andhra Pradesh",
      "District": "Medak"
    },
    {
      "City": "Egarkunr",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Egra",
      "State": "West Bengal",
      "District": "Medinipur"
    },
    {
      "City": "Ekambara kuppam",
      "State": "Andhra Pradesh",
      "District": "Chittoor"
    },
    {
      "City": "Ekdil",
      "State": "Uttar Pradesh",
      "District": "Etawah"
    },
    {
      "City": "Eklahare",
      "State": "Maharashtra",
      "District": "Nashik"
    },
    {
      "City": "Eksara",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Elathur",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Elayavoor",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Elayirampannai",
      "State": "Tamil Nadu",
      "District": "Virudhunagar"
    },
    {
      "City": "Ellenabad",
      "State": "Haryana",
      "District": "Sirsa"
    },
    {
      "City": "Eloor",
      "State": "Kerala",
      "District": "Ernakulam"
    },
    {
      "City": "Elumalai",
      "State": "Tamil Nadu",
      "District": "Madurai"
    },
    {
      "City": "Eluru",
      "State": "Andhra Pradesh",
      "District": "West Godavari"
    },
    {
      "City": "English Bazar",
      "State": "West Bengal",
      "District": "Maldah"
    },
    {
      "City": "Eral",
      "State": "Tamil Nadu",
      "District": "Toothukudi"
    },
    {
      "City": "Erandol",
      "State": "Maharashtra",
      "District": "Jalgaon"
    },
    {
      "City": "Eranholi",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Eraniel",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Erattupetta",
      "State": "Kerala",
      "District": "Kottayam"
    },
    {
      "City": "Erich",
      "State": "Uttar Pradesh",
      "District": "Jhansi"
    },
    {
      "City": "Eriodu",
      "State": "Tamil Nadu",
      "District": "Dindigul"
    },
    {
      "City": "Erode",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Erumaipatti",
      "State": "Tamil Nadu",
      "District": "Namakkal"
    },
    {
      "City": "Eruvadi",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Etah",
      "State": "Uttar Pradesh",
      "District": "Etah"
    },
    {
      "City": "Etawah",
      "State": "Uttar Pradesh",
      "District": "Etawah"
    },
    {
      "City": "Ethapur",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Etmadpur",
      "State": "Uttar Pradesh",
      "District": "Agra"
    },
    {
      "City": "Ettayapuram",
      "State": "Tamil Nadu",
      "District": "Toothukudi"
    },
    {
      "City": "Ettimadai",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Ezhudesam",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Faizabad",
      "State": "Uttar Pradesh",
      "District": "Faizabad"
    },
    {
      "City": "Faizabad",
      "State": "Uttar Pradesh",
      "District": "Faizabad"
    },
    {
      "City": "Faizganj",
      "State": "Uttar Pradesh",
      "District": "Budaun"
    },
    {
      "City": "Faizpur",
      "State": "Maharashtra",
      "District": "Jalgaon"
    },
    {
      "City": "Falakata",
      "State": "West Bengal",
      "District": "Jalpaiguri"
    },
    {
      "City": "Farah",
      "State": "Uttar Pradesh",
      "District": "Mathura"
    },
    {
      "City": "Farakhpur",
      "State": "Haryana",
      "District": "Yamunanagar"
    },
    {
      "City": "Faridabad",
      "State": "Haryana",
      "District": "Faridabad"
    },
    {
      "City": "Faridkot",
      "State": "Punjab",
      "District": "Faridkot"
    },
    {
      "City": "Faridnagar",
      "State": "Uttar Pradesh",
      "District": "Ghaziabad"
    },
    {
      "City": "Faridpur",
      "State": "Uttar Pradesh",
      "District": "Bareilly"
    },
    {
      "City": "Faridpur",
      "State": "Uttar Pradesh",
      "District": "Bareilly"
    },
    {
      "City": "Fariha",
      "State": "Uttar Pradesh",
      "District": "Firozabad"
    },
    {
      "City": "Farooqnagar",
      "State": "Andhra Pradesh",
      "District": "Mahbubnagar"
    },
    {
      "City": "Farrakka Barrage Township",
      "State": "West Bengal",
      "District": "Murshidabad"
    },
    {
      "City": "Farrukhabad-cum-Fatehgarh",
      "State": "Uttar Pradesh",
      "District": "Farrukhabad"
    },
    {
      "City": "Farrukhnagar",
      "State": "Haryana",
      "District": "Gurgaon"
    },
    {
      "City": "Fatehabad",
      "State": "Haryana",
      "District": "Fatehabad"
    },
    {
      "City": "Fatehabad",
      "State": "Uttar Pradesh",
      "District": "Agra"
    },
    {
      "City": "Fatehganj Pashchimi",
      "State": "Uttar Pradesh",
      "District": "Bareilly"
    },
    {
      "City": "Fatehganj Purvi",
      "State": "Uttar Pradesh",
      "District": "Bareilly"
    },
    {
      "City": "Fatehgarh",
      "State": "Uttar Pradesh",
      "District": "Farrukhabad"
    },
    {
      "City": "Fatehgarh Churian",
      "State": "Punjab",
      "District": "Gurdaspur"
    },
    {
      "City": "Fatehnagar",
      "State": "Rajasthan",
      "District": "Udaipur"
    },
    {
      "City": "Fatehpur",
      "State": "Rajasthan",
      "District": "Sikar"
    },
    {
      "City": "Fatehpur",
      "State": "Uttar Pradesh",
      "District": "Fatehpur"
    },
    {
      "City": "Fatehpur",
      "State": "Uttar Pradesh",
      "District": "Barabanki"
    },
    {
      "City": "Fatehpur Chaurasi",
      "State": "Uttar Pradesh",
      "District": "Unnao"
    },
    {
      "City": "Fatehpur Sikri",
      "State": "Uttar Pradesh",
      "District": "Agra"
    },
    {
      "City": "Fatellapur",
      "State": "West Bengal",
      "District": "Murshidabad"
    },
    {
      "City": "Fatwah",
      "State": "Bihar",
      "District": "Patna"
    },
    {
      "City": "Fazilka",
      "State": "Punjab",
      "District": "Firozpur"
    },
    {
      "City": "Feroke",
      "State": "Kerala",
      "District": "Kozhikode"
    },
    {
      "City": "Ferozepur Jhirka",
      "State": "Haryana",
      "District": "Gurgaon"
    },
    {
      "City": "Fertilzer Corporation of IndiaTownship",
      "State": "Orissa",
      "District": "Anugul"
    },
    {
      "City": "Fiozpur",
      "State": "Punjab",
      "District": "Firozpur"
    },
    {
      "City": "Firozabad",
      "State": "Uttar Pradesh",
      "District": "Firozabad"
    },
    {
      "City": "Firozpur Cantt.",
      "State": "Punjab",
      "District": "Firozpur"
    },
    {
      "City": "Forbesganj",
      "State": "Bihar",
      "District": "Araria"
    },
    {
      "City": "Freelandgunj",
      "State": "Gujarat",
      "District": "Dohad"
    },
    {
      "City": "Frezarpur",
      "State": "Chhattisgarh",
      "District": "Bastar"
    },
    {
      "City": "FRI and College Area",
      "State": "Uttaranchal",
      "District": "Dehradun"
    },
    {
      "City": "G. Udayagiri",
      "State": "Orissa",
      "District": "Kandhamal"
    },
    {
      "City": "G.C.F Jabalpur",
      "State": "Madhya Pradesh",
      "District": "Jabalpur"
    },
    {
      "City": "Gabberia",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Gadag-Betigeri",
      "State": "Karnataka",
      "District": "Gadag"
    },
    {
      "City": "Gadarpur",
      "State": "Uttaranchal",
      "District": "Udham Singh Nagar"
    },
    {
      "City": "Gadarwara",
      "State": "Madhya Pradesh",
      "District": "Narsimhapur"
    },
    {
      "City": "Gadchiroli",
      "State": "Maharashtra",
      "District": "Gadchiroli"
    },
    {
      "City": "Gaddi annaram",
      "State": "Andhra Pradesh",
      "District": "Rangareddi"
    },
    {
      "City": "Gadhada",
      "State": "Gujarat",
      "District": "Bhavnagar"
    },
    {
      "City": "Gadhinglaj",
      "State": "Maharashtra",
      "District": "Kolhapur"
    },
    {
      "City": "Gadhra",
      "State": "Jharkhand",
      "District": "Purbi Singhbhum"
    },
    {
      "City": "Gadwal",
      "State": "Andhra Pradesh",
      "District": "Mahbubnagar"
    },
    {
      "City": "Gagret",
      "State": "Himachal Pradesh",
      "District": "Una"
    },
    {
      "City": "Gairatganj",
      "State": "Madhya Pradesh",
      "District": "Raisen"
    },
    {
      "City": "Gairkata",
      "State": "West Bengal",
      "District": "Jalpaiguri"
    },
    {
      "City": "Gajapathinagaram",
      "State": "Andhra Pradesh",
      "District": "Vizianagaram"
    },
    {
      "City": "Gajendragarh",
      "State": "Karnataka",
      "District": "Gadag"
    },
    {
      "City": "Gajraula",
      "State": "Uttar Pradesh",
      "District": "Jyotiba Phule Nagar"
    },
    {
      "City": "Gajsinghpur",
      "State": "Rajasthan",
      "District": "Ganganagar"
    },
    {
      "City": "Gajularega",
      "State": "Andhra Pradesh",
      "District": "Vizianagaram"
    },
    {
      "City": "Gajuwaka",
      "State": "Andhra Pradesh",
      "District": "Visakhapatnam"
    },
    {
      "City": "Gakulnagar",
      "State": "Tripura",
      "District": "West Tripura"
    },
    {
      "City": "Galiakot",
      "State": "Rajasthan",
      "District": "Dungarpur"
    },
    {
      "City": "Ganapathipuram",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Ganaur",
      "State": "Haryana",
      "District": "Sonipat"
    },
    {
      "City": "Gandai",
      "State": "Chhattisgarh",
      "District": "Rajnandgaon"
    },
    {
      "City": "Ganderbal",
      "State": "Jammu & Kashmir",
      "District": "Srinagar"
    },
    {
      "City": "Gandevi",
      "State": "Gujarat",
      "District": "Navsari"
    },
    {
      "City": "Gandhi Nagar(Katpadi Ext.)",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Gandhidham",
      "State": "Gujarat",
      "District": "Kachchh"
    },
    {
      "City": "Gandhigram",
      "State": "Tripura",
      "District": "West Tripura"
    },
    {
      "City": "Gandhinagar",
      "State": "Gujarat",
      "District": "Gandhinagar"
    },
    {
      "City": "Gandhinagar",
      "State": "Maharashtra",
      "District": "Kolhapur"
    },
    {
      "City": "Ganeshpur",
      "State": "Maharashtra",
      "District": "Bhandara"
    },
    {
      "City": "Gangaghat",
      "State": "Uttar Pradesh",
      "District": "Unnao"
    },
    {
      "City": "Gangaikondan",
      "State": "Tamil Nadu",
      "District": "Cuddalore"
    },
    {
      "City": "Gangakhed",
      "State": "Maharashtra",
      "District": "Parbhani"
    },
    {
      "City": "Ganganagar",
      "State": "Rajasthan",
      "District": "Ganganagar"
    },
    {
      "City": "Gangapur",
      "State": "Maharashtra",
      "District": "Aurangabad"
    },
    {
      "City": "Gangapur",
      "State": "Rajasthan",
      "District": "Bhilwara"
    },
    {
      "City": "Gangapur",
      "State": "Uttar Pradesh",
      "District": "Varanasi"
    },
    {
      "City": "Gangapur City",
      "State": "Rajasthan",
      "District": "Sawai Madhopur"
    },
    {
      "City": "Gangarampur",
      "State": "West Bengal",
      "District": "Dakshin Dinajpur"
    },
    {
      "City": "Gangavalli",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Gangawati",
      "State": "Karnataka",
      "District": "Koppal"
    },
    {
      "City": "Gangoh",
      "State": "Uttar Pradesh",
      "District": "Saharanpur"
    },
    {
      "City": "Gangotri",
      "State": "Uttaranchal",
      "District": "Uttarkashi"
    },
    {
      "City": "Gangtok",
      "State": "Sikkim",
      "District": "East"
    },
    {
      "City": "Ganguvarpatti",
      "State": "Tamil Nadu",
      "District": "Theni"
    },
    {
      "City": "Ganj Dundawara",
      "State": "Uttar Pradesh",
      "District": "Etah"
    },
    {
      "City": "Ganj Muradabad",
      "State": "Uttar Pradesh",
      "District": "Unnao"
    },
    {
      "City": "Ganjam",
      "State": "Orissa",
      "District": "Ganjam"
    },
    {
      "City": "Garacharma",
      "State": "Andaman & Nicobar Islands *",
      "District": "Andamans"
    },
    {
      "City": "Garalgachha",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "Garautha",
      "State": "Uttar Pradesh",
      "District": "Jhansi"
    },
    {
      "City": "Gardhiwala",
      "State": "Punjab",
      "District": "Hoshiarpur"
    },
    {
      "City": "Garhakota",
      "State": "Madhya Pradesh",
      "District": "Sagar"
    },
    {
      "City": "Garhi Pukhta",
      "State": "Uttar Pradesh",
      "District": "Muzaffarnagar"
    },
    {
      "City": "Garhi-Malhara",
      "State": "Madhya Pradesh",
      "District": "Chhatarpur"
    },
    {
      "City": "Garhmukteshwar",
      "State": "Uttar Pradesh",
      "District": "Ghaziabad"
    },
    {
      "City": "Garhshanker",
      "State": "Punjab",
      "District": "Hoshiarpur"
    },
    {
      "City": "Garhwa",
      "State": "Jharkhand",
      "District": "Garhwa"
    },
    {
      "City": "Gariadhar",
      "State": "Gujarat",
      "District": "Bhavnagar"
    },
    {
      "City": "Garoth",
      "State": "Madhya Pradesh",
      "District": "Mandsaur"
    },
    {
      "City": "Garshyamnagar",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Garulia",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Gaura Barhaj",
      "State": "Uttar Pradesh",
      "District": "Deoria"
    },
    {
      "City": "Gaurella",
      "State": "Chhattisgarh",
      "District": "Bilaspur"
    },
    {
      "City": "Gauri Bazar",
      "State": "Uttar Pradesh",
      "District": "Deoria"
    },
    {
      "City": "Gauribidanur",
      "State": "Karnataka",
      "District": "Kolar"
    },
    {
      "City": "Gauripur",
      "State": "Assam",
      "District": "Dhubri"
    },
    {
      "City": "Gausganj",
      "State": "Uttar Pradesh",
      "District": "Kanpur Dehat"
    },
    {
      "City": "Gawan",
      "State": "Uttar Pradesh",
      "District": "Budaun"
    },
    {
      "City": "Gaya",
      "State": "Bihar",
      "District": "Gaya"
    },
    {
      "City": "Gayespur",
      "State": "West Bengal",
      "District": "Nadia"
    },
    {
      "City": "Geedam",
      "State": "Chhattisgarh",
      "District": "Dantewada"
    },
    {
      "City": "Georai",
      "State": "Maharashtra",
      "District": "Bid"
    },
    {
      "City": "Ghagga",
      "State": "Punjab",
      "District": "Patiala"
    },
    {
      "City": "Ghanaur",
      "State": "Punjab",
      "District": "Patiala"
    },
    {
      "City": "Ghansor",
      "State": "Madhya Pradesh",
      "District": "Seoni"
    },
    {
      "City": "Ghantapada",
      "State": "Orissa",
      "District": "Anugul"
    },
    {
      "City": "Gharaunda",
      "State": "Haryana",
      "District": "Karnal"
    },
    {
      "City": "Gharghoda",
      "State": "Chhattisgarh",
      "District": "Raigarh"
    },
    {
      "City": "Gharoli",
      "State": "Delhi *",
      "District": "East"
    },
    {
      "City": "Gharonda Neemka Bangar alias Patpar Ganj",
      "State": "Delhi *",
      "District": "East"
    },
    {
      "City": "Ghatal",
      "State": "West Bengal",
      "District": "Medinipur"
    },
    {
      "City": "Ghatampur",
      "State": "Uttar Pradesh",
      "District": "Kanpur Nagar"
    },
    {
      "City": "Ghatanji",
      "State": "Maharashtra",
      "District": "Yavatmal"
    },
    {
      "City": "Ghatkeser",
      "State": "Andhra Pradesh",
      "District": "Rangareddi"
    },
    {
      "City": "Ghatlodiya",
      "State": "Gujarat",
      "District": "Ahmadabad"
    },
    {
      "City": "Ghatshila",
      "State": "Jharkhand",
      "District": "Purbi Singhbhum"
    },
    {
      "City": "Ghaziabad",
      "State": "Uttar Pradesh",
      "District": "Ghaziabad"
    },
    {
      "City": "Ghazipur",
      "State": "Uttar Pradesh",
      "District": "Ghazipur"
    },
    {
      "City": "Gheora",
      "State": "Delhi *",
      "District": "North West"
    },
    {
      "City": "Ghiraur",
      "State": "Uttar Pradesh",
      "District": "Mainpuri"
    },
    {
      "City": "Ghitorni",
      "State": "Delhi *",
      "District": "South West"
    },
    {
      "City": "Gho Manhasan",
      "State": "Jammu & Kashmir",
      "District": "Jammu"
    },
    {
      "City": "Ghoga",
      "State": "Delhi *",
      "District": "North West"
    },
    {
      "City": "Ghogha",
      "State": "Gujarat",
      "District": "Bhavnagar"
    },
    {
      "City": "Ghoghardiha",
      "State": "Bihar",
      "District": "Madhubani"
    },
    {
      "City": "Ghorabandha",
      "State": "Jharkhand",
      "District": "Purbi Singhbhum"
    },
    {
      "City": "Ghorawal",
      "State": "Uttar Pradesh",
      "District": "Sonbhadra"
    },
    {
      "City": "Ghorsala",
      "State": "West Bengal",
      "District": "Murshidabad"
    },
    {
      "City": "Ghosi",
      "State": "Uttar Pradesh",
      "District": "Mau"
    },
    {
      "City": "Ghosia Bazar",
      "State": "Uttar Pradesh",
      "District": "Sant Ravidas Nagar"
    },
    {
      "City": "Ghoti Budruk",
      "State": "Maharashtra",
      "District": "Nashik"
    },
    {
      "City": "Ghughuli",
      "State": "Uttar Pradesh",
      "District": "Maharajganj"
    },
    {
      "City": "Ghugus",
      "State": "Maharashtra",
      "District": "Chandrapur"
    },
    {
      "City": "Ghulewadi",
      "State": "Maharashtra",
      "District": "Ahmadnagar"
    },
    {
      "City": "Ghumarwin",
      "State": "Himachal Pradesh",
      "District": "Bilaspur"
    },
    {
      "City": "Ghuwara",
      "State": "Madhya Pradesh",
      "District": "Chhatarpur"
    },
    {
      "City": "Gidderbaha",
      "State": "Punjab",
      "District": "Muktsar"
    },
    {
      "City": "Gidi",
      "State": "Jharkhand",
      "District": "Hazaribag"
    },
    {
      "City": "Gingee",
      "State": "Tamil Nadu",
      "District": "Viluppuram"
    },
    {
      "City": "Giridih",
      "State": "Jharkhand",
      "District": "Giridih"
    },
    {
      "City": "Goa Velha",
      "State": "Goa",
      "District": "North Goa"
    },
    {
      "City": "Goaljan",
      "State": "West Bengal",
      "District": "Murshidabad"
    },
    {
      "City": "Goalpara",
      "State": "Assam",
      "District": "Goalpara"
    },
    {
      "City": "Goasafat",
      "State": "West Bengal",
      "District": "Medinipur"
    },
    {
      "City": "Gobardanga",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Gobichettipalayam",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Gobindgarh",
      "State": "Punjab",
      "District": "Fatehgarh Sahib"
    },
    {
      "City": "Gobindpur",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Gobranawapara",
      "State": "Chhattisgarh",
      "District": "Raipur"
    },
    {
      "City": "Gochar",
      "State": "Uttaranchal",
      "District": "Chamoli"
    },
    {
      "City": "Godda",
      "State": "Jharkhand",
      "District": "Godda"
    },
    {
      "City": "Godhar",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Godhra",
      "State": "Gujarat",
      "District": "Panch Mahals"
    },
    {
      "City": "Godoli",
      "State": "Maharashtra",
      "District": "Satara"
    },
    {
      "City": "Gogaon",
      "State": "Chhattisgarh",
      "District": "Raipur"
    },
    {
      "City": "Gogapur",
      "State": "Madhya Pradesh",
      "District": "Ujjain"
    },
    {
      "City": "Gogri Jamalpur",
      "State": "Bihar",
      "District": "Khagaria"
    },
    {
      "City": "Gohad",
      "State": "Madhya Pradesh",
      "District": "Bhind"
    },
    {
      "City": "Gohana",
      "State": "Haryana",
      "District": "Sonipat"
    },
    {
      "City": "Gohand",
      "State": "Uttar Pradesh",
      "District": "Hamirpur"
    },
    {
      "City": "Gohpur",
      "State": "Assam",
      "District": "Sonitpur"
    },
    {
      "City": "Gokak",
      "State": "Karnataka",
      "District": "Belgaum"
    },
    {
      "City": "Gokak Falls",
      "State": "Karnataka",
      "District": "Belgaum"
    },
    {
      "City": "Gokal Pur",
      "State": "Delhi *",
      "District": "North East"
    },
    {
      "City": "Gokhivare",
      "State": "Maharashtra",
      "District": "Thane"
    },
    {
      "City": "Gokul",
      "State": "Uttar Pradesh",
      "District": "Mathura"
    },
    {
      "City": "Gola Bazar",
      "State": "Uttar Pradesh",
      "District": "Gorakhpur"
    },
    {
      "City": "Gola Gokarannath",
      "State": "Uttar Pradesh",
      "District": "Kheri"
    },
    {
      "City": "Golaghat",
      "State": "Assam",
      "District": "Golaghat"
    },
    {
      "City": "Golokganj",
      "State": "Assam",
      "District": "Dhubri"
    },
    {
      "City": "Gomoh",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Gonda",
      "State": "Uttar Pradesh",
      "District": "Gonda"
    },
    {
      "City": "Gondal",
      "State": "Gujarat",
      "District": "Rajkot"
    },
    {
      "City": "Gondiya",
      "State": "Maharashtra",
      "District": "Gondiya"
    },
    {
      "City": "Goniana",
      "State": "Punjab",
      "District": "Bathinda"
    },
    {
      "City": "Gonikoppal",
      "State": "Karnataka",
      "District": "Kodagu"
    },
    {
      "City": "Gooty",
      "State": "Andhra Pradesh",
      "District": "Anantapur"
    },
    {
      "City": "Gopalasamudram",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Gopalganj",
      "State": "Bihar",
      "District": "Gopalganj"
    },
    {
      "City": "Gopalpur",
      "State": "West Bengal",
      "District": "Nadia"
    },
    {
      "City": "Gopalpur",
      "State": "Orissa",
      "District": "Ganjam"
    },
    {
      "City": "Gopamau",
      "State": "Uttar Pradesh",
      "District": "Hardoi"
    },
    {
      "City": "Gopiganj",
      "State": "Uttar Pradesh",
      "District": "Sant Ravidas Nagar"
    },
    {
      "City": "Gopinathpur",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Gora Bazar",
      "State": "West Bengal",
      "District": "Murshidabad"
    },
    {
      "City": "Gorah Salathian",
      "State": "Jammu & Kashmir",
      "District": "Jammu"
    },
    {
      "City": "Gorakhpur",
      "State": "Uttar Pradesh",
      "District": "Gorakhpur"
    },
    {
      "City": "Goraya",
      "State": "Punjab",
      "District": "Jalandhar"
    },
    {
      "City": "Goredi Chancha",
      "State": "Rajasthan",
      "District": "Nagaur"
    },
    {
      "City": "Goregaon",
      "State": "Maharashtra",
      "District": "Raigarh"
    },
    {
      "City": "Gormi",
      "State": "Madhya Pradesh",
      "District": "Bhind"
    },
    {
      "City": "Gosainganj",
      "State": "Uttar Pradesh",
      "District": "Lucknow"
    },
    {
      "City": "Gosainganj",
      "State": "Uttar Pradesh",
      "District": "Faizabad"
    },
    {
      "City": "Gossaigaon",
      "State": "Assam",
      "District": "Kokrajhar"
    },
    {
      "City": "Gota",
      "State": "Gujarat",
      "District": "Ahmadabad"
    },
    {
      "City": "Gothra",
      "State": "Rajasthan",
      "District": "Jhunjhunun"
    },
    {
      "City": "Gottikere",
      "State": "Karnataka",
      "District": "Bangalore"
    },
    {
      "City": "Goundampalayam",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Govardhan",
      "State": "Uttar Pradesh",
      "District": "Mathura"
    },
    {
      "City": "Govindgarh",
      "State": "Rajasthan",
      "District": "Alwar"
    },
    {
      "City": "Govindgarh",
      "State": "Madhya Pradesh",
      "District": "Rewa"
    },
    {
      "City": "Greater Mumbai",
      "State": "Maharashtra",
      "District": "Mumbai (Suburban) and Mumbai"
    },
    {
      "City": "GSFC Complex INA",
      "State": "Gujarat",
      "District": "Vadodara"
    },
    {
      "City": "Gua",
      "State": "Jharkhand",
      "District": "Pashchimi Singhbhum"
    },
    {
      "City": "Gubbi",
      "State": "Karnataka",
      "District": "Tumkur"
    },
    {
      "City": "Gudalur",
      "State": "Tamil Nadu",
      "District": "The Nilgiris"
    },
    {
      "City": "Gudalur",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Gudalur",
      "State": "Tamil Nadu",
      "District": "Theni"
    },
    {
      "City": "Gudari",
      "State": "Orissa",
      "District": "Rayagada"
    },
    {
      "City": "Gudibanda",
      "State": "Karnataka",
      "District": "Kolar"
    },
    {
      "City": "Gudivada",
      "State": "Andhra Pradesh",
      "District": "Visakhapatnam"
    },
    {
      "City": "Gudivada",
      "State": "Andhra Pradesh",
      "District": "Krishna"
    },
    {
      "City": "Gudiyatham",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Gudur",
      "State": "Andhra Pradesh",
      "District": "Nellore"
    },
    {
      "City": "Guhagar",
      "State": "Maharashtra",
      "District": "Ratnagiri"
    },
    {
      "City": "Guirim",
      "State": "Goa",
      "District": "North Goa"
    },
    {
      "City": "Gulabpura",
      "State": "Rajasthan",
      "District": "Bhilwara"
    },
    {
      "City": "Gulaothi",
      "State": "Uttar Pradesh",
      "District": "Bulandshahr"
    },
    {
      "City": "Gularia Bhindara",
      "State": "Uttar Pradesh",
      "District": "Pilibhit"
    },
    {
      "City": "Gulariya",
      "State": "Uttar Pradesh",
      "District": "Budaun"
    },
    {
      "City": "Gulbarga",
      "State": "Karnataka",
      "District": "Gulbarga"
    },
    {
      "City": "Guledgudda",
      "State": "Karnataka",
      "District": "Bagalkot"
    },
    {
      "City": "Gulmarg",
      "State": "Jammu & Kashmir",
      "District": "Baramula"
    },
    {
      "City": "Guma",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Gumia",
      "State": "Jharkhand",
      "District": "Bokaro"
    },
    {
      "City": "Gumla",
      "State": "Jharkhand",
      "District": "Lohardaga"
    },
    {
      "City": "Gummidipoondi",
      "State": "Tamil Nadu",
      "District": "Thiruvallur"
    },
    {
      "City": "Guna",
      "State": "Madhya Pradesh",
      "District": "Guna"
    },
    {
      "City": "Gundlupet",
      "State": "Karnataka",
      "District": "Chamarajanagar"
    },
    {
      "City": "Gunnaur",
      "State": "Uttar Pradesh",
      "District": "Budaun"
    },
    {
      "City": "Guntakal",
      "State": "Andhra Pradesh",
      "District": "Anantapur"
    },
    {
      "City": "Guntur",
      "State": "Andhra Pradesh",
      "District": "Guntur"
    },
    {
      "City": "Gunupur",
      "State": "Orissa",
      "District": "Rayagada"
    },
    {
      "City": "Gurdaspur",
      "State": "Punjab",
      "District": "Gurdaspur"
    },
    {
      "City": "Gurgaon",
      "State": "Haryana",
      "District": "Gurgaon"
    },
    {
      "City": "Gurgaon Rural",
      "State": "Haryana",
      "District": "Gurgaon"
    },
    {
      "City": "Gurh",
      "State": "Madhya Pradesh",
      "District": "Rewa"
    },
    {
      "City": "Guriahati",
      "State": "West Bengal",
      "District": "Koch Bihar"
    },
    {
      "City": "Gurmatkal",
      "State": "Karnataka",
      "District": "Gulbarga"
    },
    {
      "City": "Gursahaiganj",
      "State": "Uttar Pradesh",
      "District": "Kannauj"
    },
    {
      "City": "Gursarai",
      "State": "Uttar Pradesh",
      "District": "Jhansi"
    },
    {
      "City": "Guru Har Sahai",
      "State": "Punjab",
      "District": "Firozpur"
    },
    {
      "City": "Guruvayoor",
      "State": "Kerala",
      "District": "Thrissur"
    },
    {
      "City": "Guskara",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Guwahati",
      "State": "Assam",
      "District": "Kamrup"
    },
    {
      "City": "Gwalior",
      "State": "Madhya Pradesh",
      "District": "Gwalior"
    },
    {
      "City": "Gyalshing",
      "State": "Sikkim",
      "District": "West"
    },
    {
      "City": "Gyanpur",
      "State": "Uttar Pradesh",
      "District": "Sant Ravidas Nagar"
    },
    {
      "City": "Habibpur",
      "State": "Bihar",
      "District": "Bhagalpur"
    },
    {
      "City": "Habra",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Hadgaon",
      "State": "Maharashtra",
      "District": "Nanded"
    },
    {
      "City": "Hafizpur",
      "State": "Uttar Pradesh",
      "District": "Azamgarh"
    },
    {
      "City": "Haflong",
      "State": "Assam",
      "District": "North Cachar Hills"
    },
    {
      "City": "Haidergarh",
      "State": "Uttar Pradesh",
      "District": "Barabanki"
    },
    {
      "City": "Hailakandi",
      "State": "Assam",
      "District": "Hailakandi"
    },
    {
      "City": "Haileymandi",
      "State": "Haryana",
      "District": "Gurgaon"
    },
    {
      "City": "Hajan",
      "State": "Jammu & Kashmir",
      "District": "Baramula"
    },
    {
      "City": "Hajipur",
      "State": "Punjab",
      "District": "Hoshiarpur"
    },
    {
      "City": "Hajipur",
      "State": "Bihar",
      "District": "Vaishali"
    },
    {
      "City": "Hajira INA",
      "State": "Gujarat",
      "District": "Surat"
    },
    {
      "City": "Haldaur",
      "State": "Uttar Pradesh",
      "District": "Bijnor"
    },
    {
      "City": "Haldia",
      "State": "West Bengal",
      "District": "Medinipur"
    },
    {
      "City": "Haldibari",
      "State": "West Bengal",
      "District": "Koch Bihar"
    },
    {
      "City": "Haldwani-cum-Kathgodam",
      "State": "Uttaranchal",
      "District": "Nainital"
    },
    {
      "City": "Halisahar",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Haliyal",
      "State": "Karnataka",
      "District": "Uttara Kannada"
    },
    {
      "City": "Halol",
      "State": "Gujarat",
      "District": "Panch Mahals"
    },
    {
      "City": "Haludbani",
      "State": "Jharkhand",
      "District": "Purbi Singhbhum"
    },
    {
      "City": "Halvad",
      "State": "Gujarat",
      "District": "Surendranagar"
    },
    {
      "City": "Hamirpur",
      "State": "Himachal Pradesh",
      "District": "Hamirpur"
    },
    {
      "City": "Hamirpur",
      "State": "Uttar Pradesh",
      "District": "Hamirpur"
    },
    {
      "City": "Hamren",
      "State": "Assam",
      "District": "Karbi Anglong"
    },
    {
      "City": "Handia",
      "State": "Uttar Pradesh",
      "District": "Allahabad"
    },
    {
      "City": "Handiaya",
      "State": "Punjab",
      "District": "Sangrur"
    },
    {
      "City": "Handwara",
      "State": "Jammu & Kashmir",
      "District": "Kupwara"
    },
    {
      "City": "Hangal",
      "State": "Karnataka",
      "District": "Haveri"
    },
    {
      "City": "Hansi",
      "State": "Haryana",
      "District": "Hisar"
    },
    {
      "City": "Hanumana",
      "State": "Madhya Pradesh",
      "District": "Rewa"
    },
    {
      "City": "Hanumangarh",
      "State": "Rajasthan",
      "District": "Hanumangarh"
    },
    {
      "City": "Hanumanthampatti",
      "State": "Tamil Nadu",
      "District": "Theni"
    },
    {
      "City": "Haora",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Hapur",
      "State": "Uttar Pradesh",
      "District": "Ghaziabad"
    },
    {
      "City": "Harda",
      "State": "Madhya Pradesh",
      "District": "Harda"
    },
    {
      "City": "Hardoi",
      "State": "Uttar Pradesh",
      "District": "Hardoi"
    },
    {
      "City": "Harduaganj",
      "State": "Uttar Pradesh",
      "District": "Aligarh"
    },
    {
      "City": "Hardwar",
      "State": "Uttaranchal",
      "District": "Hardwar"
    },
    {
      "City": "Hargaon",
      "State": "Uttar Pradesh",
      "District": "Sitapur"
    },
    {
      "City": "Harharia Chak",
      "State": "West Bengal",
      "District": "Murshidabad"
    },
    {
      "City": "Hariana",
      "State": "Punjab",
      "District": "Hoshiarpur"
    },
    {
      "City": "Harihar",
      "State": "Karnataka",
      "District": "Davanagere"
    },
    {
      "City": "Hariharpur",
      "State": "Uttar Pradesh",
      "District": "Sant Kabir Nagar"
    },
    {
      "City": "Harij",
      "State": "Gujarat",
      "District": "Patan"
    },
    {
      "City": "Haripur",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Harishpur",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Harpalpur",
      "State": "Madhya Pradesh",
      "District": "Chhatarpur"
    },
    {
      "City": "Harpanahalli",
      "State": "Karnataka",
      "District": "Davanagere"
    },
    {
      "City": "Harrai",
      "State": "Madhya Pradesh",
      "District": "Chhindwara"
    },
    {
      "City": "Harraiya",
      "State": "Uttar Pradesh",
      "District": "Basti"
    },
    {
      "City": "Harsud",
      "State": "Madhya Pradesh",
      "District": "East Nimar"
    },
    {
      "City": "Harur",
      "State": "Tamil Nadu",
      "District": "Dharmapuri"
    },
    {
      "City": "Harveypatti",
      "State": "Tamil Nadu",
      "District": "Madurai"
    },
    {
      "City": "Hasanpur",
      "State": "Uttar Pradesh",
      "District": "Jyotiba Phule Nagar"
    },
    {
      "City": "Hasayan",
      "State": "Uttar Pradesh",
      "District": "Hathras"
    },
    {
      "City": "Hassan",
      "State": "Karnataka",
      "District": "Hassan"
    },
    {
      "City": "Hassanpur",
      "State": "Haryana",
      "District": "Faridabad"
    },
    {
      "City": "Hastinapur",
      "State": "Uttar Pradesh",
      "District": "Meerut"
    },
    {
      "City": "Hastsal",
      "State": "Delhi *",
      "District": "West"
    },
    {
      "City": "Hata",
      "State": "Uttar Pradesh",
      "District": "Kushinagar"
    },
    {
      "City": "Hatgachha",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Hathin",
      "State": "Haryana",
      "District": "Faridabad"
    },
    {
      "City": "Hathras",
      "State": "Uttar Pradesh",
      "District": "Hathras"
    },
    {
      "City": "Hatibandha",
      "State": "Orissa",
      "District": "Sundargarh"
    },
    {
      "City": "Hatkachora",
      "State": "Chhattisgarh",
      "District": "Bastar"
    },
    {
      "City": "Hatod",
      "State": "Madhya Pradesh",
      "District": "Indore"
    },
    {
      "City": "Hatpipalya",
      "State": "Madhya Pradesh",
      "District": "Dewas"
    },
    {
      "City": "Hatsimla",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Hatta",
      "State": "Madhya Pradesh",
      "District": "Damoh"
    },
    {
      "City": "Hatti",
      "State": "Karnataka",
      "District": "Raichur"
    },
    {
      "City": "Hatti Gold Mines",
      "State": "Karnataka",
      "District": "Raichur"
    },
    {
      "City": "Haveri",
      "State": "Karnataka",
      "District": "Haveri"
    },
    {
      "City": "Hazaribag",
      "State": "Jharkhand",
      "District": "Hazaribag"
    },
    {
      "City": "Hebbagodi",
      "State": "Karnataka",
      "District": "Bangalore"
    },
    {
      "City": "Hebbalu",
      "State": "Karnataka",
      "District": "Mysore"
    },
    {
      "City": "Heggadadevanakote",
      "State": "Karnataka",
      "District": "Mysore"
    },
    {
      "City": "Herbertpur",
      "State": "Uttaranchal",
      "District": "Dehradun"
    },
    {
      "City": "Heriok",
      "State": "Manipur",
      "District": "Thoubal"
    },
    {
      "City": "Herohalli",
      "State": "Karnataka",
      "District": "Bangalore"
    },
    {
      "City": "Hesla",
      "State": "Jharkhand",
      "District": "Hazaribag"
    },
    {
      "City": "Highways",
      "State": "Tamil Nadu",
      "District": "Theni"
    },
    {
      "City": "Hijuli",
      "State": "West Bengal",
      "District": "Puruliya"
    },
    {
      "City": "Hilsa",
      "State": "Bihar",
      "District": "Nalanda"
    },
    {
      "City": "Himatnagar",
      "State": "Gujarat",
      "District": "Sabar Kantha"
    },
    {
      "City": "Hindalgi",
      "State": "Karnataka",
      "District": "Belgaum"
    },
    {
      "City": "Hindaun",
      "State": "Rajasthan",
      "District": "Karauli"
    },
    {
      "City": "Hindoria",
      "State": "Madhya Pradesh",
      "District": "Damoh"
    },
    {
      "City": "Hindupur",
      "State": "Andhra Pradesh",
      "District": "Anantapur"
    },
    {
      "City": "Hindustan Paper Corporation Ltd. Township Area Panchgram",
      "State": "Assam",
      "District": "Hailakandi"
    },
    {
      "City": "Hindusthan Cables Town",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Hinganghat",
      "State": "Maharashtra",
      "District": "Wardha"
    },
    {
      "City": "Hingoli",
      "State": "Maharashtra",
      "District": "Hingoli"
    },
    {
      "City": "Hinjilicut",
      "State": "Orissa",
      "District": "Ganjam"
    },
    {
      "City": "Hirakud",
      "State": "Orissa",
      "District": "Sambalpur"
    },
    {
      "City": "Hiranagar",
      "State": "Jammu & Kashmir",
      "District": "Kathua"
    },
    {
      "City": "Hirapur",
      "State": "Madhya Pradesh",
      "District": "Balaghat"
    },
    {
      "City": "Hirekerur",
      "State": "Karnataka",
      "District": "Haveri"
    },
    {
      "City": "Hiriyur",
      "State": "Karnataka",
      "District": "Chitradurga"
    },
    {
      "City": "Hisar",
      "State": "Haryana",
      "District": "Hisar"
    },
    {
      "City": "Hisua",
      "State": "Bihar",
      "District": "Nawada"
    },
    {
      "City": "Hnahthial",
      "State": "Mizoram",
      "District": "Lunglei"
    },
    {
      "City": "Hodal",
      "State": "Haryana",
      "District": "Faridabad"
    },
    {
      "City": "Hojai",
      "State": "Assam",
      "District": "Nagaon"
    },
    {
      "City": "Holalkere",
      "State": "Karnataka",
      "District": "Chitradurga"
    },
    {
      "City": "Holenarsipur",
      "State": "Karnataka",
      "District": "Hassan"
    },
    {
      "City": "Homnabad",
      "State": "Karnataka",
      "District": "Bidar"
    },
    {
      "City": "Honavar",
      "State": "Karnataka",
      "District": "Uttara Kannada"
    },
    {
      "City": "Honnali",
      "State": "Karnataka",
      "District": "Davanagere"
    },
    {
      "City": "Hoovina Hadagalli",
      "State": "Karnataka",
      "District": "Bellary"
    },
    {
      "City": "Hosabettu",
      "State": "Kerala",
      "District": "Kasaragod"
    },
    {
      "City": "Hosanagara",
      "State": "Karnataka",
      "District": "Shimoga"
    },
    {
      "City": "Hosdurga",
      "State": "Karnataka",
      "District": "Chitradurga"
    },
    {
      "City": "Hoshangabad",
      "State": "Madhya Pradesh",
      "District": "Hoshangabad"
    },
    {
      "City": "Hoshiarpur",
      "State": "Punjab",
      "District": "Hoshiarpur"
    },
    {
      "City": "Hoskote",
      "State": "Karnataka",
      "District": "Bangalore Rural"
    },
    {
      "City": "Hospet",
      "State": "Karnataka",
      "District": "Bellary"
    },
    {
      "City": "Hosur",
      "State": "Tamil Nadu",
      "District": "Dharmapuri"
    },
    {
      "City": "Howli",
      "State": "Assam",
      "District": "Barpeta"
    },
    {
      "City": "Howraghat",
      "State": "Assam",
      "District": "Karbi Anglong"
    },
    {
      "City": "Hubbathala",
      "State": "Tamil Nadu",
      "District": "The Nilgiris"
    },
    {
      "City": "Hubli-Dharwad",
      "State": "Karnataka",
      "District": "Dharwad"
    },
    {
      "City": "Hugli-Chinsurah",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "Hukeri",
      "State": "Karnataka",
      "District": "Belgaum"
    },
    {
      "City": "Huligal",
      "State": "Tamil Nadu",
      "District": "The Nilgiris"
    },
    {
      "City": "Hunasamaranahalli",
      "State": "Karnataka",
      "District": "Bangalore"
    },
    {
      "City": "Hungund",
      "State": "Karnataka",
      "District": "Bagalkot"
    },
    {
      "City": "Hunsur",
      "State": "Karnataka",
      "District": "Mysore"
    },
    {
      "City": "Hupari",
      "State": "Maharashtra",
      "District": "Kolhapur"
    },
    {
      "City": "Hussainabad",
      "State": "Jharkhand",
      "District": "Palamu"
    },
    {
      "City": "Hussainpur",
      "State": "Punjab",
      "District": "Kapurthala"
    },
    {
      "City": "Hyderabad",
      "State": "Uttar Pradesh",
      "District": "Unnao"
    },
    {
      "City": "Hyderabad M.Corp",
      "State": "Andhra Pradesh",
      "District": "Hyderabad and Rangareddi"
    },
    {
      "City": "Ibrahimpur",
      "State": "Uttar Pradesh",
      "District": "Azamgarh"
    },
    {
      "City": "Ichalkaranji",
      "State": "Maharashtra",
      "District": "Kolhapur"
    },
    {
      "City": "Ichchapuram",
      "State": "Andhra Pradesh",
      "District": "Srikakulam"
    },
    {
      "City": "Ichchhapor",
      "State": "Gujarat",
      "District": "Surat"
    },
    {
      "City": "Ichhapur Defence Estate",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Ichhawar",
      "State": "Madhya Pradesh",
      "District": "Sehore"
    },
    {
      "City": "Idar",
      "State": "Gujarat",
      "District": "Sabar Kantha"
    },
    {
      "City": "Idikarai",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Idukki Township",
      "State": "Kerala",
      "District": "Idukki"
    },
    {
      "City": "Igatpuri",
      "State": "Maharashtra",
      "District": "Nashik"
    },
    {
      "City": "Iglas",
      "State": "Uttar Pradesh",
      "District": "Aligarh"
    },
    {
      "City": "Ikauna",
      "State": "Uttar Pradesh",
      "District": "Shrawasti"
    },
    {
      "City": "Iklehra",
      "State": "Madhya Pradesh",
      "District": "Chhindwara"
    },
    {
      "City": "Ilampillai",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Ilanji",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Ilkal",
      "State": "Karnataka",
      "District": "Bagalkot"
    },
    {
      "City": "Iltifatganj Bazar",
      "State": "Uttar Pradesh",
      "District": "Ambedaker Nagar"
    },
    {
      "City": "Iluppaiyurani",
      "State": "Tamil Nadu",
      "District": "Toothukudi"
    },
    {
      "City": "Iluppur",
      "State": "Tamil Nadu",
      "District": "Pudukkottai"
    },
    {
      "City": "Imphal",
      "State": "Manipur",
      "District": "Imphal West & Imphal East"
    },
    {
      "City": "Inam Karur",
      "State": "Tamil Nadu",
      "District": "Kapur"
    },
    {
      "City": "Indapur",
      "State": "Maharashtra",
      "District": "Pune"
    },
    {
      "City": "Indergarh",
      "State": "Madhya Pradesh",
      "District": "Datia"
    },
    {
      "City": "Indi",
      "State": "Karnataka",
      "District": "Bijapur"
    },
    {
      "City": "Indian Telephone Industry, Mankapur (Sp. Village)",
      "State": "Uttar Pradesh",
      "District": "Gonda"
    },
    {
      "City": "Indore",
      "State": "Madhya Pradesh",
      "District": "Indore"
    },
    {
      "City": "Indragarh",
      "State": "Rajasthan",
      "District": "Bundi"
    },
    {
      "City": "Indranagar",
      "State": "Tripura",
      "District": "West Tripura"
    },
    {
      "City": "Indri",
      "State": "Haryana",
      "District": "Karnal"
    },
    {
      "City": "Injambakkam",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Iringaprom",
      "State": "Kerala",
      "District": "Thrissur"
    },
    {
      "City": "Irinjalakuda",
      "State": "Kerala",
      "District": "Thrissur"
    },
    {
      "City": "Iriveri",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Irugur",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Isagarh",
      "State": "Madhya Pradesh",
      "District": "Guna"
    },
    {
      "City": "Islamnagar",
      "State": "Uttar Pradesh",
      "District": "Budaun"
    },
    {
      "City": "Islampur",
      "State": "West Bengal",
      "District": "Uttar Dinajpur"
    },
    {
      "City": "Islampur",
      "State": "Bihar",
      "District": "Nalanda"
    },
    {
      "City": "Isnapur",
      "State": "Andhra Pradesh",
      "District": "Medak"
    },
    {
      "City": "Isri",
      "State": "Jharkhand",
      "District": "Giridih"
    },
    {
      "City": "Itanagar",
      "State": "Arunachal Pradesh",
      "District": "Papum Pare"
    },
    {
      "City": "Itarsi",
      "State": "Madhya Pradesh",
      "District": "Hoshangabad"
    },
    {
      "City": "Itaunja",
      "State": "Uttar Pradesh",
      "District": "Lucknow"
    },
    {
      "City": "Jabalpur",
      "State": "Madhya Pradesh",
      "District": "Jabalpur"
    },
    {
      "City": "Jabalpur Cantt.",
      "State": "Madhya Pradesh",
      "District": "Jabalpur"
    },
    {
      "City": "Jadugora",
      "State": "Jharkhand",
      "District": "Purbi Singhbhum"
    },
    {
      "City": "Jafarabad",
      "State": "Uttar Pradesh",
      "District": "Jaunpur"
    },
    {
      "City": "Jafarpur",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Jaffrabad",
      "State": "Delhi *",
      "District": "North East"
    },
    {
      "City": "Jaffrabad",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Jafrabad",
      "State": "Gujarat",
      "District": "Amreli"
    },
    {
      "City": "Jagadanandapur",
      "State": "West Bengal",
      "District": "Nadia"
    },
    {
      "City": "Jagadhri",
      "State": "Haryana",
      "District": "Yamunanagar"
    },
    {
      "City": "Jagadishpur",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Jagalur",
      "State": "Karnataka",
      "District": "Davanagere"
    },
    {
      "City": "Jagathala",
      "State": "Tamil Nadu",
      "District": "The Nilgiris"
    },
    {
      "City": "Jagatsinghapur",
      "State": "Orissa",
      "District": "Jagatsinghapur"
    },
    {
      "City": "Jagdalpur",
      "State": "Chhattisgarh",
      "District": "Bastar"
    },
    {
      "City": "Jagdishpur",
      "State": "Bihar",
      "District": "Bhojpur"
    },
    {
      "City": "Jaggayyapet",
      "State": "Andhra Pradesh",
      "District": "Krishna"
    },
    {
      "City": "Jagiroad",
      "State": "Assam",
      "District": "Marigaon"
    },
    {
      "City": "Jagner",
      "State": "Uttar Pradesh",
      "District": "Agra"
    },
    {
      "City": "Jagraon",
      "State": "Punjab",
      "District": "Ludhiana"
    },
    {
      "City": "Jagtaj",
      "State": "West Bengal",
      "District": "Murshidabad"
    },
    {
      "City": "Jagtial",
      "State": "Andhra Pradesh",
      "District": "Karimnagar"
    },
    {
      "City": "Jahanabad",
      "State": "Uttar Pradesh",
      "District": "Pilibhit"
    },
    {
      "City": "Jahangirabad",
      "State": "Uttar Pradesh",
      "District": "Bulandshahr"
    },
    {
      "City": "Jahangirpur",
      "State": "Uttar Pradesh",
      "District": "Gautam Buddha Nagar"
    },
    {
      "City": "Jahazpur",
      "State": "Rajasthan",
      "District": "Bhilwara"
    },
    {
      "City": "Jainagar",
      "State": "Bihar",
      "District": "Madhubani"
    },
    {
      "City": "Jaipur",
      "State": "Rajasthan",
      "District": "Jaipur"
    },
    {
      "City": "Jairampur",
      "State": "Arunachal Pradesh",
      "District": "Changlang"
    },
    {
      "City": "Jais",
      "State": "Uttar Pradesh",
      "District": "Rae Bareli"
    },
    {
      "City": "Jaisalmer",
      "State": "Rajasthan",
      "District": "Jaisalmer"
    },
    {
      "City": "Jaisinghnagar",
      "State": "Madhya Pradesh",
      "District": "Shahdol"
    },
    {
      "City": "Jaitaran",
      "State": "Rajasthan",
      "District": "Pali"
    },
    {
      "City": "Jaithara",
      "State": "Uttar Pradesh",
      "District": "Etah"
    },
    {
      "City": "Jaithari",
      "State": "Madhya Pradesh",
      "District": "Shahdol"
    },
    {
      "City": "Jaitu",
      "State": "Punjab",
      "District": "Faridkot"
    },
    {
      "City": "Jaitwara",
      "State": "Madhya Pradesh",
      "District": "Satna"
    },
    {
      "City": "Jajapur",
      "State": "Orissa",
      "District": "Jajapur"
    },
    {
      "City": "Jakhal Mandi",
      "State": "Haryana",
      "District": "Fatehabad"
    },
    {
      "City": "Jala Kendua",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Jalakandapuram",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Jalalabad",
      "State": "Uttar Pradesh",
      "District": "Muzaffarnagar"
    },
    {
      "City": "Jalalabad",
      "State": "Uttar Pradesh",
      "District": "Bijnor"
    },
    {
      "City": "Jalalabad",
      "State": "Punjab",
      "District": "Firozpur"
    },
    {
      "City": "Jalalabad",
      "State": "Uttar Pradesh",
      "District": "Shahjahanpur"
    },
    {
      "City": "Jalali",
      "State": "Uttar Pradesh",
      "District": "Aligarh"
    },
    {
      "City": "Jalalpore",
      "State": "Gujarat",
      "District": "Navsari"
    },
    {
      "City": "Jalalpur",
      "State": "Uttar Pradesh",
      "District": "Ambedaker Nagar"
    },
    {
      "City": "Jalandhar",
      "State": "Punjab",
      "District": "Jalandhar"
    },
    {
      "City": "Jalandhar Cantt.",
      "State": "Punjab",
      "District": "Jalandhar"
    },
    {
      "City": "Jalaun",
      "State": "Uttar Pradesh",
      "District": "Jalaun"
    },
    {
      "City": "Jalda",
      "State": "Orissa",
      "District": "Sundargarh"
    },
    {
      "City": "Jalesar",
      "State": "Uttar Pradesh",
      "District": "Etah"
    },
    {
      "City": "Jaleswar",
      "State": "Orissa",
      "District": "Baleshwar"
    },
    {
      "City": "Jalgaon",
      "State": "Maharashtra",
      "District": "Jalgaon"
    },
    {
      "City": "Jalgaon",
      "State": "Maharashtra",
      "District": "Ratnagiri"
    },
    {
      "City": "Jalgaon (Jamod)",
      "State": "Maharashtra",
      "District": "Buldana"
    },
    {
      "City": "Jalladiampet",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Jallaram Kamanpur",
      "State": "Andhra Pradesh",
      "District": "Karimnagar"
    },
    {
      "City": "Jalna",
      "State": "Maharashtra",
      "District": "Jalna"
    },
    {
      "City": "Jalor",
      "State": "Rajasthan",
      "District": "Jalor"
    },
    {
      "City": "Jalpaiguri",
      "State": "West Bengal",
      "District": "Jalpaiguri"
    },
    {
      "City": "Jam Jodhpur",
      "State": "Gujarat",
      "District": "Jamnagar"
    },
    {
      "City": "Jamadoba",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Jamai",
      "State": "Madhya Pradesh",
      "District": "Chhindwara"
    },
    {
      "City": "Jamalpur",
      "State": "Bihar",
      "District": "Munger"
    },
    {
      "City": "Jambai",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Jambusar",
      "State": "Gujarat",
      "District": "Bharuch"
    },
    {
      "City": "Jamhaur",
      "State": "Bihar",
      "District": "Aurangabad"
    },
    {
      "City": "Jamkhandi",
      "State": "Karnataka",
      "District": "Bagalkot"
    },
    {
      "City": "Jamkhed",
      "State": "Maharashtra",
      "District": "Ahmadnagar"
    },
    {
      "City": "Jammalamadugu",
      "State": "Andhra Pradesh",
      "District": "Cuddapah"
    },
    {
      "City": "Jammu",
      "State": "Jammu & Kashmir",
      "District": "Jammu"
    },
    {
      "City": "Jammu Cantonment",
      "State": "Jammu & Kashmir",
      "District": "Jammu"
    },
    {
      "City": "Jamnagar",
      "State": "Gujarat",
      "District": "Jamnagar"
    },
    {
      "City": "Jamshedpur",
      "State": "Jharkhand",
      "District": "Purbi Singhbhum"
    },
    {
      "City": "Jamshila",
      "State": "Uttar Pradesh",
      "District": "Sonbhadra"
    },
    {
      "City": "Jamtara",
      "State": "Jharkhand",
      "District": "Dumka"
    },
    {
      "City": "Jamui",
      "State": "Bihar",
      "District": "Jamui"
    },
    {
      "City": "Jamul",
      "State": "Chhattisgarh",
      "District": "Durg"
    },
    {
      "City": "Jamuria",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Janakpur Road",
      "State": "Bihar",
      "District": "Sitamarhi"
    },
    {
      "City": "Jandiala",
      "State": "Punjab",
      "District": "Amritsar"
    },
    {
      "City": "Jandiala",
      "State": "Punjab",
      "District": "Jalandhar"
    },
    {
      "City": "Jangaon",
      "State": "Andhra Pradesh",
      "District": "Warangal"
    },
    {
      "City": "Jangipur",
      "State": "West Bengal",
      "District": "Murshidabad"
    },
    {
      "City": "Jangipur",
      "State": "Uttar Pradesh",
      "District": "Ghazipur"
    },
    {
      "City": "Jansath",
      "State": "Uttar Pradesh",
      "District": "Muzaffarnagar"
    },
    {
      "City": "Jaora",
      "State": "Madhya Pradesh",
      "District": "Ratlam"
    },
    {
      "City": "Jaridih Bazar",
      "State": "Jharkhand",
      "District": "Bokaro"
    },
    {
      "City": "Jarjapupeta",
      "State": "Andhra Pradesh",
      "District": "Vizianagaram"
    },
    {
      "City": "Jarwal",
      "State": "Uttar Pradesh",
      "District": "Bahraich"
    },
    {
      "City": "Jasdan",
      "State": "Gujarat",
      "District": "Rajkot"
    },
    {
      "City": "Jashpur nagar",
      "State": "Chhattisgarh",
      "District": "Jashpur"
    },
    {
      "City": "Jasidih",
      "State": "Jharkhand",
      "District": "Deoghar"
    },
    {
      "City": "Jaspur",
      "State": "Uttaranchal",
      "District": "Udham Singh Nagar"
    },
    {
      "City": "Jasrana",
      "State": "Uttar Pradesh",
      "District": "Firozabad"
    },
    {
      "City": "Jaswantnagar",
      "State": "Uttar Pradesh",
      "District": "Etawah"
    },
    {
      "City": "Jata Chhapar",
      "State": "Madhya Pradesh",
      "District": "Chhindwara"
    },
    {
      "City": "Jatani",
      "State": "Orissa",
      "District": "Khordha"
    },
    {
      "City": "Jatara",
      "State": "Madhya Pradesh",
      "District": "Tikamgarh"
    },
    {
      "City": "Jatari",
      "State": "Uttar Pradesh",
      "District": "Aligarh"
    },
    {
      "City": "Jaunpur",
      "State": "Uttar Pradesh",
      "District": "Jaunpur"
    },
    {
      "City": "Jawad",
      "State": "Madhya Pradesh",
      "District": "Neemuch"
    },
    {
      "City": "Jawaharnagar (Gujarat Refinery)",
      "State": "Gujarat",
      "District": "Vadodara"
    },
    {
      "City": "Jawai",
      "State": "Meghalaya",
      "District": "Jaintia Hills"
    },
    {
      "City": "Jawalamukhi",
      "State": "Himachal Pradesh",
      "District": "Kangra"
    },
    {
      "City": "Jawar",
      "State": "Madhya Pradesh",
      "District": "Sehore"
    },
    {
      "City": "Jawhar",
      "State": "Maharashtra",
      "District": "Thane"
    },
    {
      "City": "Jayankondam",
      "State": "Tamil Nadu",
      "District": "Ariyalur"
    },
    {
      "City": "Jaygaon",
      "State": "West Bengal",
      "District": "Jalpaiguri"
    },
    {
      "City": "Jaynagar Mazilpur",
      "State": "West Bengal",
      "District": "South Twentyfour Parganas"
    },
    {
      "City": "Jaysingpur",
      "State": "Maharashtra",
      "District": "Kolhapur"
    },
    {
      "City": "Jehanabad",
      "State": "Bihar",
      "District": "Jehanabad"
    },
    {
      "City": "Jejuri",
      "State": "Maharashtra",
      "District": "Pune"
    },
    {
      "City": "Jemari",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Jemari (J.K. Nagar Township)",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Jena",
      "State": "Jharkhand",
      "District": "Bokaro"
    },
    {
      "City": "Jeron Khalsa",
      "State": "Madhya Pradesh",
      "District": "Tikamgarh"
    },
    {
      "City": "Jetia",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Jetpur Navagadh",
      "State": "Gujarat",
      "District": "Rajkot"
    },
    {
      "City": "Jevargi",
      "State": "Karnataka",
      "District": "Gulbarga"
    },
    {
      "City": "Jewar",
      "State": "Uttar Pradesh",
      "District": "Gautam Buddha Nagar"
    },
    {
      "City": "Jeypur",
      "State": "Orissa",
      "District": "Koraput"
    },
    {
      "City": "Jhabrera",
      "State": "Uttaranchal",
      "District": "Hardwar"
    },
    {
      "City": "Jhabua",
      "State": "Madhya Pradesh",
      "District": "Jhabua"
    },
    {
      "City": "Jhagrakhand",
      "State": "Chhattisgarh",
      "District": "Koriya"
    },
    {
      "City": "Jhajha",
      "State": "Bihar",
      "District": "Jamui"
    },
    {
      "City": "Jhajjar",
      "State": "Haryana",
      "District": "Jhajjar"
    },
    {
      "City": "Jhalawar",
      "State": "Rajasthan",
      "District": "Jhalawar"
    },
    {
      "City": "Jhalda",
      "State": "West Bengal",
      "District": "Puruliya"
    },
    {
      "City": "Jhalrapatan",
      "State": "Rajasthan",
      "District": "Jhalawar"
    },
    {
      "City": "Jhalu",
      "State": "Uttar Pradesh",
      "District": "Bijnor"
    },
    {
      "City": "Jhanjharpur",
      "State": "Bihar",
      "District": "Madhubani"
    },
    {
      "City": "Jhansi",
      "State": "Uttar Pradesh",
      "District": "Jhansi"
    },
    {
      "City": "Jhansi",
      "State": "Uttar Pradesh",
      "District": "Jhansi"
    },
    {
      "City": "Jhansi Rly. Settlement",
      "State": "Uttar Pradesh",
      "District": "Jhansi"
    },
    {
      "City": "Jhargram",
      "State": "West Bengal",
      "District": "Medinipur"
    },
    {
      "City": "Jharia",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Jharia Khas",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Jharoda Majra Burari",
      "State": "Delhi *",
      "District": "North"
    },
    {
      "City": "Jharsuguda",
      "State": "Orissa",
      "District": "Jharsuguda"
    },
    {
      "City": "Jhinjhak",
      "State": "Uttar Pradesh",
      "District": "Kanpur Dehat"
    },
    {
      "City": "Jhinjhana",
      "State": "Uttar Pradesh",
      "District": "Muzaffarnagar"
    },
    {
      "City": "Jhinkpani",
      "State": "Jharkhand",
      "District": "Pashchimi Singhbhum"
    },
    {
      "City": "Jhorhat",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Jhumpura",
      "State": "Orissa",
      "District": "Kendujhar"
    },
    {
      "City": "Jhumri Tilaiya",
      "State": "Jharkhand",
      "District": "Kodarma"
    },
    {
      "City": "Jhundpura",
      "State": "Madhya Pradesh",
      "District": "Morena"
    },
    {
      "City": "Jhunjhunun",
      "State": "Rajasthan",
      "District": "Jhunjhunun"
    },
    {
      "City": "Jhusi",
      "State": "Uttar Pradesh",
      "District": "Allahabad"
    },
    {
      "City": "Jhusi Kohna",
      "State": "Uttar Pradesh",
      "District": "Allahabad"
    },
    {
      "City": "Jiaganj Azimganj",
      "State": "West Bengal",
      "District": "Murshidabad"
    },
    {
      "City": "Jind",
      "State": "Haryana",
      "District": "Jind"
    },
    {
      "City": "Jintur",
      "State": "Maharashtra",
      "District": "Parbhani"
    },
    {
      "City": "Jiran",
      "State": "Madhya Pradesh",
      "District": "Neemuch"
    },
    {
      "City": "Jirapur",
      "State": "Madhya Pradesh",
      "District": "Rajgarh"
    },
    {
      "City": "Jiribam",
      "State": "Manipur",
      "District": "Imphal East"
    },
    {
      "City": "Jiwan Pur alias Johri Pur",
      "State": "Delhi *",
      "District": "North East"
    },
    {
      "City": "Jiyanpur",
      "State": "Uttar Pradesh",
      "District": "Azamgarh"
    },
    {
      "City": "Jobat",
      "State": "Madhya Pradesh",
      "District": "Jhabua"
    },
    {
      "City": "Jobner",
      "State": "Rajasthan",
      "District": "Jaipur"
    },
    {
      "City": "Joda",
      "State": "Orissa",
      "District": "Kendujhar"
    },
    {
      "City": "Jodhpur",
      "State": "Gujarat",
      "District": "Ahmadabad"
    },
    {
      "City": "Jodhpur",
      "State": "Rajasthan",
      "District": "Jodhpur"
    },
    {
      "City": "Jog Falls",
      "State": "Karnataka",
      "District": "Shimoga"
    },
    {
      "City": "Jogbani",
      "State": "Bihar",
      "District": "Araria"
    },
    {
      "City": "Jogendranagar",
      "State": "Tripura",
      "District": "West Tripura"
    },
    {
      "City": "Jogindarnagar",
      "State": "Himachal Pradesh",
      "District": "Mandi"
    },
    {
      "City": "Jolarpet",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Jona Pur",
      "State": "Delhi *",
      "District": "South"
    },
    {
      "City": "Jonai Bazar",
      "State": "Assam",
      "District": "Dhemaji"
    },
    {
      "City": "Jorapokhar",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Jorethang",
      "State": "Sikkim",
      "District": "South"
    },
    {
      "City": "Jorhat",
      "State": "Assam",
      "District": "Jorhat"
    },
    {
      "City": "Joshimath",
      "State": "Uttaranchal",
      "District": "Chamoli"
    },
    {
      "City": "Joshipura",
      "State": "Gujarat",
      "District": "Junagadh"
    },
    {
      "City": "Jot Kamal",
      "State": "West Bengal",
      "District": "Murshidabad"
    },
    {
      "City": "Joura",
      "State": "Madhya Pradesh",
      "District": "Morena"
    },
    {
      "City": "Jourian",
      "State": "Jammu & Kashmir",
      "District": "Jammu"
    },
    {
      "City": "Joya",
      "State": "Uttar Pradesh",
      "District": "Jyotiba Phule Nagar"
    },
    {
      "City": "Jubbal",
      "State": "Himachal Pradesh",
      "District": "Shimla"
    },
    {
      "City": "Jugial",
      "State": "Punjab",
      "District": "Gurdaspur"
    },
    {
      "City": "Jugsalai",
      "State": "Jharkhand",
      "District": "Purbi Singhbhum"
    },
    {
      "City": "Julana",
      "State": "Haryana",
      "District": "Jind"
    },
    {
      "City": "Junagadh",
      "State": "Gujarat",
      "District": "Junagadh"
    },
    {
      "City": "Junagarh",
      "State": "Orissa",
      "District": "Kalahandi"
    },
    {
      "City": "Junnar",
      "State": "Maharashtra",
      "District": "Pune"
    },
    {
      "City": "Jutogh",
      "State": "Himachal Pradesh",
      "District": "Shimla"
    },
    {
      "City": "Jyoti Khuria",
      "State": "Uttar Pradesh",
      "District": "Mainpuri"
    },
    {
      "City": "Kabnur",
      "State": "Maharashtra",
      "District": "Kolhapur"
    },
    {
      "City": "Kabrai",
      "State": "Uttar Pradesh",
      "District": "Mahoba"
    },
    {
      "City": "Kachhauna Patseni",
      "State": "Uttar Pradesh",
      "District": "Hardoi"
    },
    {
      "City": "Kachhla",
      "State": "Uttar Pradesh",
      "District": "Budaun"
    },
    {
      "City": "Kachhwa",
      "State": "Uttar Pradesh",
      "District": "Mirzapur"
    },
    {
      "City": "Kachnal Gosain",
      "State": "Uttaranchal",
      "District": "Udham Singh Nagar"
    },
    {
      "City": "Kachu Pukur",
      "State": "West Bengal",
      "District": "Maldah"
    },
    {
      "City": "Kadachira",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Kadamakkudy",
      "State": "Kerala",
      "District": "Ernakulam"
    },
    {
      "City": "Kadambur",
      "State": "Tamil Nadu",
      "District": "Toothukudi"
    },
    {
      "City": "Kadathur",
      "State": "Tamil Nadu",
      "District": "Dharmapuri"
    },
    {
      "City": "Kadaura",
      "State": "Uttar Pradesh",
      "District": "Jalaun"
    },
    {
      "City": "Kadayal",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Kadayampatti",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Kadayanallur",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Kadi",
      "State": "Gujarat",
      "District": "Mahesana"
    },
    {
      "City": "Kadipur",
      "State": "Uttar Pradesh",
      "District": "Sultanpur"
    },
    {
      "City": "Kadiri",
      "State": "Andhra Pradesh",
      "District": "Anantapur"
    },
    {
      "City": "Kadirur",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Kadodara",
      "State": "Gujarat",
      "District": "Surat"
    },
    {
      "City": "Kadungalloor",
      "State": "Kerala",
      "District": "Ernakulam"
    },
    {
      "City": "Kadur",
      "State": "Karnataka",
      "District": "Chikmagalur"
    },
    {
      "City": "Kagal",
      "State": "Maharashtra",
      "District": "Kolhapur"
    },
    {
      "City": "Kaghaznagar",
      "State": "Andhra Pradesh",
      "District": "Adilabad"
    },
    {
      "City": "Kailaras",
      "State": "Madhya Pradesh",
      "District": "Morena"
    },
    {
      "City": "Kailasahar",
      "State": "Tripura",
      "District": "North Tripura"
    },
    {
      "City": "Kailashpur",
      "State": "Uttar Pradesh",
      "District": "Saharanpur"
    },
    {
      "City": "Kailudih",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Kaimganj",
      "State": "Uttar Pradesh",
      "District": "Farrukhabad"
    },
    {
      "City": "Kairana",
      "State": "Uttar Pradesh",
      "District": "Muzaffarnagar"
    },
    {
      "City": "Kaithal",
      "State": "Haryana",
      "District": "Kaithal"
    },
    {
      "City": "Kaithoon",
      "State": "Rajasthan",
      "District": "Kota"
    },
    {
      "City": "Kajora",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Kakarhati",
      "State": "Madhya Pradesh",
      "District": "Panna"
    },
    {
      "City": "Kakching",
      "State": "Manipur",
      "District": "Thoubal"
    },
    {
      "City": "Kakching Khunou",
      "State": "Manipur",
      "District": "Thoubal"
    },
    {
      "City": "Kakdihi",
      "State": "West Bengal",
      "District": "Medinipur"
    },
    {
      "City": "Kakgaina",
      "State": "Uttar Pradesh",
      "District": "Bareilly"
    },
    {
      "City": "Kakinada",
      "State": "Andhra Pradesh",
      "District": "East Godavari"
    },
    {
      "City": "Kakod",
      "State": "Uttar Pradesh",
      "District": "Gautam Buddha Nagar"
    },
    {
      "City": "Kakori",
      "State": "Uttar Pradesh",
      "District": "Lucknow"
    },
    {
      "City": "Kakrala",
      "State": "Uttar Pradesh",
      "District": "Budaun"
    },
    {
      "City": "Kaladungi",
      "State": "Uttaranchal",
      "District": "Nainital"
    },
    {
      "City": "Kalakkad",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Kalamassery",
      "State": "Kerala",
      "District": "Ernakulam"
    },
    {
      "City": "Kalamb",
      "State": "Maharashtra",
      "District": "Osmanabad"
    },
    {
      "City": "Kalambe Turf Thane",
      "State": "Maharashtra",
      "District": "Kolhapur"
    },
    {
      "City": "Kalambur",
      "State": "Tamil Nadu",
      "District": "Tiruvanamalai"
    },
    {
      "City": "Kalameshwar",
      "State": "Maharashtra",
      "District": "Nagpur"
    },
    {
      "City": "Kalamnuri",
      "State": "Maharashtra",
      "District": "Hingoli"
    },
    {
      "City": "Kalan Wali",
      "State": "Haryana",
      "District": "Sirsa"
    },
    {
      "City": "Kalanaur",
      "State": "Punjab",
      "District": "Gurdaspur"
    },
    {
      "City": "Kalanaur",
      "State": "Haryana",
      "District": "Rohtak"
    },
    {
      "City": "Kalapatti",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Kalappanaickenpatti",
      "State": "Tamil Nadu",
      "District": "Namakkal"
    },
    {
      "City": "Kalara",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Kalavad",
      "State": "Gujarat",
      "District": "Jamnagar"
    },
    {
      "City": "Kalavai",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Kalayat",
      "State": "Haryana",
      "District": "Kaithal"
    },
    {
      "City": "Kalghatgi",
      "State": "Karnataka",
      "District": "Dharwad"
    },
    {
      "City": "Kali",
      "State": "Gujarat",
      "District": "Ahmadabad"
    },
    {
      "City": "Kali Chhapar",
      "State": "Madhya Pradesh",
      "District": "Chhindwara"
    },
    {
      "City": "Kaliaganj",
      "State": "West Bengal",
      "District": "Uttar Dinajpur"
    },
    {
      "City": "Kalikapur",
      "State": "Jharkhand",
      "District": "Pashchimi Singhbhum"
    },
    {
      "City": "Kalimpong",
      "State": "West Bengal",
      "District": "Darjiling"
    },
    {
      "City": "Kalinagar",
      "State": "Uttar Pradesh",
      "District": "Pilibhit"
    },
    {
      "City": "Kalinjur",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Kaliyakkavilai",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Kalka",
      "State": "Haryana",
      "District": "Panchkula"
    },
    {
      "City": "Kalladaikurichi",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Kallakkurichi",
      "State": "Tamil Nadu",
      "District": "Viluppuram"
    },
    {
      "City": "Kallakudi",
      "State": "Tamil Nadu",
      "District": "Tiruchirappalli"
    },
    {
      "City": "Kalliasseri",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Kallukuttam",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Kallur",
      "State": "Andhra Pradesh",
      "District": "Kurnool"
    },
    {
      "City": "Kalna",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Kalol",
      "State": "Gujarat",
      "District": "Gandhinagar"
    },
    {
      "City": "Kalol",
      "State": "Gujarat",
      "District": "Panch Mahals"
    },
    {
      "City": "Kalol INA",
      "State": "Gujarat",
      "District": "Gandhinagar"
    },
    {
      "City": "Kalol INA",
      "State": "Gujarat",
      "District": "Panch Mahals"
    },
    {
      "City": "Kalpetta",
      "State": "Kerala",
      "District": "Wayanad"
    },
    {
      "City": "Kalpi",
      "State": "Uttar Pradesh",
      "District": "Jalaun"
    },
    {
      "City": "Kalugumalai",
      "State": "Tamil Nadu",
      "District": "Toothukudi"
    },
    {
      "City": "Kalundre",
      "State": "Maharashtra",
      "District": "Raigarh"
    },
    {
      "City": "Kalyan-Dombivali",
      "State": "Maharashtra",
      "District": "Thane"
    },
    {
      "City": "Kalyandurg",
      "State": "Andhra Pradesh",
      "District": "Anantapur"
    },
    {
      "City": "Kalyani",
      "State": "West Bengal",
      "District": "Nadia"
    },
    {
      "City": "Kamakshyanagar",
      "State": "Orissa",
      "District": "Dhenkanal"
    },
    {
      "City": "Kamalapuram",
      "State": "Karnataka",
      "District": "Bellary"
    },
    {
      "City": "Kamalganj",
      "State": "Uttar Pradesh",
      "District": "Farrukhabad"
    },
    {
      "City": "Kamalpur",
      "State": "Tripura",
      "District": "Dhalai"
    },
    {
      "City": "Kaman",
      "State": "Rajasthan",
      "District": "Bharatpur"
    },
    {
      "City": "Kamareddy",
      "State": "Andhra Pradesh",
      "District": "Nizamabad"
    },
    {
      "City": "Kamarhati",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Kamayagoundanpatti",
      "State": "Tamil Nadu",
      "District": "Theni"
    },
    {
      "City": "Kambainallur",
      "State": "Tamil Nadu",
      "District": "Dharmapuri"
    },
    {
      "City": "Kambam",
      "State": "Tamil Nadu",
      "District": "Theni"
    },
    {
      "City": "Kampil",
      "State": "Uttar Pradesh",
      "District": "Farrukhabad"
    },
    {
      "City": "Kampli",
      "State": "Karnataka",
      "District": "Bellary"
    },
    {
      "City": "Kamptee",
      "State": "Maharashtra",
      "District": "Nagpur"
    },
    {
      "City": "Kamptee",
      "State": "Maharashtra",
      "District": "Nagpur"
    },
    {
      "City": "Kampur Town",
      "State": "Assam",
      "District": "Nagaon"
    },
    {
      "City": "Kamuthi",
      "State": "Tamil Nadu",
      "District": "Ramanathapuram"
    },
    {
      "City": "Kanad",
      "State": "Madhya Pradesh",
      "District": "Shajapur"
    },
    {
      "City": "Kanadukathan",
      "State": "Tamil Nadu",
      "District": "Sivaganga"
    },
    {
      "City": "Kanaipur",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "Kanakapura",
      "State": "Karnataka",
      "District": "Bangalore Rural"
    },
    {
      "City": "Kanakkampalayam",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Kanakpur Part-II",
      "State": "Assam",
      "District": "Cachar"
    },
    {
      "City": "Kanam",
      "State": "Tamil Nadu",
      "District": "Toothukudi"
    },
    {
      "City": "Kanapaka",
      "State": "Andhra Pradesh",
      "District": "Vizianagaram"
    },
    {
      "City": "Kanchanpur",
      "State": "Tripura",
      "District": "Dhalai"
    },
    {
      "City": "Kancheepuram",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Kanchrapara",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Kandanur",
      "State": "Tamil Nadu",
      "District": "Sivaganga"
    },
    {
      "City": "Kandari",
      "State": "Maharashtra",
      "District": "Jalgaon"
    },
    {
      "City": "Kandhar",
      "State": "Maharashtra",
      "District": "Nanded"
    },
    {
      "City": "Kandhla",
      "State": "Uttar Pradesh",
      "District": "Muzaffarnagar"
    },
    {
      "City": "Kandi",
      "State": "West Bengal",
      "District": "Murshidabad"
    },
    {
      "City": "Kandla",
      "State": "Gujarat",
      "District": "Kachchh"
    },
    {
      "City": "Kandra",
      "State": "Jharkhand",
      "District": "Pashchimi Singhbhum"
    },
    {
      "City": "Kandri",
      "State": "Maharashtra",
      "District": "Nagpur"
    },
    {
      "City": "Kandri",
      "State": "Maharashtra",
      "District": "Nagpur"
    },
    {
      "City": "Kandukur",
      "State": "Andhra Pradesh",
      "District": "Prakasam"
    },
    {
      "City": "Kandwa",
      "State": "Uttar Pradesh",
      "District": "Varanasi"
    },
    {
      "City": "Kangayampalayam",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Kangeyam",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Kangeyanallur",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Kangra",
      "State": "Himachal Pradesh",
      "District": "Kangra"
    },
    {
      "City": "Kangrali (BK)",
      "State": "Karnataka",
      "District": "Belgaum"
    },
    {
      "City": "Kangrali (KH)",
      "State": "Karnataka",
      "District": "Belgaum"
    },
    {
      "City": "Kanhan (Pipri)",
      "State": "Maharashtra",
      "District": "Nagpur"
    },
    {
      "City": "Kanhangad",
      "State": "Kerala",
      "District": "Kasaragod"
    },
    {
      "City": "Kanhirode",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Kanina",
      "State": "Haryana",
      "District": "Mahendragarh"
    },
    {
      "City": "Kaniyur",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Kanjhawala",
      "State": "Delhi *",
      "District": "North West"
    },
    {
      "City": "Kanjikkuzhi",
      "State": "Kerala",
      "District": "Alappuzha"
    },
    {
      "City": "Kanjikoil",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Kankavli",
      "State": "Maharashtra",
      "District": "Sindhudurg"
    },
    {
      "City": "Kanke",
      "State": "Jharkhand",
      "District": "Ranchi"
    },
    {
      "City": "Kanker",
      "State": "Chhattisgarh",
      "District": "Kanker"
    },
    {
      "City": "Kankuria",
      "State": "West Bengal",
      "District": "Murshidabad"
    },
    {
      "City": "Kannad",
      "State": "Maharashtra",
      "District": "Aurangabad"
    },
    {
      "City": "Kannadendal",
      "State": "Tamil Nadu",
      "District": "Madurai"
    },
    {
      "City": "Kannadiparamba",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Kannamangalam",
      "State": "Tamil Nadu",
      "District": "Tiruvanamalai"
    },
    {
      "City": "Kannampalayam",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Kannankurichi",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Kannapuram",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Kannauj",
      "State": "Uttar Pradesh",
      "District": "Kannauj"
    },
    {
      "City": "Kannivadi",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Kannivadi",
      "State": "Tamil Nadu",
      "District": "Dindigul"
    },
    {
      "City": "Kanniyakumari",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Kannod",
      "State": "Madhya Pradesh",
      "District": "Dewas"
    },
    {
      "City": "Kannur",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Kannur",
      "State": "Karnataka",
      "District": "Dakshina Kannada"
    },
    {
      "City": "Kannur Cantonment",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Kanodar",
      "State": "Gujarat",
      "District": "Banas Kantha"
    },
    {
      "City": "Kanor",
      "State": "Rajasthan",
      "District": "Udaipur"
    },
    {
      "City": "Kanpur",
      "State": "Uttar Pradesh",
      "District": "Kanpur Nagar"
    },
    {
      "City": "Kanpur",
      "State": "Uttar Pradesh",
      "District": "Kanpur Nagar"
    },
    {
      "City": "Kansepur",
      "State": "Haryana",
      "District": "Yamunanagar"
    },
    {
      "City": "Kantabamsuguda",
      "State": "Andhra Pradesh",
      "District": "Visakhapatnam"
    },
    {
      "City": "Kantabanji",
      "State": "Orissa",
      "District": "Balangir"
    },
    {
      "City": "Kantaphod",
      "State": "Madhya Pradesh",
      "District": "Dewas"
    },
    {
      "City": "Kanth",
      "State": "Uttar Pradesh",
      "District": "Moradabad"
    },
    {
      "City": "Kanth",
      "State": "Uttar Pradesh",
      "District": "Shahjahanpur"
    },
    {
      "City": "Kanti",
      "State": "Bihar",
      "District": "Muzaffarpur"
    },
    {
      "City": "Kantilo",
      "State": "Orissa",
      "District": "Nayagarh"
    },
    {
      "City": "Kantlia",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Kanuru",
      "State": "Andhra Pradesh",
      "District": "Krishna"
    },
    {
      "City": "Kanyanagar",
      "State": "West Bengal",
      "District": "South Twentyfour Parganas"
    },
    {
      "City": "Kapadvanj",
      "State": "Gujarat",
      "District": "Kheda"
    },
    {
      "City": "Kapas Hera",
      "State": "Delhi *",
      "District": "South West"
    },
    {
      "City": "Kapasan",
      "State": "Rajasthan",
      "District": "Chittaurgarh"
    },
    {
      "City": "Kappiyarai",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Kapra",
      "State": "Andhra Pradesh",
      "District": "Rangareddi"
    },
    {
      "City": "Kaprain",
      "State": "Rajasthan",
      "District": "Bundi"
    },
    {
      "City": "Kaptanganj",
      "State": "Uttar Pradesh",
      "District": "Kushinagar"
    },
    {
      "City": "Kapurthala",
      "State": "Punjab",
      "District": "Kapurthala"
    },
    {
      "City": "Karachiya",
      "State": "Gujarat",
      "District": "Vadodara"
    },
    {
      "City": "Karad",
      "State": "Maharashtra",
      "District": "Satara"
    },
    {
      "City": "Karaikal",
      "State": "Pondicherry *",
      "District": "Karaikal"
    },
    {
      "City": "Karaikkudi",
      "State": "Tamil Nadu",
      "District": "Sivaganga"
    },
    {
      "City": "Karamadai",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Karambakkam",
      "State": "Tamil Nadu",
      "District": "Thiruvallur"
    },
    {
      "City": "Karambakkudi",
      "State": "Tamil Nadu",
      "District": "Pudukkottai"
    },
    {
      "City": "Karamsad",
      "State": "Gujarat",
      "District": "Anand"
    },
    {
      "City": "Karanja",
      "State": "Maharashtra",
      "District": "Washim"
    },
    {
      "City": "Karanje Turf Satara",
      "State": "Maharashtra",
      "District": "Satara"
    },
    {
      "City": "Karanjia",
      "State": "Orissa",
      "District": "Mayurbhanj"
    },
    {
      "City": "Karanpur",
      "State": "Rajasthan",
      "District": "Ganganagar"
    },
    {
      "City": "Karari",
      "State": "Uttar Pradesh",
      "District": "Kaushambi"
    },
    {
      "City": "Karauli",
      "State": "Rajasthan",
      "District": "Karauli"
    },
    {
      "City": "Karawal Nagar",
      "State": "Delhi *",
      "District": "North East"
    },
    {
      "City": "Kardhan",
      "State": "Haryana",
      "District": "Ambala"
    },
    {
      "City": "Kareli",
      "State": "Madhya Pradesh",
      "District": "Narsimhapur"
    },
    {
      "City": "Karera",
      "State": "Madhya Pradesh",
      "District": "Shivpuri"
    },
    {
      "City": "Kargil",
      "State": "Jammu & Kashmir",
      "District": "Kargil"
    },
    {
      "City": "Karhal",
      "State": "Uttar Pradesh",
      "District": "Mainpuri"
    },
    {
      "City": "Kari",
      "State": "Madhya Pradesh",
      "District": "Tikamgarh"
    },
    {
      "City": "Kariamangalam",
      "State": "Tamil Nadu",
      "District": "Dharmapuri"
    },
    {
      "City": "Kariapatti",
      "State": "Tamil Nadu",
      "District": "Virudhunagar"
    },
    {
      "City": "Karimganj",
      "State": "Assam",
      "District": "Karimganj"
    },
    {
      "City": "Karimnagar",
      "State": "Andhra Pradesh",
      "District": "Karimnagar"
    },
    {
      "City": "Karimpur",
      "State": "West Bengal",
      "District": "Nadia"
    },
    {
      "City": "Karivali",
      "State": "Maharashtra",
      "District": "Thane"
    },
    {
      "City": "Karjan",
      "State": "Gujarat",
      "District": "Vadodara"
    },
    {
      "City": "Karjat",
      "State": "Maharashtra",
      "District": "Raigarh"
    },
    {
      "City": "Karkal",
      "State": "Karnataka",
      "District": "Udupi"
    },
    {
      "City": "Karmala",
      "State": "Maharashtra",
      "District": "Solapur"
    },
    {
      "City": "Karn Prayag",
      "State": "Uttaranchal",
      "District": "Chamoli"
    },
    {
      "City": "Karnal",
      "State": "Haryana",
      "District": "Karnal"
    },
    {
      "City": "Karnawad",
      "State": "Madhya Pradesh",
      "District": "Dewas"
    },
    {
      "City": "Karnawal",
      "State": "Uttar Pradesh",
      "District": "Meerut"
    },
    {
      "City": "Karoran",
      "State": "Punjab",
      "District": "Rupnagar"
    },
    {
      "City": "Karrapur",
      "State": "Madhya Pradesh",
      "District": "Sagar"
    },
    {
      "City": "Kartarpur",
      "State": "Punjab",
      "District": "Jalandhar"
    },
    {
      "City": "Karugampattur",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Karumandi Chellipalayam",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Karumathampatti",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Karungal",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Karunguzhi",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Karuppur",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Karur",
      "State": "Tamil Nadu",
      "District": "Kapur"
    },
    {
      "City": "Karuvanthuruthy",
      "State": "Kerala",
      "District": "Kozhikode"
    },
    {
      "City": "Karwar",
      "State": "Karnataka",
      "District": "Uttara Kannada"
    },
    {
      "City": "Kasara Budruk",
      "State": "Maharashtra",
      "District": "Thane"
    },
    {
      "City": "Kasaragod",
      "State": "Kerala",
      "District": "Kasaragod"
    },
    {
      "City": "Kasauli",
      "State": "Himachal Pradesh",
      "District": "Solan"
    },
    {
      "City": "Kasba",
      "State": "West Bengal",
      "District": "Uttar Dinajpur"
    },
    {
      "City": "Kasba",
      "State": "Bihar",
      "District": "Purnia"
    },
    {
      "City": "Kasganj",
      "State": "Uttar Pradesh",
      "District": "Etah"
    },
    {
      "City": "Kashinagara",
      "State": "Orissa",
      "District": "Gajapati"
    },
    {
      "City": "Kashipur",
      "State": "Uttaranchal",
      "District": "Udham Singh Nagar"
    },
    {
      "City": "Kashirampur",
      "State": "Uttaranchal",
      "District": "Garhwal"
    },
    {
      "City": "Kasim Bazar",
      "State": "West Bengal",
      "District": "Murshidabad"
    },
    {
      "City": "Kasipalayam (E)",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Kasipalayam (G)",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Kasrawad",
      "State": "Madhya Pradesh",
      "District": "West Nimar"
    },
    {
      "City": "Katai",
      "State": "Maharashtra",
      "District": "Thane"
    },
    {
      "City": "Kataiya",
      "State": "Bihar",
      "District": "Gopalganj"
    },
    {
      "City": "Katangi",
      "State": "Madhya Pradesh",
      "District": "Jabalpur"
    },
    {
      "City": "Katangi",
      "State": "Madhya Pradesh",
      "District": "Balaghat"
    },
    {
      "City": "Katariya",
      "State": "Uttar Pradesh",
      "District": "Ambedaker Nagar"
    },
    {
      "City": "Katghar Lalganj",
      "State": "Uttar Pradesh",
      "District": "Azamgarh"
    },
    {
      "City": "Katghora",
      "State": "Chhattisgarh",
      "District": "Korba"
    },
    {
      "City": "Kathera",
      "State": "Uttar Pradesh",
      "District": "Jhansi"
    },
    {
      "City": "Kathua",
      "State": "Jammu & Kashmir",
      "District": "Kathua"
    },
    {
      "City": "Kathujuganapalli",
      "State": "Tamil Nadu",
      "District": "Dharmapuri"
    },
    {
      "City": "Katihar",
      "State": "Bihar",
      "District": "Katihar"
    },
    {
      "City": "Katkar",
      "State": "Maharashtra",
      "District": "Thane"
    },
    {
      "City": "Katol",
      "State": "Maharashtra",
      "District": "Nagpur"
    },
    {
      "City": "Katpadi",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Katpar",
      "State": "Gujarat",
      "District": "Bhavnagar"
    },
    {
      "City": "Katra",
      "State": "Jammu & Kashmir",
      "District": "Udhampur"
    },
    {
      "City": "Katra",
      "State": "Uttar Pradesh",
      "District": "Shahjahanpur"
    },
    {
      "City": "Katra",
      "State": "Uttar Pradesh",
      "District": "Gonda"
    },
    {
      "City": "Katra Medniganj",
      "State": "Uttar Pradesh",
      "District": "Pratapgarh"
    },
    {
      "City": "Katras",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Kattivakkam",
      "State": "Tamil Nadu",
      "District": "Thiruvallur"
    },
    {
      "City": "Kattumannarkoil",
      "State": "Tamil Nadu",
      "District": "Cuddalore"
    },
    {
      "City": "Kattuputhur",
      "State": "Tamil Nadu",
      "District": "Tiruchirappalli"
    },
    {
      "City": "Katwa",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Kaugachhi",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Kauriaganj",
      "State": "Uttar Pradesh",
      "District": "Aligarh"
    },
    {
      "City": "Kavali",
      "State": "Andhra Pradesh",
      "District": "Nellore"
    },
    {
      "City": "Kavaratti",
      "State": "Lakshadweep *",
      "District": "Lakshadweep"
    },
    {
      "City": "Kaveripakkam",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Kaveripattinam",
      "State": "Tamil Nadu",
      "District": "Dharmapuri"
    },
    {
      "City": "Kavisuryanagar",
      "State": "Orissa",
      "District": "Ganjam"
    },
    {
      "City": "Kawardha",
      "State": "Chhattisgarh",
      "District": "Kawardha"
    },
    {
      "City": "Kayalpattinam",
      "State": "Tamil Nadu",
      "District": "Toothukudi"
    },
    {
      "City": "Kayamkulam",
      "State": "Kerala",
      "District": "Alappuzha"
    },
    {
      "City": "Kayatharu",
      "State": "Tamil Nadu",
      "District": "Toothukudi"
    },
    {
      "City": "Kedarnath",
      "State": "Uttaranchal",
      "District": "Rudraprayag"
    },
    {
      "City": "Kedla",
      "State": "Jharkhand",
      "District": "Hazaribag"
    },
    {
      "City": "Keelakarai",
      "State": "Tamil Nadu",
      "District": "Ramanathapuram"
    },
    {
      "City": "Keeramangalam",
      "State": "Tamil Nadu",
      "District": "Pudukkottai"
    },
    {
      "City": "Keeranur",
      "State": "Tamil Nadu",
      "District": "Dindigul"
    },
    {
      "City": "Keeranur",
      "State": "Tamil Nadu",
      "District": "Pudukkottai"
    },
    {
      "City": "Keeripatti",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Keezhapavur",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Kegaon",
      "State": "Maharashtra",
      "District": "Raigarh"
    },
    {
      "City": "Kekri",
      "State": "Rajasthan",
      "District": "Ajmer"
    },
    {
      "City": "Kela Khera",
      "State": "Uttaranchal",
      "District": "Udham Singh Nagar"
    },
    {
      "City": "Kelamangalam",
      "State": "Tamil Nadu",
      "District": "Dharmapuri"
    },
    {
      "City": "Kelhauri(chachai)",
      "State": "Madhya Pradesh",
      "District": "Shahdol"
    },
    {
      "City": "Kembainaickenpalayam",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Kemri",
      "State": "Uttar Pradesh",
      "District": "Rampur"
    },
    {
      "City": "Kenda",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Kendra Khottamdi",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Kendrapara",
      "State": "Orissa",
      "District": "Kendrapara"
    },
    {
      "City": "Kendua",
      "State": "West Bengal",
      "District": "Maldah"
    },
    {
      "City": "Kenduadih",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Kendujhar",
      "State": "Orissa",
      "District": "Kendujhar"
    },
    {
      "City": "Kengeri",
      "State": "Karnataka",
      "District": "Bangalore"
    },
    {
      "City": "Kerakat",
      "State": "Uttar Pradesh",
      "District": "Jaunpur"
    },
    {
      "City": "Kerur",
      "State": "Karnataka",
      "District": "Bagalkot"
    },
    {
      "City": "Kesabpur",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Keshod",
      "State": "Gujarat",
      "District": "Junagadh"
    },
    {
      "City": "Keshoraipatan",
      "State": "Rajasthan",
      "District": "Bundi"
    },
    {
      "City": "Kesinga",
      "State": "Orissa",
      "District": "Kalahandi"
    },
    {
      "City": "Kesrisinghpur",
      "State": "Rajasthan",
      "District": "Ganganagar"
    },
    {
      "City": "Kethi",
      "State": "Tamil Nadu",
      "District": "The Nilgiris"
    },
    {
      "City": "Kevadiya",
      "State": "Gujarat",
      "District": "Narmada"
    },
    {
      "City": "Khachrod",
      "State": "Madhya Pradesh",
      "District": "Ujjain"
    },
    {
      "City": "Khadda",
      "State": "Uttar Pradesh",
      "District": "Kushinagar"
    },
    {
      "City": "Khadkale",
      "State": "Maharashtra",
      "District": "Pune"
    },
    {
      "City": "Khaga",
      "State": "Uttar Pradesh",
      "District": "Fatehpur"
    },
    {
      "City": "Khagaria",
      "State": "Bihar",
      "District": "Khagaria"
    },
    {
      "City": "Khagaul",
      "State": "Bihar",
      "District": "Patna"
    },
    {
      "City": "Khagrabari",
      "State": "West Bengal",
      "District": "Koch Bihar"
    },
    {
      "City": "Khailar",
      "State": "Uttar Pradesh",
      "District": "Jhansi"
    },
    {
      "City": "Khair",
      "State": "Uttar Pradesh",
      "District": "Aligarh"
    },
    {
      "City": "Khairabad",
      "State": "Uttar Pradesh",
      "District": "Sitapur"
    },
    {
      "City": "Khairabad",
      "State": "Uttar Pradesh",
      "District": "Mau"
    },
    {
      "City": "Khairagarh",
      "State": "Chhattisgarh",
      "District": "Rajnandgaon"
    },
    {
      "City": "Khairthal",
      "State": "Rajasthan",
      "District": "Alwar"
    },
    {
      "City": "Khajoori Khas",
      "State": "Delhi *",
      "District": "North East"
    },
    {
      "City": "Khajuraho",
      "State": "Madhya Pradesh",
      "District": "Chhatarpur"
    },
    {
      "City": "Khalia",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Khaliapali",
      "State": "Orissa",
      "District": "Bargarh"
    },
    {
      "City": "Khalikote",
      "State": "Orissa",
      "District": "Ganjam"
    },
    {
      "City": "Khalilabad",
      "State": "Uttar Pradesh",
      "District": "Sant Kabir Nagar"
    },
    {
      "City": "Khalor",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Khamanon",
      "State": "Punjab",
      "District": "Fatehgarh Sahib"
    },
    {
      "City": "Khamaria",
      "State": "Uttar Pradesh",
      "District": "Sant Ravidas Nagar"
    },
    {
      "City": "Khambhalia",
      "State": "Gujarat",
      "District": "Jamnagar"
    },
    {
      "City": "Khambhat",
      "State": "Gujarat",
      "District": "Anand"
    },
    {
      "City": "Khamgaon",
      "State": "Maharashtra",
      "District": "Buldana"
    },
    {
      "City": "Khamhria",
      "State": "Chhattisgarh",
      "District": "Durg"
    },
    {
      "City": "Khammam",
      "State": "Andhra Pradesh",
      "District": "Khammam"
    },
    {
      "City": "Khan Sahib",
      "State": "Jammu & Kashmir",
      "District": "Badgam"
    },
    {
      "City": "Khanapur",
      "State": "Karnataka",
      "District": "Belgaum"
    },
    {
      "City": "Khanauri",
      "State": "Punjab",
      "District": "Sangrur"
    },
    {
      "City": "Khand(Bansagar)",
      "State": "Madhya Pradesh",
      "District": "Shahdol"
    },
    {
      "City": "Khandapada",
      "State": "Orissa",
      "District": "Nayagarh"
    },
    {
      "City": "Khandela",
      "State": "Rajasthan",
      "District": "Sikar"
    },
    {
      "City": "Khandra",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Khandwa",
      "State": "Madhya Pradesh",
      "District": "East Nimar"
    },
    {
      "City": "Khaniyadhana",
      "State": "Madhya Pradesh",
      "District": "Shivpuri"
    },
    {
      "City": "Khanna",
      "State": "Punjab",
      "District": "Ludhiana"
    },
    {
      "City": "Khanpur",
      "State": "Uttar Pradesh",
      "District": "Bulandshahr"
    },
    {
      "City": "Khantora",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Khapa",
      "State": "Maharashtra",
      "District": "Nagpur"
    },
    {
      "City": "Kharaghoda",
      "State": "Gujarat",
      "District": "Surendranagar"
    },
    {
      "City": "Kharagpur",
      "State": "West Bengal",
      "District": "Medinipur"
    },
    {
      "City": "Kharagpur",
      "State": "Bihar",
      "District": "Munger"
    },
    {
      "City": "Kharagpur Rly. Settlement",
      "State": "West Bengal",
      "District": "Medinipur"
    },
    {
      "City": "Kharar",
      "State": "Punjab",
      "District": "Rupnagar"
    },
    {
      "City": "Kharar",
      "State": "West Bengal",
      "District": "Medinipur"
    },
    {
      "City": "Khardaha",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Kharela",
      "State": "Uttar Pradesh",
      "District": "Mahoba"
    },
    {
      "City": "Khargapur",
      "State": "Madhya Pradesh",
      "District": "Tikamgarh"
    },
    {
      "City": "Khargone",
      "State": "Madhya Pradesh",
      "District": "West Nimar"
    },
    {
      "City": "Khargupur",
      "State": "Uttar Pradesh",
      "District": "Gonda"
    },
    {
      "City": "Khariar",
      "State": "Orissa",
      "District": "Nuapada"
    },
    {
      "City": "Khariar Road",
      "State": "Orissa",
      "District": "Nuapada"
    },
    {
      "City": "Kharijapikon",
      "State": "Assam",
      "District": "Goalpara"
    },
    {
      "City": "Kharimala Khagrabari",
      "State": "West Bengal",
      "District": "Koch Bihar"
    },
    {
      "City": "Khariya",
      "State": "Uttar Pradesh",
      "District": "Sonbhadra"
    },
    {
      "City": "Kharkhari",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Kharkhoda",
      "State": "Uttar Pradesh",
      "District": "Meerut"
    },
    {
      "City": "Kharkhoda",
      "State": "Haryana",
      "District": "Sonipat"
    },
    {
      "City": "Kharod",
      "State": "Chhattisgarh",
      "District": "Janjgir-Champa"
    },
    {
      "City": "Kharsarai",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "Kharsawan",
      "State": "Jharkhand",
      "District": "Pashchimi Singhbhum"
    },
    {
      "City": "Kharsia",
      "State": "Chhattisgarh",
      "District": "Raigarh"
    },
    {
      "City": "Kharupatia",
      "State": "Assam",
      "District": "Darrang"
    },
    {
      "City": "Khatauli",
      "State": "Uttar Pradesh",
      "District": "Muzaffarnagar"
    },
    {
      "City": "Khatauli Rural",
      "State": "Uttar Pradesh",
      "District": "Muzaffarnagar"
    },
    {
      "City": "Khategaon",
      "State": "Madhya Pradesh",
      "District": "Dewas"
    },
    {
      "City": "Khatiguda",
      "State": "Orissa",
      "District": "Nabarangapur"
    },
    {
      "City": "Khatima",
      "State": "Uttaranchal",
      "District": "Udham Singh Nagar"
    },
    {
      "City": "Khawhai",
      "State": "Mizoram",
      "District": "Champhai"
    },
    {
      "City": "Khawzawl",
      "State": "Mizoram",
      "District": "Champhai"
    },
    {
      "City": "Khed",
      "State": "Maharashtra",
      "District": "Satara"
    },
    {
      "City": "Khed",
      "State": "Maharashtra",
      "District": "Ratnagiri"
    },
    {
      "City": "Kheda",
      "State": "Gujarat",
      "District": "Kheda"
    },
    {
      "City": "Khedbrahma",
      "State": "Gujarat",
      "District": "Sabar Kantha"
    },
    {
      "City": "Khekada",
      "State": "Uttar Pradesh",
      "District": "Baghpat"
    },
    {
      "City": "Khelari",
      "State": "Jharkhand",
      "District": "Ranchi"
    },
    {
      "City": "Khem Karan",
      "State": "Punjab",
      "District": "Amritsar"
    },
    {
      "City": "Khera Khurd",
      "State": "Delhi *",
      "District": "North West"
    },
    {
      "City": "Kheragarh",
      "State": "Uttar Pradesh",
      "District": "Agra"
    },
    {
      "City": "Kheralu",
      "State": "Gujarat",
      "District": "Mahesana"
    },
    {
      "City": "Kherdi",
      "State": "Maharashtra",
      "District": "Ratnagiri"
    },
    {
      "City": "Kheri",
      "State": "Uttar Pradesh",
      "District": "Kheri"
    },
    {
      "City": "Kherli",
      "State": "Rajasthan",
      "District": "Alwar"
    },
    {
      "City": "Kherliganj",
      "State": "Rajasthan",
      "District": "Baran"
    },
    {
      "City": "Kherwara Chhaoni",
      "State": "Rajasthan",
      "District": "Udaipur"
    },
    {
      "City": "Kheta Sarai",
      "State": "Uttar Pradesh",
      "District": "Jaunpur"
    },
    {
      "City": "Khetia",
      "State": "Madhya Pradesh",
      "District": "Barwani"
    },
    {
      "City": "Khetri",
      "State": "Rajasthan",
      "District": "Jhunjhunun"
    },
    {
      "City": "Khilchipur",
      "State": "Madhya Pradesh",
      "District": "Rajgarh"
    },
    {
      "City": "Khirkiya",
      "State": "Madhya Pradesh",
      "District": "Harda"
    },
    {
      "City": "Khodarampur",
      "State": "West Bengal",
      "District": "Murshidabad"
    },
    {
      "City": "Khongapani",
      "State": "Chhattisgarh",
      "District": "Koriya"
    },
    {
      "City": "Khongman",
      "State": "Manipur",
      "District": "Imphal East"
    },
    {
      "City": "Khoni",
      "State": "Maharashtra",
      "District": "Thane"
    },
    {
      "City": "Khonsa",
      "State": "Arunachal Pradesh",
      "District": "Tirap"
    },
    {
      "City": "Khopoli",
      "State": "Maharashtra",
      "District": "Raigarh"
    },
    {
      "City": "Khordha",
      "State": "Orissa",
      "District": "Khordha"
    },
    {
      "City": "Khour",
      "State": "Jammu & Kashmir",
      "District": "Jammu"
    },
    {
      "City": "Khowai",
      "State": "Tripura",
      "District": "West Tripura"
    },
    {
      "City": "Khrew",
      "State": "Jammu & Kashmir",
      "District": "Pulwama"
    },
    {
      "City": "Khudaganj",
      "State": "Uttar Pradesh",
      "District": "Shahjahanpur"
    },
    {
      "City": "Khujner",
      "State": "Madhya Pradesh",
      "District": "Rajgarh"
    },
    {
      "City": "Khuldabad",
      "State": "Maharashtra",
      "District": "Aurangabad"
    },
    {
      "City": "Khunti",
      "State": "Jharkhand",
      "District": "Ranchi"
    },
    {
      "City": "Khurai",
      "State": "Madhya Pradesh",
      "District": "Sagar"
    },
    {
      "City": "Khurja",
      "State": "Uttar Pradesh",
      "District": "Bulandshahr"
    },
    {
      "City": "Khusrupur",
      "State": "Bihar",
      "District": "Patna"
    },
    {
      "City": "Khutar",
      "State": "Uttar Pradesh",
      "District": "Shahjahanpur"
    },
    {
      "City": "Kichha",
      "State": "Uttaranchal",
      "District": "Udham Singh Nagar"
    },
    {
      "City": "Kilampadi",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Kilkulam",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Kilkunda",
      "State": "Tamil Nadu",
      "District": "The Nilgiris"
    },
    {
      "City": "Killiyur",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Killlai",
      "State": "Tamil Nadu",
      "District": "Cuddalore"
    },
    {
      "City": "Kilpennathur",
      "State": "Tamil Nadu",
      "District": "Tiruvanamalai"
    },
    {
      "City": "Kilvelur",
      "State": "Tamil Nadu",
      "District": "Nagapattinam"
    },
    {
      "City": "Kinathukadavu",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Kinwat",
      "State": "Maharashtra",
      "District": "Nanded"
    },
    {
      "City": "Kirandul",
      "State": "Chhattisgarh",
      "District": "Dantewada"
    },
    {
      "City": "Kiranipura",
      "State": "Rajasthan",
      "District": "Ajmer"
    },
    {
      "City": "Kiraoli",
      "State": "Uttar Pradesh",
      "District": "Agra"
    },
    {
      "City": "Kirari Suleman Nagar",
      "State": "Delhi *",
      "District": "North West"
    },
    {
      "City": "Kiratpur",
      "State": "Uttar Pradesh",
      "District": "Bijnor"
    },
    {
      "City": "Kiriburu",
      "State": "Jharkhand",
      "District": "Pashchimi Singhbhum"
    },
    {
      "City": "Kirkee",
      "State": "Maharashtra",
      "District": "Pune"
    },
    {
      "City": "Kirtinagar",
      "State": "Uttaranchal",
      "District": "Tehri Garhwal"
    },
    {
      "City": "Kishanganj",
      "State": "Bihar",
      "District": "Kishanganj"
    },
    {
      "City": "Kishangarh",
      "State": "Rajasthan",
      "District": "Alwar"
    },
    {
      "City": "Kishangarh",
      "State": "Rajasthan",
      "District": "Ajmer"
    },
    {
      "City": "Kishangarh Renwal",
      "State": "Rajasthan",
      "District": "Jaipur"
    },
    {
      "City": "Kishni",
      "State": "Uttar Pradesh",
      "District": "Mainpuri"
    },
    {
      "City": "Kishtwar",
      "State": "Jammu & Kashmir",
      "District": "Doda"
    },
    {
      "City": "Kishunpur",
      "State": "Uttar Pradesh",
      "District": "Fatehpur"
    },
    {
      "City": "Kithaur",
      "State": "Uttar Pradesh",
      "District": "Meerut"
    },
    {
      "City": "Koath",
      "State": "Bihar",
      "District": "Rohtas"
    },
    {
      "City": "Koch Bihar",
      "State": "West Bengal",
      "District": "Koch Bihar"
    },
    {
      "City": "Kochi",
      "State": "Kerala",
      "District": "Ernakulam"
    },
    {
      "City": "Kochinda",
      "State": "Orissa",
      "District": "Sambalpur"
    },
    {
      "City": "Kochpara",
      "State": "Assam",
      "District": "Kamrup"
    },
    {
      "City": "Kodaikanal",
      "State": "Tamil Nadu",
      "District": "Dindigul"
    },
    {
      "City": "Kodala",
      "State": "Orissa",
      "District": "Ganjam"
    },
    {
      "City": "Kodalia",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "Kodarma",
      "State": "Jharkhand",
      "District": "Kodarma"
    },
    {
      "City": "Kodavasal",
      "State": "Tamil Nadu",
      "District": "Thiruvarur"
    },
    {
      "City": "Kodigenahalli",
      "State": "Karnataka",
      "District": "Bangalore"
    },
    {
      "City": "Kodinar",
      "State": "Gujarat",
      "District": "Junagadh"
    },
    {
      "City": "Kodiyal",
      "State": "Karnataka",
      "District": "Haveri"
    },
    {
      "City": "Kodoli",
      "State": "Maharashtra",
      "District": "Satara"
    },
    {
      "City": "Kodumudi",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Kodungallur",
      "State": "Kerala",
      "District": "Thrissur"
    },
    {
      "City": "Koeripur",
      "State": "Uttar Pradesh",
      "District": "Sultanpur"
    },
    {
      "City": "Kohima",
      "State": "Nagaland",
      "District": "Kohima"
    },
    {
      "City": "Koilwar",
      "State": "Bihar",
      "District": "Bhojpur"
    },
    {
      "City": "Kokkothamangalam",
      "State": "Kerala",
      "District": "Alappuzha"
    },
    {
      "City": "Kokrajhar",
      "State": "Assam",
      "District": "Kokrajhar"
    },
    {
      "City": "Kolachal",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Kolaghat",
      "State": "West Bengal",
      "District": "Medinipur"
    },
    {
      "City": "Kolappalur",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Kolar",
      "State": "Karnataka",
      "District": "Kolar"
    },
    {
      "City": "Kolaras",
      "State": "Madhya Pradesh",
      "District": "Shivpuri"
    },
    {
      "City": "Kolasib",
      "State": "Mizoram",
      "District": "Kolasib"
    },
    {
      "City": "Kolathupalayam",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Kolathur",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Kolazhy",
      "State": "Kerala",
      "District": "Thrissur"
    },
    {
      "City": "Kolhapur",
      "State": "Maharashtra",
      "District": "Kolhapur"
    },
    {
      "City": "Kolkata",
      "State": "West Bengal",
      "District": "Kolkata"
    },
    {
      "City": "Kollam",
      "State": "Kerala",
      "District": "Kollam"
    },
    {
      "City": "Kollankodu",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Kollankoil",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Kollegal",
      "State": "Karnataka",
      "District": "Chamarajanagar"
    },
    {
      "City": "Kolvi Mandi Rajendra pura",
      "State": "Rajasthan",
      "District": "Jhalawar"
    },
    {
      "City": "Komalapuram",
      "State": "Kerala",
      "District": "Alappuzha"
    },
    {
      "City": "Komaralingam",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Kombai",
      "State": "Tamil Nadu",
      "District": "Theni"
    },
    {
      "City": "Kon",
      "State": "Maharashtra",
      "District": "Thane"
    },
    {
      "City": "Konanakunte",
      "State": "Karnataka",
      "District": "Bangalore"
    },
    {
      "City": "Konardihi",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Konark",
      "State": "Orissa",
      "District": "Puri"
    },
    {
      "City": "Konavattam",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Konch",
      "State": "Uttar Pradesh",
      "District": "Jalaun"
    },
    {
      "City": "Kondagaon",
      "State": "Chhattisgarh",
      "District": "Bastar"
    },
    {
      "City": "Kondalampatti",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Kondli",
      "State": "Delhi *",
      "District": "East"
    },
    {
      "City": "Kondumal",
      "State": "Maharashtra",
      "District": "Chandrapur"
    },
    {
      "City": "Konganapuram",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Konnagar",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "Konnur",
      "State": "Karnataka",
      "District": "Belgaum"
    },
    {
      "City": "Kooraikundu",
      "State": "Tamil Nadu",
      "District": "Virudhunagar"
    },
    {
      "City": "Koothappar",
      "State": "Tamil Nadu",
      "District": "Tiruchirappalli"
    },
    {
      "City": "Koothuparamba",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Kopaganj",
      "State": "Uttar Pradesh",
      "District": "Mau"
    },
    {
      "City": "Kopargaon",
      "State": "Maharashtra",
      "District": "Ahmadnagar"
    },
    {
      "City": "Kopharad",
      "State": "Maharashtra",
      "District": "Thane"
    },
    {
      "City": "Koppa",
      "State": "Karnataka",
      "District": "Chikmagalur"
    },
    {
      "City": "Koppal",
      "State": "Karnataka",
      "District": "Koppal"
    },
    {
      "City": "Kora Jahanabad",
      "State": "Uttar Pradesh",
      "District": "Fatehpur"
    },
    {
      "City": "Koradacheri",
      "State": "Tamil Nadu",
      "District": "Thiruvarur"
    },
    {
      "City": "Koraon",
      "State": "Uttar Pradesh",
      "District": "Allahabad"
    },
    {
      "City": "Koraput",
      "State": "Orissa",
      "District": "Koraput"
    },
    {
      "City": "Koratagere",
      "State": "Karnataka",
      "District": "Tumkur"
    },
    {
      "City": "Koratla",
      "State": "Andhra Pradesh",
      "District": "Karimnagar"
    },
    {
      "City": "Koratty",
      "State": "Kerala",
      "District": "Thrissur"
    },
    {
      "City": "Korba",
      "State": "Chhattisgarh",
      "District": "Korba"
    },
    {
      "City": "Korochi",
      "State": "Maharashtra",
      "District": "Kolhapur"
    },
    {
      "City": "Korwa",
      "State": "Uttar Pradesh",
      "District": "Sultanpur"
    },
    {
      "City": "Kosamba",
      "State": "Gujarat",
      "District": "Surat"
    },
    {
      "City": "Kosi Kalan",
      "State": "Uttar Pradesh",
      "District": "Mathura"
    },
    {
      "City": "Kot Fatta",
      "State": "Punjab",
      "District": "Bathinda"
    },
    {
      "City": "Kot Kapura",
      "State": "Punjab",
      "District": "Faridkot"
    },
    {
      "City": "Kota",
      "State": "Chhattisgarh",
      "District": "Bilaspur"
    },
    {
      "City": "Kota",
      "State": "Rajasthan",
      "District": "Kota"
    },
    {
      "City": "Kota",
      "State": "Uttar Pradesh",
      "District": "Sonbhadra"
    },
    {
      "City": "Kotagiri",
      "State": "Tamil Nadu",
      "District": "The Nilgiris"
    },
    {
      "City": "Kotar",
      "State": "Madhya Pradesh",
      "District": "Satna"
    },
    {
      "City": "Kotdwara",
      "State": "Uttaranchal",
      "District": "Garhwal"
    },
    {
      "City": "Kotekara",
      "State": "Karnataka",
      "District": "Dakshina Kannada"
    },
    {
      "City": "Kothagudem",
      "State": "Andhra Pradesh",
      "District": "Khammam"
    },
    {
      "City": "Kothamangalam",
      "State": "Kerala",
      "District": "Ernakulam"
    },
    {
      "City": "Kothavalasa",
      "State": "Andhra Pradesh",
      "District": "Vizianagaram"
    },
    {
      "City": "Kothi",
      "State": "Madhya Pradesh",
      "District": "Satna"
    },
    {
      "City": "Kothinallur",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Kothnur",
      "State": "Karnataka",
      "District": "Bangalore"
    },
    {
      "City": "Kotkhai",
      "State": "Himachal Pradesh",
      "District": "Shimla"
    },
    {
      "City": "Kotma",
      "State": "Madhya Pradesh",
      "District": "Shahdol"
    },
    {
      "City": "Kotpad",
      "State": "Orissa",
      "District": "Koraput"
    },
    {
      "City": "Kotputli",
      "State": "Rajasthan",
      "District": "Jaipur"
    },
    {
      "City": "Kotra",
      "State": "Uttar Pradesh",
      "District": "Jalaun"
    },
    {
      "City": "Kottaiyur",
      "State": "Tamil Nadu",
      "District": "Sivaganga"
    },
    {
      "City": "Kottakuppam",
      "State": "Tamil Nadu",
      "District": "Viluppuram"
    },
    {
      "City": "Kottaram",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Kottayam",
      "State": "Kerala",
      "District": "Kottayam"
    },
    {
      "City": "Kottayam-Malabar",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Kottivakkam",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Kottur",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Kotturu",
      "State": "Karnataka",
      "District": "Bellary"
    },
    {
      "City": "Kottuvally",
      "State": "Kerala",
      "District": "Ernakulam"
    },
    {
      "City": "Kotwa",
      "State": "Uttar Pradesh",
      "District": "Varanasi"
    },
    {
      "City": "Kouthanallur",
      "State": "Tamil Nadu",
      "District": "Thiruvarur"
    },
    {
      "City": "Kovilpatti",
      "State": "Tamil Nadu",
      "District": "Toothukudi"
    },
    {
      "City": "Kovurpalle",
      "State": "Andhra Pradesh",
      "District": "Nellore"
    },
    {
      "City": "Kovvur",
      "State": "Andhra Pradesh",
      "District": "West Godavari"
    },
    {
      "City": "Kozhikode",
      "State": "Kerala",
      "District": "Kozhikode"
    },
    {
      "City": "Krishnagiri",
      "State": "Tamil Nadu",
      "District": "Dharmapuri"
    },
    {
      "City": "Krishnanagar",
      "State": "West Bengal",
      "District": "Nadia"
    },
    {
      "City": "Krishnapur",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "Krishnarajanagar",
      "State": "Karnataka",
      "District": "Mysore"
    },
    {
      "City": "Krishnarajapura",
      "State": "Karnataka",
      "District": "Bangalore"
    },
    {
      "City": "Krishnarajasagara",
      "State": "Karnataka",
      "District": "Mandya"
    },
    {
      "City": "Krishnarajpet",
      "State": "Karnataka",
      "District": "Mandya"
    },
    {
      "City": "Krishnarayapuram",
      "State": "Tamil Nadu",
      "District": "Kapur"
    },
    {
      "City": "Krishnasamudram",
      "State": "Tamil Nadu",
      "District": "Tiruchirappalli"
    },
    {
      "City": "Kshidirpur",
      "State": "West Bengal",
      "District": "Nadia"
    },
    {
      "City": "Kshirpai",
      "State": "West Bengal",
      "District": "Medinipur"
    },
    {
      "City": "Kuchaman City",
      "State": "Rajasthan",
      "District": "Nagaur"
    },
    {
      "City": "Kuchanur",
      "State": "Tamil Nadu",
      "District": "Theni"
    },
    {
      "City": "Kuchera",
      "State": "Rajasthan",
      "District": "Nagaur"
    },
    {
      "City": "Kud",
      "State": "Jammu & Kashmir",
      "District": "Udhampur"
    },
    {
      "City": "Kudal",
      "State": "Maharashtra",
      "District": "Sindhudurg"
    },
    {
      "City": "Kudchi",
      "State": "Karnataka",
      "District": "Belgaum"
    },
    {
      "City": "Kudligi",
      "State": "Karnataka",
      "District": "Bellary"
    },
    {
      "City": "Kudlu",
      "State": "Kerala",
      "District": "Kasaragod"
    },
    {
      "City": "Kudremukh",
      "State": "Karnataka",
      "District": "Chikmagalur"
    },
    {
      "City": "Kuhalur",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Kuju",
      "State": "Jharkhand",
      "District": "Hazaribag"
    },
    {
      "City": "Kukatpalle",
      "State": "Andhra Pradesh",
      "District": "Rangareddi"
    },
    {
      "City": "Kukernag",
      "State": "Jammu & Kashmir",
      "District": "Anantnag"
    },
    {
      "City": "Kukshi",
      "State": "Madhya Pradesh",
      "District": "Dhar"
    },
    {
      "City": "Kul Pahar",
      "State": "Uttar Pradesh",
      "District": "Mahoba"
    },
    {
      "City": "Kulasekarapuram",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Kulgam",
      "State": "Jammu & Kashmir",
      "District": "Anantnag"
    },
    {
      "City": "Kulihanda",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "Kulithalai",
      "State": "Tamil Nadu",
      "District": "Kapur"
    },
    {
      "City": "Kullu",
      "State": "Himachal Pradesh",
      "District": "Kullu"
    },
    {
      "City": "Kulti",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Kumar Kaibarta Gaon",
      "State": "Assam",
      "District": "Jorhat"
    },
    {
      "City": "Kumarapalayam",
      "State": "Tamil Nadu",
      "District": "Namakkal"
    },
    {
      "City": "Kumarapuram",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Kumarghat",
      "State": "Tripura",
      "District": "North Tripura"
    },
    {
      "City": "Kumbakonam",
      "State": "Tamil Nadu",
      "District": "Thanjavur"
    },
    {
      "City": "Kumbhkot",
      "State": "Rajasthan",
      "District": "Kota"
    },
    {
      "City": "Kumbhraj",
      "State": "Madhya Pradesh",
      "District": "Guna"
    },
    {
      "City": "Kumbi",
      "State": "Manipur",
      "District": "Bishnupur"
    },
    {
      "City": "Kumhari",
      "State": "Chhattisgarh",
      "District": "Durg"
    },
    {
      "City": "Kumher",
      "State": "Rajasthan",
      "District": "Bharatpur"
    },
    {
      "City": "Kumta",
      "State": "Karnataka",
      "District": "Uttara Kannada"
    },
    {
      "City": "Kunda",
      "State": "Uttar Pradesh",
      "District": "Pratapgarh"
    },
    {
      "City": "Kundalwadi",
      "State": "Maharashtra",
      "District": "Nanded"
    },
    {
      "City": "Kundapura",
      "State": "Karnataka",
      "District": "Udupi"
    },
    {
      "City": "Kundarki",
      "State": "Uttar Pradesh",
      "District": "Moradabad"
    },
    {
      "City": "Kundgol",
      "State": "Karnataka",
      "District": "Dharwad"
    },
    {
      "City": "Kundrathur",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Kunigal",
      "State": "Karnataka",
      "District": "Tumkur"
    },
    {
      "City": "Kuniyamuthur",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Kunjaban",
      "State": "Tripura",
      "District": "West Tripura"
    },
    {
      "City": "Kunnamkulam",
      "State": "Kerala",
      "District": "Thrissur"
    },
    {
      "City": "Kunnathur",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Kunustara",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Kunwargaon",
      "State": "Uttar Pradesh",
      "District": "Budaun"
    },
    {
      "City": "Kunzer",
      "State": "Jammu & Kashmir",
      "District": "Baramula"
    },
    {
      "City": "Kuppam",
      "State": "Andhra Pradesh",
      "District": "Chittoor"
    },
    {
      "City": "Kupwara",
      "State": "Jammu & Kashmir",
      "District": "Kupwara"
    },
    {
      "City": "Kurali",
      "State": "Punjab",
      "District": "Rupnagar"
    },
    {
      "City": "Kuraoli",
      "State": "Uttar Pradesh",
      "District": "Mainpuri"
    },
    {
      "City": "Kurara",
      "State": "Uttar Pradesh",
      "District": "Hamirpur"
    },
    {
      "City": "Kurduvadi",
      "State": "Maharashtra",
      "District": "Solapur"
    },
    {
      "City": "Kureekkad",
      "State": "Kerala",
      "District": "Ernakulam"
    },
    {
      "City": "Kurgunta",
      "State": "Karnataka",
      "District": "Gulbarga"
    },
    {
      "City": "Kurichi",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Kurinjipadi",
      "State": "Tamil Nadu",
      "District": "Cuddalore"
    },
    {
      "City": "Kurnool",
      "State": "Andhra Pradesh",
      "District": "Kurnool"
    },
    {
      "City": "Kurpania",
      "State": "Jharkhand",
      "District": "Bokaro"
    },
    {
      "City": "Kursath",
      "State": "Uttar Pradesh",
      "District": "Hardoi"
    },
    {
      "City": "Kursath",
      "State": "Uttar Pradesh",
      "District": "Unnao"
    },
    {
      "City": "Kurseong",
      "State": "West Bengal",
      "District": "Darjiling"
    },
    {
      "City": "Kurthi Jafarpur",
      "State": "Uttar Pradesh",
      "District": "Mau"
    },
    {
      "City": "Kurud",
      "State": "Chhattisgarh",
      "District": "Dhamtari"
    },
    {
      "City": "Kurudampalayam",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Kurumbalur",
      "State": "Tamil Nadu",
      "District": "Perambalur"
    },
    {
      "City": "Kurumbapet",
      "State": "Pondicherry *",
      "District": "Pondicherry"
    },
    {
      "City": "Kurundvad",
      "State": "Maharashtra",
      "District": "Kolhapur"
    },
    {
      "City": "Kurwai",
      "State": "Madhya Pradesh",
      "District": "Vidisha"
    },
    {
      "City": "Kusgaon Budruk",
      "State": "Maharashtra",
      "District": "Pune"
    },
    {
      "City": "Kushalgarh",
      "State": "Rajasthan",
      "District": "Banswara"
    },
    {
      "City": "Kushalnagar",
      "State": "Karnataka",
      "District": "Kodagu"
    },
    {
      "City": "Kushinagar",
      "State": "Uttar Pradesh",
      "District": "Kushinagar"
    },
    {
      "City": "Kushtagi",
      "State": "Karnataka",
      "District": "Koppal"
    },
    {
      "City": "Kusmara",
      "State": "Uttar Pradesh",
      "District": "Mainpuri"
    },
    {
      "City": "Kustai",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Kuthalam",
      "State": "Tamil Nadu",
      "District": "Nagapattinam"
    },
    {
      "City": "Kutiyana",
      "State": "Gujarat",
      "District": "Porbandar"
    },
    {
      "City": "Kuzhithurai",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Kwakta",
      "State": "Manipur",
      "District": "Bishnupur"
    },
    {
      "City": "Kyathampalle",
      "State": "Andhra Pradesh",
      "District": "Adilabad"
    },
    {
      "City": "Kymore",
      "State": "Madhya Pradesh",
      "District": "Katni"
    },
    {
      "City": "L.B. Nagar",
      "State": "Andhra Pradesh",
      "District": "Rangareddi"
    },
    {
      "City": "Labbaikudikadu",
      "State": "Tamil Nadu",
      "District": "Perambalur"
    },
    {
      "City": "Lachhmangarh",
      "State": "Rajasthan",
      "District": "Sikar"
    },
    {
      "City": "Ladnu",
      "State": "Rajasthan",
      "District": "Nagaur"
    },
    {
      "City": "Ladrawan",
      "State": "Haryana",
      "District": "Jhajjar"
    },
    {
      "City": "Ladwa",
      "State": "Haryana",
      "District": "Kurukshetra"
    },
    {
      "City": "Lahar",
      "State": "Madhya Pradesh",
      "District": "Bhind"
    },
    {
      "City": "Laharpur",
      "State": "Uttar Pradesh",
      "District": "Sitapur"
    },
    {
      "City": "Lakarka",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Lakhenpur",
      "State": "Jammu & Kashmir",
      "District": "Kathua"
    },
    {
      "City": "Lakheri",
      "State": "Rajasthan",
      "District": "Bundi"
    },
    {
      "City": "Lakhimpur",
      "State": "Uttar Pradesh",
      "District": "Kheri"
    },
    {
      "City": "Lakhipur",
      "State": "Assam",
      "District": "Goalpara"
    },
    {
      "City": "Lakhipur",
      "State": "Assam",
      "District": "Cachar"
    },
    {
      "City": "Lakhisarai",
      "State": "Bihar",
      "District": "Lakhisarai"
    },
    {
      "City": "Lakhna",
      "State": "Uttar Pradesh",
      "District": "Etawah"
    },
    {
      "City": "Lakhnadon",
      "State": "Madhya Pradesh",
      "District": "Seoni"
    },
    {
      "City": "Lakkampatti",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Laksar",
      "State": "Uttaranchal",
      "District": "Hardwar"
    },
    {
      "City": "Lakshmeshwar",
      "State": "Karnataka",
      "District": "Gadag"
    },
    {
      "City": "Lal Gopalganj Nindaura",
      "State": "Uttar Pradesh",
      "District": "Allahabad"
    },
    {
      "City": "Lala",
      "State": "Assam",
      "District": "Hailakandi"
    },
    {
      "City": "Lalganj",
      "State": "Bihar",
      "District": "Vaishali"
    },
    {
      "City": "Lalganj",
      "State": "Uttar Pradesh",
      "District": "Rae Bareli"
    },
    {
      "City": "Lalgudi",
      "State": "Tamil Nadu",
      "District": "Tiruchirappalli"
    },
    {
      "City": "Lalitpur",
      "State": "Uttar Pradesh",
      "District": "Lalitpur"
    },
    {
      "City": "Lalkuan",
      "State": "Uttaranchal",
      "District": "Nainital"
    },
    {
      "City": "Lalpet",
      "State": "Tamil Nadu",
      "District": "Cuddalore"
    },
    {
      "City": "Lalsot",
      "State": "Rajasthan",
      "District": "Dausa"
    },
    {
      "City": "Lamai",
      "State": "Manipur",
      "District": "Imphal East"
    },
    {
      "City": "Lambha",
      "State": "Gujarat",
      "District": "Ahmadabad"
    },
    {
      "City": "Lamjaotongba",
      "State": "Manipur",
      "District": "Imphal West"
    },
    {
      "City": "Lamshang",
      "State": "Manipur",
      "District": "Imphal West"
    },
    {
      "City": "Landaura",
      "State": "Uttaranchal",
      "District": "Hardwar"
    },
    {
      "City": "Landour",
      "State": "Uttaranchal",
      "District": "Dehradun"
    },
    {
      "City": "Lanja",
      "State": "Maharashtra",
      "District": "Ratnagiri"
    },
    {
      "City": "Lanka",
      "State": "Assam",
      "District": "Nagaon"
    },
    {
      "City": "Lansdowne",
      "State": "Uttaranchal",
      "District": "Garhwal"
    },
    {
      "City": "Lapanga",
      "State": "Jharkhand",
      "District": "Hazaribag"
    },
    {
      "City": "Lar",
      "State": "Uttar Pradesh",
      "District": "Deoria"
    },
    {
      "City": "Lasalgaon",
      "State": "Maharashtra",
      "District": "Nashik"
    },
    {
      "City": "Latehar",
      "State": "Jharkhand",
      "District": "Palamu"
    },
    {
      "City": "Lateri",
      "State": "Madhya Pradesh",
      "District": "Vidisha"
    },
    {
      "City": "Lathi",
      "State": "Gujarat",
      "District": "Amreli"
    },
    {
      "City": "Lattikata",
      "State": "Orissa",
      "District": "Sundargarh"
    },
    {
      "City": "Latur",
      "State": "Maharashtra",
      "District": "Latur"
    },
    {
      "City": "Laundi",
      "State": "Madhya Pradesh",
      "District": "Chhatarpur"
    },
    {
      "City": "Lauthaha",
      "State": "Bihar",
      "District": "Purba Champaran"
    },
    {
      "City": "Lawar NP",
      "State": "Uttar Pradesh",
      "District": "Meerut"
    },
    {
      "City": "Ledwa Mahua",
      "State": "Uttar Pradesh",
      "District": "Sant Kabir Nagar"
    },
    {
      "City": "Leh",
      "State": "Jammu & Kashmir",
      "District": "Leh (Ladakh)"
    },
    {
      "City": "Lehragaga",
      "State": "Punjab",
      "District": "Sangrur"
    },
    {
      "City": "Lengpui",
      "State": "Mizoram",
      "District": "Mamit"
    },
    {
      "City": "Libas Pur",
      "State": "Delhi *",
      "District": "North West"
    },
    {
      "City": "Lidhorakhas",
      "State": "Madhya Pradesh",
      "District": "Tikamgarh"
    },
    {
      "City": "Lido Tikok",
      "State": "Assam",
      "District": "Tinsukia"
    },
    {
      "City": "Lido Town",
      "State": "Assam",
      "District": "Tinsukia"
    },
    {
      "City": "Lilong (Imphal West)",
      "State": "Manipur",
      "District": "Imphal West"
    },
    {
      "City": "Lilong (Thoubal)",
      "State": "Manipur",
      "District": "Thoubal & Imphal West"
    },
    {
      "City": "Limbdi",
      "State": "Gujarat",
      "District": "Surendranagar"
    },
    {
      "City": "Limla",
      "State": "Gujarat",
      "District": "Surat"
    },
    {
      "City": "Lingiyadih",
      "State": "Chhattisgarh",
      "District": "Bilaspur"
    },
    {
      "City": "Lingsugur",
      "State": "Karnataka",
      "District": "Raichur"
    },
    {
      "City": "Llayangudi",
      "State": "Tamil Nadu",
      "District": "Sivaganga"
    },
    {
      "City": "Lodhian Khas",
      "State": "Punjab",
      "District": "Jalandhar"
    },
    {
      "City": "Lodhikheda",
      "State": "Madhya Pradesh",
      "District": "Chhindwara"
    },
    {
      "City": "Loha",
      "State": "Maharashtra",
      "District": "Nanded"
    },
    {
      "City": "Lohaghat",
      "State": "Uttaranchal",
      "District": "Champawat"
    },
    {
      "City": "Loharda",
      "State": "Madhya Pradesh",
      "District": "Dewas"
    },
    {
      "City": "Lohardaga",
      "State": "Jharkhand",
      "District": "Lohardaga"
    },
    {
      "City": "Loharu",
      "State": "Haryana",
      "District": "Bhiwani"
    },
    {
      "City": "Lohta",
      "State": "Uttar Pradesh",
      "District": "Varanasi"
    },
    {
      "City": "Lonar",
      "State": "Maharashtra",
      "District": "Buldana"
    },
    {
      "City": "Lonavala",
      "State": "Maharashtra",
      "District": "Pune"
    },
    {
      "City": "Londa",
      "State": "Karnataka",
      "District": "Belgaum"
    },
    {
      "City": "Longowal",
      "State": "Punjab",
      "District": "Sangrur"
    },
    {
      "City": "Loni",
      "State": "Uttar Pradesh",
      "District": "Ghaziabad"
    },
    {
      "City": "Lormi",
      "State": "Chhattisgarh",
      "District": "Bilaspur"
    },
    {
      "City": "Losal",
      "State": "Rajasthan",
      "District": "Sikar"
    },
    {
      "City": "Loyabad",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Lucknow",
      "State": "Uttar Pradesh",
      "District": "Lucknow"
    },
    {
      "City": "Lucknow",
      "State": "Uttar Pradesh",
      "District": "Lucknow"
    },
    {
      "City": "Ludhiana",
      "State": "Punjab",
      "District": "Ludhiana"
    },
    {
      "City": "Lumding",
      "State": "Assam",
      "District": "Nagaon"
    },
    {
      "City": "Lumding Rly Colony",
      "State": "Assam",
      "District": "Nagaon"
    },
    {
      "City": "Lunawada",
      "State": "Gujarat",
      "District": "Panch Mahals"
    },
    {
      "City": "Lunglei",
      "State": "Mizoram",
      "District": "Lunglei"
    },
    {
      "City": "Machalpur",
      "State": "Madhya Pradesh",
      "District": "Rajgarh"
    },
    {
      "City": "Macherla",
      "State": "Andhra Pradesh",
      "District": "Guntur"
    },
    {
      "City": "Machhiwara",
      "State": "Punjab",
      "District": "Ludhiana"
    },
    {
      "City": "Machhlishahr",
      "State": "Uttar Pradesh",
      "District": "Jaunpur"
    },
    {
      "City": "Machilipatnam",
      "State": "Andhra Pradesh",
      "District": "Krishna"
    },
    {
      "City": "Madambakkam",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Madanapalle",
      "State": "Andhra Pradesh",
      "District": "Chittoor"
    },
    {
      "City": "Madanpur",
      "State": "West Bengal",
      "District": "Nadia"
    },
    {
      "City": "Madanrting",
      "State": "Meghalaya",
      "District": "East Khasi Hills"
    },
    {
      "City": "Madaram",
      "State": "Andhra Pradesh",
      "District": "Adilabad"
    },
    {
      "City": "Madathukulam",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Madavaram",
      "State": "Tamil Nadu",
      "District": "Thiruvallur"
    },
    {
      "City": "Maddur",
      "State": "Karnataka",
      "District": "Mandya"
    },
    {
      "City": "Madhavnagar",
      "State": "Maharashtra",
      "District": "Sangli"
    },
    {
      "City": "Madhepura",
      "State": "Bihar",
      "District": "Madhepura"
    },
    {
      "City": "Madhoganj",
      "State": "Uttar Pradesh",
      "District": "Hardoi"
    },
    {
      "City": "Madhogarh",
      "State": "Uttar Pradesh",
      "District": "Jalaun"
    },
    {
      "City": "Madhubani",
      "State": "Bihar",
      "District": "Madhubani"
    },
    {
      "City": "Madhugiri",
      "State": "Karnataka",
      "District": "Tumkur"
    },
    {
      "City": "Madhupur",
      "State": "Jharkhand",
      "District": "Deoghar"
    },
    {
      "City": "Madhusudanpur",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "Madhyamgram",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Madikeri",
      "State": "Karnataka",
      "District": "Kodagu"
    },
    {
      "City": "Madippakkam",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Madukkarai",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Madukkur",
      "State": "Tamil Nadu",
      "District": "Thanjavur"
    },
    {
      "City": "Madurai",
      "State": "Tamil Nadu",
      "District": "Madurai"
    },
    {
      "City": "Maduranthakam",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Maduravoyal",
      "State": "Tamil Nadu",
      "District": "Thiruvallur"
    },
    {
      "City": "Magadi",
      "State": "Karnataka",
      "District": "Bangalore Rural"
    },
    {
      "City": "Magam",
      "State": "Jammu & Kashmir",
      "District": "Badgam"
    },
    {
      "City": "Maghar",
      "State": "Uttar Pradesh",
      "District": "Sant Kabir Nagar"
    },
    {
      "City": "Mahabaleshwar",
      "State": "Maharashtra",
      "District": "Satara"
    },
    {
      "City": "Mahaban",
      "State": "Uttar Pradesh",
      "District": "Mathura"
    },
    {
      "City": "Mahad",
      "State": "Maharashtra",
      "District": "Raigarh"
    },
    {
      "City": "Mahadevapura",
      "State": "Karnataka",
      "District": "Bangalore"
    },
    {
      "City": "Mahadula",
      "State": "Maharashtra",
      "District": "Nagpur"
    },
    {
      "City": "Mahalingpur",
      "State": "Karnataka",
      "District": "Bagalkot"
    },
    {
      "City": "Maham",
      "State": "Haryana",
      "District": "Rohtak"
    },
    {
      "City": "Maharajganj",
      "State": "Bihar",
      "District": "Siwan"
    },
    {
      "City": "Maharajpur",
      "State": "Madhya Pradesh",
      "District": "Chhatarpur"
    },
    {
      "City": "Mahasamund",
      "State": "Chhattisgarh",
      "District": "Mahasamund"
    },
    {
      "City": "Mahbubnagar",
      "State": "Andhra Pradesh",
      "District": "Mahbubnagar"
    },
    {
      "City": "Mahe",
      "State": "Pondicherry *",
      "District": "Mahe"
    },
    {
      "City": "Mahemdavad",
      "State": "Gujarat",
      "District": "Kheda"
    },
    {
      "City": "Mahendragarh",
      "State": "Haryana",
      "District": "Mahendragarh"
    },
    {
      "City": "Mahesana",
      "State": "Gujarat",
      "District": "Mahesana"
    },
    {
      "City": "Maheshtala",
      "State": "West Bengal",
      "District": "South Twentyfour Parganas"
    },
    {
      "City": "Maheshwar",
      "State": "Madhya Pradesh",
      "District": "West Nimar"
    },
    {
      "City": "Mahiari",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Mahidpur",
      "State": "Madhya Pradesh",
      "District": "Ujjain"
    },
    {
      "City": "Mahilpur",
      "State": "Punjab",
      "District": "Hoshiarpur"
    },
    {
      "City": "Mahira",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Mahmudabad",
      "State": "Uttar Pradesh",
      "District": "Sitapur"
    },
    {
      "City": "Mahnar Bazar",
      "State": "Bihar",
      "District": "Vaishali"
    },
    {
      "City": "Mahoba",
      "State": "Uttar Pradesh",
      "District": "Mahoba"
    },
    {
      "City": "Maholi",
      "State": "Uttar Pradesh",
      "District": "Sitapur"
    },
    {
      "City": "Mahona",
      "State": "Uttar Pradesh",
      "District": "Lucknow"
    },
    {
      "City": "Mahrajganj",
      "State": "Uttar Pradesh",
      "District": "Rae Bareli"
    },
    {
      "City": "Mahrajganj",
      "State": "Uttar Pradesh",
      "District": "Maharajganj"
    },
    {
      "City": "Mahrajganj",
      "State": "Uttar Pradesh",
      "District": "Azamgarh"
    },
    {
      "City": "Mahroni",
      "State": "Uttar Pradesh",
      "District": "Lalitpur"
    },
    {
      "City": "Mahu Kalan",
      "State": "Rajasthan",
      "District": "Sawai Madhopur"
    },
    {
      "City": "Mahua Dabra Haripura",
      "State": "Uttaranchal",
      "District": "Udham Singh Nagar"
    },
    {
      "City": "Mahua Kheraganj",
      "State": "Uttaranchal",
      "District": "Udham Singh Nagar"
    },
    {
      "City": "Mahudha",
      "State": "Gujarat",
      "District": "Kheda"
    },
    {
      "City": "Mahur",
      "State": "Assam",
      "District": "North Cachar Hills"
    },
    {
      "City": "Mahuva",
      "State": "Gujarat",
      "District": "Bhavnagar"
    },
    {
      "City": "Mahuvar",
      "State": "Gujarat",
      "District": "Navsari"
    },
    {
      "City": "Mahwa",
      "State": "Rajasthan",
      "District": "Dausa"
    },
    {
      "City": "Maibong",
      "State": "Assam",
      "District": "North Cachar Hills"
    },
    {
      "City": "Maihar",
      "State": "Madhya Pradesh",
      "District": "Satna"
    },
    {
      "City": "Mailani",
      "State": "Uttar Pradesh",
      "District": "Kheri"
    },
    {
      "City": "Mainaguri",
      "State": "West Bengal",
      "District": "Jalpaiguri"
    },
    {
      "City": "Maindargi",
      "State": "Maharashtra",
      "District": "Solapur"
    },
    {
      "City": "Mainpuri",
      "State": "Uttar Pradesh",
      "District": "Mainpuri"
    },
    {
      "City": "Mairang",
      "State": "Meghalaya",
      "District": "West Khasi Hills"
    },
    {
      "City": "Mairwa",
      "State": "Bihar",
      "District": "Siwan"
    },
    {
      "City": "Maithon",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Majgaon",
      "State": "Assam",
      "District": "Sonitpur"
    },
    {
      "City": "Majhara Pipar Ehatmali",
      "State": "Uttar Pradesh",
      "District": "Unnao"
    },
    {
      "City": "Majhauli Raj",
      "State": "Uttar Pradesh",
      "District": "Deoria"
    },
    {
      "City": "Majholi",
      "State": "Madhya Pradesh",
      "District": "Jabalpur"
    },
    {
      "City": "Majitha",
      "State": "Punjab",
      "District": "Amritsar"
    },
    {
      "City": "Makarba",
      "State": "Gujarat",
      "District": "Ahmadabad"
    },
    {
      "City": "Makardaha",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Makhdumpur",
      "State": "Bihar",
      "District": "Jehanabad"
    },
    {
      "City": "Makhu",
      "State": "Punjab",
      "District": "Firozpur"
    },
    {
      "City": "Makrana",
      "State": "Rajasthan",
      "District": "Nagaur"
    },
    {
      "City": "Makronia",
      "State": "Madhya Pradesh",
      "District": "Sagar"
    },
    {
      "City": "Maksi",
      "State": "Madhya Pradesh",
      "District": "Shajapur"
    },
    {
      "City": "Maktampur",
      "State": "Gujarat",
      "District": "Bharuch"
    },
    {
      "City": "Makum",
      "State": "Assam",
      "District": "Tinsukia"
    },
    {
      "City": "Makundapur",
      "State": "Orissa",
      "District": "Ganjam"
    },
    {
      "City": "Mal",
      "State": "West Bengal",
      "District": "Jalpaiguri"
    },
    {
      "City": "Malaj Khand",
      "State": "Madhya Pradesh",
      "District": "Balaghat"
    },
    {
      "City": "Malappuram",
      "State": "Kerala",
      "District": "Malappuram"
    },
    {
      "City": "Malavalli",
      "State": "Karnataka",
      "District": "Mandya"
    },
    {
      "City": "Malegaon",
      "State": "Maharashtra",
      "District": "Nashik"
    },
    {
      "City": "Malerkotla",
      "State": "Punjab",
      "District": "Sangrur"
    },
    {
      "City": "Malhargarh",
      "State": "Madhya Pradesh",
      "District": "Mandsaur"
    },
    {
      "City": "Malihabad",
      "State": "Uttar Pradesh",
      "District": "Lucknow"
    },
    {
      "City": "Malkajgiri",
      "State": "Andhra Pradesh",
      "District": "Rangareddi"
    },
    {
      "City": "Malkangiri",
      "State": "Orissa",
      "District": "Malkangiri"
    },
    {
      "City": "Malkapur",
      "State": "Maharashtra",
      "District": "Buldana"
    },
    {
      "City": "Malkapur",
      "State": "Maharashtra",
      "District": "Akola"
    },
    {
      "City": "Malkapur",
      "State": "Maharashtra",
      "District": "Kolhapur"
    },
    {
      "City": "Malkera",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Mallamooppampatti",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Mallankinaru",
      "State": "Tamil Nadu",
      "District": "Virudhunagar"
    },
    {
      "City": "Mallar",
      "State": "Karnataka",
      "District": "Udupi"
    },
    {
      "City": "Mallasamudram",
      "State": "Tamil Nadu",
      "District": "Namakkal"
    },
    {
      "City": "Mallawan",
      "State": "Uttar Pradesh",
      "District": "Hardoi"
    },
    {
      "City": "Mallur",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Maloud",
      "State": "Punjab",
      "District": "Ludhiana"
    },
    {
      "City": "Malout",
      "State": "Punjab",
      "District": "Muktsar"
    },
    {
      "City": "Malpur",
      "State": "Gujarat",
      "District": "Sabar Kantha"
    },
    {
      "City": "Malpura",
      "State": "Rajasthan",
      "District": "Tonk"
    },
    {
      "City": "Malur",
      "State": "Karnataka",
      "District": "Kolar"
    },
    {
      "City": "Malwan",
      "State": "Maharashtra",
      "District": "Sindhudurg"
    },
    {
      "City": "Mamallapuram",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Mamit",
      "State": "Mizoram",
      "District": "Mamit"
    },
    {
      "City": "Mamsapuram",
      "State": "Tamil Nadu",
      "District": "Virudhunagar"
    },
    {
      "City": "Manachanallur",
      "State": "Tamil Nadu",
      "District": "Tiruchirappalli"
    },
    {
      "City": "Manadur",
      "State": "Maharashtra",
      "District": "Sangli"
    },
    {
      "City": "Manali",
      "State": "Tamil Nadu",
      "District": "Thiruvallur"
    },
    {
      "City": "Manali",
      "State": "Himachal Pradesh",
      "District": "Kullu"
    },
    {
      "City": "Manalmedu",
      "State": "Tamil Nadu",
      "District": "Nagapattinam"
    },
    {
      "City": "Manalurpet",
      "State": "Tamil Nadu",
      "District": "Viluppuram"
    },
    {
      "City": "Manamadurai",
      "State": "Tamil Nadu",
      "District": "Sivaganga"
    },
    {
      "City": "Manapakkam",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Manapparai",
      "State": "Tamil Nadu",
      "District": "Tiruchirappalli"
    },
    {
      "City": "Manasa",
      "State": "Madhya Pradesh",
      "District": "Neemuch"
    },
    {
      "City": "Manavadar",
      "State": "Gujarat",
      "District": "Junagadh"
    },
    {
      "City": "Manavalakurichi",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Manawar",
      "State": "Madhya Pradesh",
      "District": "Dhar"
    },
    {
      "City": "Manchar",
      "State": "Maharashtra",
      "District": "Pune"
    },
    {
      "City": "Mancherial",
      "State": "Andhra Pradesh",
      "District": "Adilabad"
    },
    {
      "City": "Mandaikadu",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Mandalgarh",
      "State": "Rajasthan",
      "District": "Bhilwara"
    },
    {
      "City": "Mandamarri",
      "State": "Andhra Pradesh",
      "District": "Adilabad"
    },
    {
      "City": "Mandapam",
      "State": "Tamil Nadu",
      "District": "Ramanathapuram"
    },
    {
      "City": "Mandapeta",
      "State": "Andhra Pradesh",
      "District": "East Godavari"
    },
    {
      "City": "Mandarbani",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Mandav",
      "State": "Madhya Pradesh",
      "District": "Dhar"
    },
    {
      "City": "Mandawa",
      "State": "Rajasthan",
      "District": "Jhunjhunun"
    },
    {
      "City": "Mandawar",
      "State": "Uttar Pradesh",
      "District": "Bijnor"
    },
    {
      "City": "Mandawar",
      "State": "Rajasthan",
      "District": "Dausa"
    },
    {
      "City": "Mandi",
      "State": "Himachal Pradesh",
      "District": "Mandi"
    },
    {
      "City": "Mandi Dabwali",
      "State": "Haryana",
      "District": "Sirsa"
    },
    {
      "City": "Mandideep",
      "State": "Madhya Pradesh",
      "District": "Raisen"
    },
    {
      "City": "Mandla",
      "State": "Madhya Pradesh",
      "District": "Mandla"
    },
    {
      "City": "Mandleshwar",
      "State": "Madhya Pradesh",
      "District": "West Nimar"
    },
    {
      "City": "Mandsaur",
      "State": "Madhya Pradesh",
      "District": "Mandsaur"
    },
    {
      "City": "Mandvi",
      "State": "Gujarat",
      "District": "Kachchh"
    },
    {
      "City": "Mandya",
      "State": "Karnataka",
      "District": "Mandya"
    },
    {
      "City": "Manegaon",
      "State": "Madhya Pradesh",
      "District": "Jabalpur"
    },
    {
      "City": "Manendragarh",
      "State": "Chhattisgarh",
      "District": "Koriya"
    },
    {
      "City": "Maner",
      "State": "Bihar",
      "District": "Patna"
    },
    {
      "City": "Mangadu",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Mangalagiri",
      "State": "Andhra Pradesh",
      "District": "Guntur"
    },
    {
      "City": "Mangalam",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Mangalampet",
      "State": "Tamil Nadu",
      "District": "Cuddalore"
    },
    {
      "City": "Mangaldoi",
      "State": "Assam",
      "District": "Darrang"
    },
    {
      "City": "Mangalore",
      "State": "Karnataka",
      "District": "Dakshina Kannada"
    },
    {
      "City": "Mangalvedhe",
      "State": "Maharashtra",
      "District": "Solapur"
    },
    {
      "City": "Mangan",
      "State": "Sikkim",
      "District": "North"
    },
    {
      "City": "Mangawan",
      "State": "Madhya Pradesh",
      "District": "Rewa"
    },
    {
      "City": "Manglaur",
      "State": "Uttaranchal",
      "District": "Hardwar"
    },
    {
      "City": "Manglaya Sadak",
      "State": "Madhya Pradesh",
      "District": "Indore"
    },
    {
      "City": "Mango",
      "State": "Jharkhand",
      "District": "Purbi Singhbhum"
    },
    {
      "City": "Mangrol",
      "State": "Gujarat",
      "District": "Junagadh"
    },
    {
      "City": "Mangrol",
      "State": "Rajasthan",
      "District": "Baran"
    },
    {
      "City": "Mangrulpir",
      "State": "Maharashtra",
      "District": "Washim"
    },
    {
      "City": "Manihari",
      "State": "Bihar",
      "District": "Katihar"
    },
    {
      "City": "Manikpur",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Manikpur",
      "State": "Uttar Pradesh",
      "District": "Pratapgarh"
    },
    {
      "City": "Manikpur Sarhat",
      "State": "Uttar Pradesh",
      "District": "Chitrakoot"
    },
    {
      "City": "Manimutharu",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Maniyar",
      "State": "Uttar Pradesh",
      "District": "Ballia"
    },
    {
      "City": "Manjeri",
      "State": "Kerala",
      "District": "Malappuram"
    },
    {
      "City": "Manjeshwar",
      "State": "Kerala",
      "District": "Kasaragod"
    },
    {
      "City": "Manjhanpur",
      "State": "Uttar Pradesh",
      "District": "Kaushambi"
    },
    {
      "City": "Manjlegaon",
      "State": "Maharashtra",
      "District": "Bid"
    },
    {
      "City": "Mankachar",
      "State": "Assam",
      "District": "Dhubri"
    },
    {
      "City": "Mankapur",
      "State": "Uttar Pradesh",
      "District": "Gonda"
    },
    {
      "City": "Manmad",
      "State": "Maharashtra",
      "District": "Nashik"
    },
    {
      "City": "Mannargudi",
      "State": "Tamil Nadu",
      "District": "Thiruvarur"
    },
    {
      "City": "Manohar Thana",
      "State": "Rajasthan",
      "District": "Jhalawar"
    },
    {
      "City": "Manor",
      "State": "Maharashtra",
      "District": "Thane"
    },
    {
      "City": "Manpur",
      "State": "Madhya Pradesh",
      "District": "Indore"
    },
    {
      "City": "Mansa",
      "State": "Gujarat",
      "District": "Gandhinagar"
    },
    {
      "City": "Mansa",
      "State": "Punjab",
      "District": "Mansa"
    },
    {
      "City": "Mansar",
      "State": "Maharashtra",
      "District": "Nagpur"
    },
    {
      "City": "Mansinhapur",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Mant Khas",
      "State": "Himachal Pradesh",
      "District": "Kangra"
    },
    {
      "City": "Manugur",
      "State": "Andhra Pradesh",
      "District": "Khammam"
    },
    {
      "City": "Manvi",
      "State": "Karnataka",
      "District": "Raichur"
    },
    {
      "City": "Manwath",
      "State": "Maharashtra",
      "District": "Parbhani"
    },
    {
      "City": "Mappilaiurani",
      "State": "Tamil Nadu",
      "District": "Toothukudi"
    },
    {
      "City": "Mapusa",
      "State": "Goa",
      "District": "North Goa"
    },
    {
      "City": "Maradu",
      "State": "Kerala",
      "District": "Ernakulam"
    },
    {
      "City": "Maraimalainagar",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Marakkanam",
      "State": "Tamil Nadu",
      "District": "Viluppuram"
    },
    {
      "City": "Maramangalathupatti",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Marandahalli",
      "State": "Tamil Nadu",
      "District": "Dharmapuri"
    },
    {
      "City": "Marathakkara",
      "State": "Kerala",
      "District": "Thrissur"
    },
    {
      "City": "Marehra",
      "State": "Uttar Pradesh",
      "District": "Etah"
    },
    {
      "City": "Margao",
      "State": "Goa",
      "District": "South Goa"
    },
    {
      "City": "Margherita",
      "State": "Assam",
      "District": "Tinsukia"
    },
    {
      "City": "Marhaura",
      "State": "Bihar",
      "District": "Saran"
    },
    {
      "City": "Mariahu",
      "State": "Uttar Pradesh",
      "District": "Jaunpur"
    },
    {
      "City": "Mariani",
      "State": "Assam",
      "District": "Jorhat"
    },
    {
      "City": "Marigaon",
      "State": "Assam",
      "District": "Marigaon"
    },
    {
      "City": "Markapur",
      "State": "Andhra Pradesh",
      "District": "Prakasam"
    },
    {
      "City": "Markayankottai",
      "State": "Tamil Nadu",
      "District": "Theni"
    },
    {
      "City": "Marma",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Maruadih Rly. Settlement",
      "State": "Uttar Pradesh",
      "District": "Varanasi"
    },
    {
      "City": "Marudur",
      "State": "Tamil Nadu",
      "District": "Kapur"
    },
    {
      "City": "Marungur",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Marwar Junction",
      "State": "Rajasthan",
      "District": "Pali"
    },
    {
      "City": "Masaurhi",
      "State": "Bihar",
      "District": "Patna"
    },
    {
      "City": "Maslandapur",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Maswasi",
      "State": "Uttar Pradesh",
      "District": "Rampur"
    },
    {
      "City": "Mataundh",
      "State": "Uttar Pradesh",
      "District": "Banda"
    },
    {
      "City": "Mathabhanga",
      "State": "West Bengal",
      "District": "Koch Bihar"
    },
    {
      "City": "Matheran",
      "State": "Maharashtra",
      "District": "Raigarh"
    },
    {
      "City": "Mathigiri",
      "State": "Tamil Nadu",
      "District": "Dharmapuri"
    },
    {
      "City": "Mathura",
      "State": "Uttar Pradesh",
      "District": "Mathura"
    },
    {
      "City": "Mathura",
      "State": "Uttar Pradesh",
      "District": "Mathura"
    },
    {
      "City": "Mattan",
      "State": "Jammu & Kashmir",
      "District": "Anantnag"
    },
    {
      "City": "Mattannur",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Mau",
      "State": "Madhya Pradesh",
      "District": "Bhind"
    },
    {
      "City": "Mau Aima",
      "State": "Uttar Pradesh",
      "District": "Allahabad"
    },
    {
      "City": "Maudaha",
      "State": "Uttar Pradesh",
      "District": "Hamirpur"
    },
    {
      "City": "Mauganj",
      "State": "Madhya Pradesh",
      "District": "Rewa"
    },
    {
      "City": "Maunath Bhanjan",
      "State": "Uttar Pradesh",
      "District": "Mau"
    },
    {
      "City": "Maur",
      "State": "Punjab",
      "District": "Bathinda"
    },
    {
      "City": "Mauranipur",
      "State": "Uttar Pradesh",
      "District": "Jhansi"
    },
    {
      "City": "Maurawan",
      "State": "Uttar Pradesh",
      "District": "Unnao"
    },
    {
      "City": "Mavelikkara",
      "State": "Kerala",
      "District": "Alappuzha"
    },
    {
      "City": "Mavilayi",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Mavoor",
      "State": "Kerala",
      "District": "Kozhikode"
    },
    {
      "City": "Mawana",
      "State": "Uttar Pradesh",
      "District": "Meerut"
    },
    {
      "City": "Mawlai",
      "State": "Meghalaya",
      "District": "East Khasi Hills"
    },
    {
      "City": "Mayang Imphal",
      "State": "Manipur",
      "District": "Imphal West"
    },
    {
      "City": "Mayiladuthurai",
      "State": "Tamil Nadu",
      "District": "Nagapattinam"
    },
    {
      "City": "Mecheri",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Medak",
      "State": "Andhra Pradesh",
      "District": "Medak"
    },
    {
      "City": "Medinipur",
      "State": "West Bengal",
      "District": "Medinipur"
    },
    {
      "City": "Meenambakkam",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Meerpet",
      "State": "Andhra Pradesh",
      "District": "Rangareddi"
    },
    {
      "City": "Meerut",
      "State": "Uttar Pradesh",
      "District": "Meerut"
    },
    {
      "City": "Meerut",
      "State": "Uttar Pradesh",
      "District": "Meerut"
    },
    {
      "City": "Meghahatuburu Forest village",
      "State": "Jharkhand",
      "District": "Pashchimi Singhbhum"
    },
    {
      "City": "Meghnagar",
      "State": "Madhya Pradesh",
      "District": "Jhabua"
    },
    {
      "City": "Meghraj",
      "State": "Gujarat",
      "District": "Sabar Kantha"
    },
    {
      "City": "Mehara Gaon",
      "State": "Madhya Pradesh",
      "District": "Hoshangabad"
    },
    {
      "City": "Mehatpur Basdehra",
      "State": "Himachal Pradesh",
      "District": "Una"
    },
    {
      "City": "Mehdawal",
      "State": "Uttar Pradesh",
      "District": "Sant Kabir Nagar"
    },
    {
      "City": "Mehgaon",
      "State": "Madhya Pradesh",
      "District": "Bhind"
    },
    {
      "City": "Mehkar",
      "State": "Maharashtra",
      "District": "Buldana"
    },
    {
      "City": "Mehmand",
      "State": "Chhattisgarh",
      "District": "Bilaspur"
    },
    {
      "City": "Mehnagar",
      "State": "Uttar Pradesh",
      "District": "Azamgarh"
    },
    {
      "City": "Mekliganj",
      "State": "West Bengal",
      "District": "Koch Bihar"
    },
    {
      "City": "Melacheval",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Melachokkanathapuram",
      "State": "Tamil Nadu",
      "District": "Theni"
    },
    {
      "City": "Melagaram",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Melamadai",
      "State": "Tamil Nadu",
      "District": "Madurai"
    },
    {
      "City": "Melamaiyur",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Melathiruppanthuruthi",
      "State": "Tamil Nadu",
      "District": "Thanjavur"
    },
    {
      "City": "Melattur",
      "State": "Tamil Nadu",
      "District": "Thanjavur"
    },
    {
      "City": "Melpattampakkam",
      "State": "Tamil Nadu",
      "District": "Cuddalore"
    },
    {
      "City": "Melur",
      "State": "Tamil Nadu",
      "District": "Madurai"
    },
    {
      "City": "Melvisharam",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Memari",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Memnagar",
      "State": "Gujarat",
      "District": "Ahmadabad"
    },
    {
      "City": "Mendu",
      "State": "Uttar Pradesh",
      "District": "Hathras"
    },
    {
      "City": "Mera",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Merta City",
      "State": "Rajasthan",
      "District": "Nagaur"
    },
    {
      "City": "Meru",
      "State": "Jharkhand",
      "District": "Hazaribag"
    },
    {
      "City": "Methala",
      "State": "Kerala",
      "District": "Thrissur"
    },
    {
      "City": "Mettupalayam",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Mettupalayam",
      "State": "Tamil Nadu",
      "District": "Tiruchirappalli"
    },
    {
      "City": "Mettur",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Mhasla",
      "State": "Maharashtra",
      "District": "Raigarh"
    },
    {
      "City": "Mhaswad",
      "State": "Maharashtra",
      "District": "Satara"
    },
    {
      "City": "Mhow Cantt.",
      "State": "Madhya Pradesh",
      "District": "Indore"
    },
    {
      "City": "Mhowgaon",
      "State": "Madhya Pradesh",
      "District": "Indore"
    },
    {
      "City": "Mihijam",
      "State": "Jharkhand",
      "District": "Dumka"
    },
    {
      "City": "Mihona",
      "State": "Madhya Pradesh",
      "District": "Bhind"
    },
    {
      "City": "Milak",
      "State": "Uttar Pradesh",
      "District": "Rampur"
    },
    {
      "City": "Minicoy",
      "State": "Lakshadweep *",
      "District": "Lakshadweep"
    },
    {
      "City": "Minjur",
      "State": "Tamil Nadu",
      "District": "Thiruvallur"
    },
    {
      "City": "Mira-Bhayandar",
      "State": "Maharashtra",
      "District": "Thane"
    },
    {
      "City": "Miranpur",
      "State": "Uttar Pradesh",
      "District": "Muzaffarnagar"
    },
    {
      "City": "Mirganj",
      "State": "Bihar",
      "District": "Gopalganj"
    },
    {
      "City": "Mirganj",
      "State": "Uttar Pradesh",
      "District": "Bareilly"
    },
    {
      "City": "Mirik",
      "State": "West Bengal",
      "District": "Darjiling"
    },
    {
      "City": "Mirpur Turk",
      "State": "Delhi *",
      "District": "North East"
    },
    {
      "City": "Miryalguda",
      "State": "Andhra Pradesh",
      "District": "Nalgonda"
    },
    {
      "City": "Mirzapur-cum-Vindhyachal",
      "State": "Uttar Pradesh",
      "District": "Mirzapur"
    },
    {
      "City": "Misrikh-cum-Neemsar",
      "State": "Uttar Pradesh",
      "District": "Sitapur"
    },
    {
      "City": "Mithapur",
      "State": "Gujarat",
      "District": "Jamnagar"
    },
    {
      "City": "Mithe Pur",
      "State": "Delhi *",
      "District": "South"
    },
    {
      "City": "Modak",
      "State": "Rajasthan",
      "District": "Kota"
    },
    {
      "City": "Modakurichi",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Modasa",
      "State": "Gujarat",
      "District": "Sabar Kantha"
    },
    {
      "City": "Modinagar",
      "State": "Uttar Pradesh",
      "District": "Ghaziabad"
    },
    {
      "City": "Moga",
      "State": "Punjab",
      "District": "Moga"
    },
    {
      "City": "Mogra Badshahpur",
      "State": "Uttar Pradesh",
      "District": "Jaunpur"
    },
    {
      "City": "Mogravadi",
      "State": "Gujarat",
      "District": "Valsad"
    },
    {
      "City": "Mohammadabad",
      "State": "Uttar Pradesh",
      "District": "Farrukhabad"
    },
    {
      "City": "Mohammadabad",
      "State": "Uttar Pradesh",
      "District": "Ghazipur"
    },
    {
      "City": "Mohammadi",
      "State": "Uttar Pradesh",
      "District": "Kheri"
    },
    {
      "City": "Mohan",
      "State": "Uttar Pradesh",
      "District": "Unnao"
    },
    {
      "City": "Mohanpur",
      "State": "Uttar Pradesh",
      "District": "Etah"
    },
    {
      "City": "Mohanpur Mohammadpur",
      "State": "Uttaranchal",
      "District": "Hardwar"
    },
    {
      "City": "Mohanur",
      "State": "Tamil Nadu",
      "District": "Namakkal"
    },
    {
      "City": "Mohgaon",
      "State": "Madhya Pradesh",
      "District": "Chhindwara"
    },
    {
      "City": "Mohiuddinagar",
      "State": "Bihar",
      "District": "Samastipur"
    },
    {
      "City": "Mohiuddinpur",
      "State": "Uttar Pradesh",
      "District": "Meerut"
    },
    {
      "City": "Mohpa",
      "State": "Maharashtra",
      "District": "Nagpur"
    },
    {
      "City": "Mohpada Alias Wasambe",
      "State": "Maharashtra",
      "District": "Raigarh"
    },
    {
      "City": "Moirang",
      "State": "Manipur",
      "District": "Bishnupur"
    },
    {
      "City": "Mokameh",
      "State": "Bihar",
      "District": "Patna"
    },
    {
      "City": "Mokokchung",
      "State": "Nagaland",
      "District": "Mokokchung"
    },
    {
      "City": "Molakalmuru",
      "State": "Karnataka",
      "District": "Chitradurga"
    },
    {
      "City": "Molar Band",
      "State": "Delhi *",
      "District": "South"
    },
    {
      "City": "Mon",
      "State": "Nagaland",
      "District": "Mon"
    },
    {
      "City": "Monoharpur",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "Moolakaraipatti",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Moonak",
      "State": "Punjab",
      "District": "Sangrur"
    },
    {
      "City": "Moovarasampettai",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Mopperipalayam",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Moradabad",
      "State": "Uttar Pradesh",
      "District": "Moradabad"
    },
    {
      "City": "Moragudi",
      "State": "Andhra Pradesh",
      "District": "Cuddapah"
    },
    {
      "City": "Moran Town",
      "State": "Assam",
      "District": "Dibrugarh"
    },
    {
      "City": "Moranhat",
      "State": "Assam",
      "District": "Sibsagar"
    },
    {
      "City": "Morar Cantt.",
      "State": "Madhya Pradesh",
      "District": "Gwalior"
    },
    {
      "City": "Moreh",
      "State": "Manipur",
      "District": "Chandel"
    },
    {
      "City": "Morena",
      "State": "Madhya Pradesh",
      "District": "Morena"
    },
    {
      "City": "Morinda",
      "State": "Punjab",
      "District": "Rupnagar"
    },
    {
      "City": "Mormugao",
      "State": "Goa",
      "District": "South Goa"
    },
    {
      "City": "Morshi",
      "State": "Maharashtra",
      "District": "Amravati"
    },
    {
      "City": "Morvi",
      "State": "Gujarat",
      "District": "Rajkot"
    },
    {
      "City": "Motera",
      "State": "Gujarat",
      "District": "Gandhinagar"
    },
    {
      "City": "Moth",
      "State": "Uttar Pradesh",
      "District": "Jhansi"
    },
    {
      "City": "Motihari",
      "State": "Bihar",
      "District": "Purba Champaran"
    },
    {
      "City": "Motipur",
      "State": "Bihar",
      "District": "Muzaffarpur"
    },
    {
      "City": "Mount Abu",
      "State": "Rajasthan",
      "District": "Sirohi"
    },
    {
      "City": "Mowa",
      "State": "Chhattisgarh",
      "District": "Raipur"
    },
    {
      "City": "Mowad",
      "State": "Maharashtra",
      "District": "Nagpur"
    },
    {
      "City": "Mrigala",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "Mubarakpur",
      "State": "Uttar Pradesh",
      "District": "Azamgarh"
    },
    {
      "City": "Mudalgi",
      "State": "Karnataka",
      "District": "Belgaum"
    },
    {
      "City": "Mudbidri",
      "State": "Karnataka",
      "District": "Dakshina Kannada"
    },
    {
      "City": "Muddebihal",
      "State": "Karnataka",
      "District": "Bijapur"
    },
    {
      "City": "Mudgal",
      "State": "Karnataka",
      "District": "Raichur"
    },
    {
      "City": "Mudhol",
      "State": "Karnataka",
      "District": "Bagalkot"
    },
    {
      "City": "Mudigere",
      "State": "Karnataka",
      "District": "Chikmagalur"
    },
    {
      "City": "Mudkhed",
      "State": "Maharashtra",
      "District": "Nanded"
    },
    {
      "City": "Mudukulathur",
      "State": "Tamil Nadu",
      "District": "Ramanathapuram"
    },
    {
      "City": "Mudushedde",
      "State": "Karnataka",
      "District": "Dakshina Kannada"
    },
    {
      "City": "Mughalsarai",
      "State": "Uttar Pradesh",
      "District": "Chandauli"
    },
    {
      "City": "Mughalsarai Rly. Settlement",
      "State": "Uttar Pradesh",
      "District": "Chandauli"
    },
    {
      "City": "Mugma",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Muhamma",
      "State": "Kerala",
      "District": "Alappuzha"
    },
    {
      "City": "Muhammadabad",
      "State": "Uttar Pradesh",
      "District": "Mau"
    },
    {
      "City": "Mukandgarh",
      "State": "Rajasthan",
      "District": "Jhunjhunun"
    },
    {
      "City": "Mukasipidariyur",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Mukerian",
      "State": "Punjab",
      "District": "Hoshiarpur"
    },
    {
      "City": "Mukhed",
      "State": "Maharashtra",
      "District": "Nanded"
    },
    {
      "City": "Mukhiguda",
      "State": "Orissa",
      "District": "Kalahandi"
    },
    {
      "City": "Mukkudal",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Mukrampur Khema",
      "State": "Uttar Pradesh",
      "District": "Bijnor"
    },
    {
      "City": "Muktsar",
      "State": "Punjab",
      "District": "Muktsar"
    },
    {
      "City": "Mul",
      "State": "Maharashtra",
      "District": "Chandrapur"
    },
    {
      "City": "Mulagumudu",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Mulanur",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Mulavukad",
      "State": "Kerala",
      "District": "Ernakulam"
    },
    {
      "City": "Mulbagal",
      "State": "Karnataka",
      "District": "Kolar"
    },
    {
      "City": "Mulgund",
      "State": "Karnataka",
      "District": "Gadag"
    },
    {
      "City": "Mulki",
      "State": "Karnataka",
      "District": "Dakshina Kannada"
    },
    {
      "City": "Mullanpur Dakha",
      "State": "Punjab",
      "District": "Ludhiana"
    },
    {
      "City": "Mullanpur- Garibdas",
      "State": "Punjab",
      "District": "Rupnagar"
    },
    {
      "City": "Multai",
      "State": "Madhya Pradesh",
      "District": "Betul"
    },
    {
      "City": "Mulur",
      "State": "Karnataka",
      "District": "Dakshina Kannada"
    },
    {
      "City": "Mundargi",
      "State": "Karnataka",
      "District": "Gadag"
    },
    {
      "City": "Mundera Bazar",
      "State": "Uttar Pradesh",
      "District": "Gorakhpur"
    },
    {
      "City": "Munderi",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Mundgod",
      "State": "Karnataka",
      "District": "Uttara Kannada"
    },
    {
      "City": "Mundi",
      "State": "Madhya Pradesh",
      "District": "East Nimar"
    },
    {
      "City": "Mundia",
      "State": "Uttar Pradesh",
      "District": "Budaun"
    },
    {
      "City": "Mundka",
      "State": "Delhi *",
      "District": "West"
    },
    {
      "City": "Mundra",
      "State": "Gujarat",
      "District": "Kachchh"
    },
    {
      "City": "Mundwa",
      "State": "Rajasthan",
      "District": "Nagaur"
    },
    {
      "City": "Mungaoli",
      "State": "Madhya Pradesh",
      "District": "Guna"
    },
    {
      "City": "Mungeli",
      "State": "Chhattisgarh",
      "District": "Bilaspur"
    },
    {
      "City": "Munger",
      "State": "Bihar",
      "District": "Munger"
    },
    {
      "City": "Muni Ki Reti",
      "State": "Uttaranchal",
      "District": "Tehri Garhwal"
    },
    {
      "City": "Munirabad Project Area",
      "State": "Karnataka",
      "District": "Koppal"
    },
    {
      "City": "Munnur",
      "State": "Karnataka",
      "District": "Dakshina Kannada"
    },
    {
      "City": "Muradnagar",
      "State": "Uttar Pradesh",
      "District": "Ghaziabad"
    },
    {
      "City": "Muragachha",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Murbad",
      "State": "Maharashtra",
      "District": "Thane"
    },
    {
      "City": "Murgathaul",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Murgud",
      "State": "Maharashtra",
      "District": "Kolhapur"
    },
    {
      "City": "Muri",
      "State": "Jharkhand",
      "District": "Ranchi"
    },
    {
      "City": "Murliganj",
      "State": "Bihar",
      "District": "Madhepura"
    },
    {
      "City": "Mursan",
      "State": "Uttar Pradesh",
      "District": "Hathras"
    },
    {
      "City": "Murshidabad",
      "State": "West Bengal",
      "District": "Murshidabad"
    },
    {
      "City": "Murtijapur",
      "State": "Maharashtra",
      "District": "Akola"
    },
    {
      "City": "Murud",
      "State": "Maharashtra",
      "District": "Raigarh"
    },
    {
      "City": "Muruganpalayam",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Murum",
      "State": "Maharashtra",
      "District": "Osmanabad"
    },
    {
      "City": "Murwara (Katni)",
      "State": "Madhya Pradesh",
      "District": "Katni"
    },
    {
      "City": "Musabani",
      "State": "Jharkhand",
      "District": "Purbi Singhbhum"
    },
    {
      "City": "Musafirkhana",
      "State": "Uttar Pradesh",
      "District": "Sultanpur"
    },
    {
      "City": "Musiri",
      "State": "Tamil Nadu",
      "District": "Tiruchirappalli"
    },
    {
      "City": "Mussoori",
      "State": "Uttaranchal",
      "District": "Dehradun"
    },
    {
      "City": "Mustafabad",
      "State": "Haryana",
      "District": "Yamunanagar"
    },
    {
      "City": "Mustafabad",
      "State": "Delhi *",
      "District": "North East"
    },
    {
      "City": "Muthupet",
      "State": "Tamil Nadu",
      "District": "Thiruvarur"
    },
    {
      "City": "Muthur",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Muttayyapuram",
      "State": "Tamil Nadu",
      "District": "Toothukudi"
    },
    {
      "City": "Muvattupuzha",
      "State": "Kerala",
      "District": "Ernakulam"
    },
    {
      "City": "Muzaffarnagar",
      "State": "Uttar Pradesh",
      "District": "Muzaffarnagar"
    },
    {
      "City": "Muzaffarpur",
      "State": "Bihar",
      "District": "Muzaffarpur"
    },
    {
      "City": "Muzhappilangad",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Myladi",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Mysore",
      "State": "Karnataka",
      "District": "Mysore"
    },
    {
      "City": "N. Vanlaiphai",
      "State": "Mizoram",
      "District": "Serchhip"
    },
    {
      "City": "N.Kawnpui",
      "State": "Mizoram",
      "District": "Kolasib"
    },
    {
      "City": "Nabadwip",
      "State": "West Bengal",
      "District": "Nadia"
    },
    {
      "City": "Nabagram",
      "State": "West Bengal",
      "District": "Puruliya"
    },
    {
      "City": "Nabagram Colony",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "Nabarangapur",
      "State": "Orissa",
      "District": "Nabarangapur"
    },
    {
      "City": "Nabgram",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Nabha",
      "State": "Punjab",
      "District": "Patiala"
    },
    {
      "City": "Nabinagar",
      "State": "Bihar",
      "District": "Aurangabad"
    },
    {
      "City": "Nachane",
      "State": "Maharashtra",
      "District": "Ratnagiri"
    },
    {
      "City": "Nachhratpur Katabari",
      "State": "West Bengal",
      "District": "Uttar Dinajpur"
    },
    {
      "City": "Nadathara",
      "State": "Kerala",
      "District": "Thrissur"
    },
    {
      "City": "Nadaun",
      "State": "Himachal Pradesh",
      "District": "Hamirpur"
    },
    {
      "City": "Nadbai",
      "State": "Rajasthan",
      "District": "Bharatpur"
    },
    {
      "City": "Nadiad",
      "State": "Gujarat",
      "District": "Kheda"
    },
    {
      "City": "Nadigaon",
      "State": "Uttar Pradesh",
      "District": "Jalaun"
    },
    {
      "City": "Naduvattam",
      "State": "Tamil Nadu",
      "District": "The Nilgiris"
    },
    {
      "City": "Nagai Chaudhry",
      "State": "Haryana",
      "District": "Mahendragarh"
    },
    {
      "City": "Nagamangala",
      "State": "Karnataka",
      "District": "Mandya"
    },
    {
      "City": "Nagaon",
      "State": "Assam",
      "District": "Nagaon"
    },
    {
      "City": "Nagapattinam",
      "State": "Tamil Nadu",
      "District": "Nagapattinam"
    },
    {
      "City": "Nagapur",
      "State": "Maharashtra",
      "District": "Ahmadnagar"
    },
    {
      "City": "Nagar",
      "State": "Rajasthan",
      "District": "Bharatpur"
    },
    {
      "City": "Nagardeole",
      "State": "Maharashtra",
      "District": "Ahmadnagar"
    },
    {
      "City": "Nagari",
      "State": "Andhra Pradesh",
      "District": "Chittoor"
    },
    {
      "City": "Nagarkurnool",
      "State": "Andhra Pradesh",
      "District": "Mahbubnagar"
    },
    {
      "City": "Nagaur",
      "State": "Rajasthan",
      "District": "Nagaur"
    },
    {
      "City": "Nagavakulam",
      "State": "Tamil Nadu",
      "District": "Madurai"
    },
    {
      "City": "Nagda",
      "State": "Madhya Pradesh",
      "District": "Ujjain"
    },
    {
      "City": "Nagercoil",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Nagina",
      "State": "Uttar Pradesh",
      "District": "Bijnor"
    },
    {
      "City": "Nagla",
      "State": "Uttaranchal",
      "District": "Udham Singh Nagar"
    },
    {
      "City": "Nagod",
      "State": "Madhya Pradesh",
      "District": "Satna"
    },
    {
      "City": "Nagojanahalli",
      "State": "Tamil Nadu",
      "District": "Dharmapuri"
    },
    {
      "City": "Nagothana",
      "State": "Maharashtra",
      "District": "Raigarh"
    },
    {
      "City": "Nagpur",
      "State": "Maharashtra",
      "District": "Nagpur"
    },
    {
      "City": "Nagram",
      "State": "Uttar Pradesh",
      "District": "Lucknow"
    },
    {
      "City": "Nagri",
      "State": "Madhya Pradesh",
      "District": "Mandsaur"
    },
    {
      "City": "Nagri Kalan",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Nagrota Bagwan",
      "State": "Himachal Pradesh",
      "District": "Kangra"
    },
    {
      "City": "Nahan",
      "State": "Himachal Pradesh",
      "District": "Sirmaur"
    },
    {
      "City": "Naharkatiya",
      "State": "Assam",
      "District": "Dibrugarh"
    },
    {
      "City": "Naharlagun",
      "State": "Arunachal Pradesh",
      "District": "Papum Pare"
    },
    {
      "City": "Nai Bazar",
      "State": "Uttar Pradesh",
      "District": "Sant Ravidas Nagar"
    },
    {
      "City": "Nai Garhi",
      "State": "Madhya Pradesh",
      "District": "Rewa"
    },
    {
      "City": "Naihati",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Naila Janjgir",
      "State": "Chhattisgarh",
      "District": "Janjgir-Champa"
    },
    {
      "City": "Naina Devi",
      "State": "Himachal Pradesh",
      "District": "Bilaspur"
    },
    {
      "City": "Nainana Jat",
      "State": "Uttar Pradesh",
      "District": "Agra"
    },
    {
      "City": "Nainital",
      "State": "Uttaranchal",
      "District": "Nainital"
    },
    {
      "City": "Nainital",
      "State": "Uttaranchal",
      "District": "Nainital"
    },
    {
      "City": "Nainpur",
      "State": "Madhya Pradesh",
      "District": "Mandla"
    },
    {
      "City": "Nainwa",
      "State": "Rajasthan",
      "District": "Bundi"
    },
    {
      "City": "Najibabad",
      "State": "Uttar Pradesh",
      "District": "Bijnor"
    },
    {
      "City": "Nakoda",
      "State": "Maharashtra",
      "District": "Chandrapur"
    },
    {
      "City": "Nakodar",
      "State": "Punjab",
      "District": "Jalandhar"
    },
    {
      "City": "Nakur",
      "State": "Uttar Pradesh",
      "District": "Saharanpur"
    },
    {
      "City": "Nala Sopara",
      "State": "Maharashtra",
      "District": "Thane"
    },
    {
      "City": "Nalagarh",
      "State": "Himachal Pradesh",
      "District": "Solan"
    },
    {
      "City": "Nalbari",
      "State": "Assam",
      "District": "Nalbari"
    },
    {
      "City": "NALCO",
      "State": "Orissa",
      "District": "Anugul"
    },
    {
      "City": "Naldurg",
      "State": "Maharashtra",
      "District": "Osmanabad"
    },
    {
      "City": "Nalgonda",
      "State": "Andhra Pradesh",
      "District": "Nalgonda"
    },
    {
      "City": "Nalkheda",
      "State": "Madhya Pradesh",
      "District": "Shajapur"
    },
    {
      "City": "Nallampatti",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Nallur",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Namagiripettai",
      "State": "Tamil Nadu",
      "District": "Namakkal"
    },
    {
      "City": "Namakkal",
      "State": "Tamil Nadu",
      "District": "Namakkal"
    },
    {
      "City": "Nambiyur",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Nambol",
      "State": "Manipur",
      "District": "Bishnupur & Imphal West"
    },
    {
      "City": "Namchi",
      "State": "Sikkim",
      "District": "South"
    },
    {
      "City": "Namli",
      "State": "Madhya Pradesh",
      "District": "Ratlam"
    },
    {
      "City": "Namna Kalan",
      "State": "Chhattisgarh",
      "District": "Surguja"
    },
    {
      "City": "Namrup",
      "State": "Assam",
      "District": "Dibrugarh"
    },
    {
      "City": "Namsai",
      "State": "Arunachal Pradesh",
      "District": "Lohit"
    },
    {
      "City": "Nanakvada",
      "State": "Gujarat",
      "District": "Valsad"
    },
    {
      "City": "Nanauta",
      "State": "Uttar Pradesh",
      "District": "Saharanpur"
    },
    {
      "City": "Nand Prayag",
      "State": "Uttaranchal",
      "District": "Chamoli"
    },
    {
      "City": "Nandambakkam",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Nanded-Waghala",
      "State": "Maharashtra",
      "District": "Nanded"
    },
    {
      "City": "Nandej",
      "State": "Gujarat",
      "District": "Ahmadabad"
    },
    {
      "City": "Nandesari",
      "State": "Gujarat",
      "District": "Vadodara"
    },
    {
      "City": "Nandesari INA",
      "State": "Gujarat",
      "District": "Vadodara"
    },
    {
      "City": "Nandgaon",
      "State": "Uttar Pradesh",
      "District": "Mathura"
    },
    {
      "City": "Nandgaon",
      "State": "Maharashtra",
      "District": "Nashik"
    },
    {
      "City": "Nandivaram-Guduvancheri",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Nandura",
      "State": "Maharashtra",
      "District": "Buldana"
    },
    {
      "City": "Nandurbar",
      "State": "Maharashtra",
      "District": "Nandurbar"
    },
    {
      "City": "Nandyal",
      "State": "Andhra Pradesh",
      "District": "Kurnool"
    },
    {
      "City": "Nangal",
      "State": "Punjab",
      "District": "Rupnagar"
    },
    {
      "City": "Nangal Dewat",
      "State": "Delhi *",
      "District": "South West"
    },
    {
      "City": "Nangal Thakran",
      "State": "Delhi *",
      "District": "North West"
    },
    {
      "City": "Nangavalli",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Nangavaram",
      "State": "Tamil Nadu",
      "District": "Kapur"
    },
    {
      "City": "Nangloi Jat",
      "State": "Delhi *",
      "District": "West"
    },
    {
      "City": "Nanguneri",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Nanjangud",
      "State": "Karnataka",
      "District": "Mysore"
    },
    {
      "City": "Nanjikottai",
      "State": "Tamil Nadu",
      "District": "Thanjavur"
    },
    {
      "City": "Nannilam",
      "State": "Tamil Nadu",
      "District": "Thiruvarur"
    },
    {
      "City": "Nanpara",
      "State": "Uttar Pradesh",
      "District": "Bahraich"
    },
    {
      "City": "Naoriya Pakhanglakpa",
      "State": "Manipur",
      "District": "Imphal West"
    },
    {
      "City": "Naraingarh",
      "State": "Haryana",
      "District": "Ambala"
    },
    {
      "City": "Naraini",
      "State": "Uttar Pradesh",
      "District": "Banda"
    },
    {
      "City": "Naranammalpuram",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Naranapuram",
      "State": "Tamil Nadu",
      "District": "Virudhunagar"
    },
    {
      "City": "Narasaraopet",
      "State": "Andhra Pradesh",
      "District": "Guntur"
    },
    {
      "City": "Narasimhanaickenpalayam",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Narasimharajapura",
      "State": "Karnataka",
      "District": "Chikmagalur"
    },
    {
      "City": "Narasingapuram",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Narasingapuram",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Narath",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Narauli",
      "State": "Uttar Pradesh",
      "District": "Moradabad"
    },
    {
      "City": "Naraura",
      "State": "Uttar Pradesh",
      "District": "Bulandshahr"
    },
    {
      "City": "Naravarikuppam",
      "State": "Tamil Nadu",
      "District": "Thiruvallur"
    },
    {
      "City": "Narayanavanam",
      "State": "Andhra Pradesh",
      "District": "Chittoor"
    },
    {
      "City": "Narayangarh",
      "State": "Madhya Pradesh",
      "District": "Mandsaur"
    },
    {
      "City": "Narayanpet",
      "State": "Andhra Pradesh",
      "District": "Mahbubnagar"
    },
    {
      "City": "Naregal",
      "State": "Karnataka",
      "District": "Gadag"
    },
    {
      "City": "Narendra Nagar",
      "State": "Uttaranchal",
      "District": "Tehri Garhwal"
    },
    {
      "City": "Nargund",
      "State": "Karnataka",
      "District": "Gadag"
    },
    {
      "City": "Narkanda",
      "State": "Himachal Pradesh",
      "District": "Shimla"
    },
    {
      "City": "Narkatiaganj",
      "State": "Bihar",
      "District": "Pashchim Champaran"
    },
    {
      "City": "Narkhed",
      "State": "Maharashtra",
      "District": "Nagpur"
    },
    {
      "City": "Narnaul",
      "State": "Haryana",
      "District": "Mahendragarh"
    },
    {
      "City": "Narnaund",
      "State": "Haryana",
      "District": "Hisar"
    },
    {
      "City": "Narsapur",
      "State": "Andhra Pradesh",
      "District": "West Godavari"
    },
    {
      "City": "Narsimhapur",
      "State": "Madhya Pradesh",
      "District": "Narsimhapur"
    },
    {
      "City": "Narsingarh",
      "State": "Tripura",
      "District": "West Tripura"
    },
    {
      "City": "Narsinghgarh",
      "State": "Madhya Pradesh",
      "District": "Rajgarh"
    },
    {
      "City": "Narsingi",
      "State": "Andhra Pradesh",
      "District": "Rangareddi"
    },
    {
      "City": "Narsipatnam",
      "State": "Andhra Pradesh",
      "District": "Visakhapatnam"
    },
    {
      "City": "Narwana",
      "State": "Haryana",
      "District": "Jind"
    },
    {
      "City": "Narwar",
      "State": "Madhya Pradesh",
      "District": "Shivpuri"
    },
    {
      "City": "Nashik",
      "State": "Maharashtra",
      "District": "Nashik"
    },
    {
      "City": "Nasirabad",
      "State": "Rajasthan",
      "District": "Ajmer"
    },
    {
      "City": "Nasiyanur",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Naspur",
      "State": "Andhra Pradesh",
      "District": "Adilabad"
    },
    {
      "City": "Nasra",
      "State": "West Bengal",
      "District": "Nadia"
    },
    {
      "City": "Nasrullaganj",
      "State": "Madhya Pradesh",
      "District": "Sehore"
    },
    {
      "City": "Natham",
      "State": "Tamil Nadu",
      "District": "Dindigul"
    },
    {
      "City": "Nathampannai",
      "State": "Tamil Nadu",
      "District": "Pudukkottai"
    },
    {
      "City": "Nathdwara",
      "State": "Rajasthan",
      "District": "Rajsamand"
    },
    {
      "City": "Natibpur",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Natrampalli",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Nattapettai",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Nattarasankottai",
      "State": "Tamil Nadu",
      "District": "Sivaganga"
    },
    {
      "City": "Naubaisa Gaon",
      "State": "Assam",
      "District": "Jorhat"
    },
    {
      "City": "Naudhia",
      "State": "Madhya Pradesh",
      "District": "Sidhi"
    },
    {
      "City": "Naugachhia",
      "State": "Bihar",
      "District": "Bhagalpur"
    },
    {
      "City": "Naugawan Sadat",
      "State": "Uttar Pradesh",
      "District": "Jyotiba Phule Nagar"
    },
    {
      "City": "Naupala",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Nautanwa",
      "State": "Uttar Pradesh",
      "District": "Maharajganj"
    },
    {
      "City": "NavagamGhed",
      "State": "Gujarat",
      "District": "Jamnagar"
    },
    {
      "City": "Navalgund",
      "State": "Karnataka",
      "District": "Dharwad"
    },
    {
      "City": "Navalpattu",
      "State": "Tamil Nadu",
      "District": "Tiruchirappalli"
    },
    {
      "City": "Navelim",
      "State": "Goa",
      "District": "South Goa"
    },
    {
      "City": "Navghar-Manikpur",
      "State": "Maharashtra",
      "District": "Thane"
    },
    {
      "City": "Navi Mumbai",
      "State": "Maharashtra",
      "District": "Thane"
    },
    {
      "City": "Navi Mumbai (Panvel, Raigarh)",
      "State": "Maharashtra",
      "District": "Raigarh"
    },
    {
      "City": "Navsari",
      "State": "Gujarat",
      "District": "Navsari"
    },
    {
      "City": "Nawa",
      "State": "Rajasthan",
      "District": "Nagaur"
    },
    {
      "City": "Nawabganj",
      "State": "Uttar Pradesh",
      "District": "Bareilly"
    },
    {
      "City": "Nawabganj",
      "State": "Uttar Pradesh",
      "District": "Unnao"
    },
    {
      "City": "Nawabganj",
      "State": "Uttar Pradesh",
      "District": "Barabanki"
    },
    {
      "City": "Nawabganj",
      "State": "Uttar Pradesh",
      "District": "Gonda"
    },
    {
      "City": "Nawada",
      "State": "Bihar",
      "District": "Nawada"
    },
    {
      "City": "Nawalgarh",
      "State": "Rajasthan",
      "District": "Jhunjhunun"
    },
    {
      "City": "Nawanshahr",
      "State": "Punjab",
      "District": "Nawanshahr"
    },
    {
      "City": "Nawapur",
      "State": "Maharashtra",
      "District": "Nandurbar"
    },
    {
      "City": "Naya Baradwar",
      "State": "Chhattisgarh",
      "District": "Janjgir-Champa"
    },
    {
      "City": "Nayabazar",
      "State": "Sikkim",
      "District": "West"
    },
    {
      "City": "Nayagarh",
      "State": "Orissa",
      "District": "Nayagarh"
    },
    {
      "City": "Nazerath",
      "State": "Tamil Nadu",
      "District": "Toothukudi"
    },
    {
      "City": "Nazira",
      "State": "Assam",
      "District": "Sibsagar"
    },
    {
      "City": "Nebadhai Duttapukur",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Nedumangad",
      "State": "Kerala",
      "District": "Thiruvananthapuram"
    },
    {
      "City": "Needamangalam",
      "State": "Tamil Nadu",
      "District": "Thiruvarur"
    },
    {
      "City": "Neelagiri",
      "State": "Tamil Nadu",
      "District": "Thanjavur"
    },
    {
      "City": "Neelankarai",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Neem-Ka-Thana",
      "State": "Rajasthan",
      "District": "Sikar"
    },
    {
      "City": "Neemuch",
      "State": "Madhya Pradesh",
      "District": "Neemuch"
    },
    {
      "City": "Nehon",
      "State": "Punjab",
      "District": "Rupnagar"
    },
    {
      "City": "Nehtaur",
      "State": "Uttar Pradesh",
      "District": "Bijnor"
    },
    {
      "City": "Neikkarapatti",
      "State": "Tamil Nadu",
      "District": "Dindigul"
    },
    {
      "City": "Neiyyur",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Nellikuppam",
      "State": "Tamil Nadu",
      "District": "Cuddalore"
    },
    {
      "City": "Nellimaria",
      "State": "Andhra Pradesh",
      "District": "Vizianagaram"
    },
    {
      "City": "Nelliyalam",
      "State": "Tamil Nadu",
      "District": "The Nilgiris"
    },
    {
      "City": "Nellore",
      "State": "Andhra Pradesh",
      "District": "Nellore"
    },
    {
      "City": "Nelmangala",
      "State": "Karnataka",
      "District": "Bangalore Rural"
    },
    {
      "City": "Nemili",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Nenmenikkara",
      "State": "Kerala",
      "District": "Thrissur"
    },
    {
      "City": "Nepanagar",
      "State": "Madhya Pradesh",
      "District": "East Nimar"
    },
    {
      "City": "Neral",
      "State": "Maharashtra",
      "District": "Raigarh"
    },
    {
      "City": "Neripperichal",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Nerkunram",
      "State": "Tamil Nadu",
      "District": "Thiruvallur"
    },
    {
      "City": "Nerkuppai",
      "State": "Tamil Nadu",
      "District": "Sivaganga"
    },
    {
      "City": "Nerunjipettai",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Neuton Chikhli Kalan",
      "State": "Madhya Pradesh",
      "District": "Chhindwara"
    },
    {
      "City": "New Barrackpur",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "New Bongaigaon Rly. Colony",
      "State": "Assam",
      "District": "Bongaigaon"
    },
    {
      "City": "New Delhi Municipal Council",
      "State": "Delhi *",
      "District": "New Delhi, Central, South West and South"
    },
    {
      "City": "New Mahe",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Newa Talai",
      "State": "Rajasthan",
      "District": "Udaipur"
    },
    {
      "City": "Neykkarappatti",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Neyveli",
      "State": "Tamil Nadu",
      "District": "Cuddalore"
    },
    {
      "City": "Neyyattinkara",
      "State": "Kerala",
      "District": "Thiruvananthapuram"
    },
    {
      "City": "Nibra",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Nichlaul",
      "State": "Uttar Pradesh",
      "District": "Maharajganj"
    },
    {
      "City": "Nidadavole",
      "State": "Andhra Pradesh",
      "District": "West Godavari"
    },
    {
      "City": "Nidhauli Kalan",
      "State": "Uttar Pradesh",
      "District": "Etah"
    },
    {
      "City": "Nilagiri",
      "State": "Orissa",
      "District": "Baleshwar"
    },
    {
      "City": "Nilakkottai",
      "State": "Tamil Nadu",
      "District": "Dindigul"
    },
    {
      "City": "Nilanga",
      "State": "Maharashtra",
      "District": "Latur"
    },
    {
      "City": "Nildoh",
      "State": "Maharashtra",
      "District": "Nagpur"
    },
    {
      "City": "Nilokheri",
      "State": "Haryana",
      "District": "Karnal"
    },
    {
      "City": "Nimapada",
      "State": "Orissa",
      "District": "Puri"
    },
    {
      "City": "Nimbahera",
      "State": "Rajasthan",
      "District": "Chittaurgarh"
    },
    {
      "City": "Nimbhore Budruk",
      "State": "Maharashtra",
      "District": "Jalgaon"
    },
    {
      "City": "Ningthoukhong",
      "State": "Manipur",
      "District": "Bishnupur"
    },
    {
      "City": "Nipani",
      "State": "Karnataka",
      "District": "Belgaum"
    },
    {
      "City": "Nirmal",
      "State": "Andhra Pradesh",
      "District": "Adilabad"
    },
    {
      "City": "Nirmali",
      "State": "Bihar",
      "District": "Supaul"
    },
    {
      "City": "Nirsa",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Niwai",
      "State": "Rajasthan",
      "District": "Tonk"
    },
    {
      "City": "Niwari",
      "State": "Madhya Pradesh",
      "District": "Tikamgarh"
    },
    {
      "City": "Niwari",
      "State": "Uttar Pradesh",
      "District": "Ghaziabad"
    },
    {
      "City": "Nizamabad",
      "State": "Andhra Pradesh",
      "District": "Nizamabad"
    },
    {
      "City": "Nizamabad",
      "State": "Uttar Pradesh",
      "District": "Azamgarh"
    },
    {
      "City": "Noamundi",
      "State": "Jharkhand",
      "District": "Pashchimi Singhbhum"
    },
    {
      "City": "Nohar",
      "State": "Rajasthan",
      "District": "Hanumangarh"
    },
    {
      "City": "Noida",
      "State": "Uttar Pradesh",
      "District": "Gautam Buddha Nagar"
    },
    {
      "City": "Nokha",
      "State": "Rajasthan",
      "District": "Bikaner"
    },
    {
      "City": "Nokha",
      "State": "Bihar",
      "District": "Rohtas"
    },
    {
      "City": "Nokpul",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Nongmynsong",
      "State": "Meghalaya",
      "District": "East Khasi Hills"
    },
    {
      "City": "Nongpoh",
      "State": "Meghalaya",
      "District": "Ri Bhoi"
    },
    {
      "City": "Nongstoin",
      "State": "Meghalaya",
      "District": "West Khasi Hills"
    },
    {
      "City": "Nongthymmai",
      "State": "Meghalaya",
      "District": "East Khasi Hills"
    },
    {
      "City": "Noor Mahal",
      "State": "Punjab",
      "District": "Jalandhar"
    },
    {
      "City": "Noorpur",
      "State": "Uttar Pradesh",
      "District": "Bijnor"
    },
    {
      "City": "North Barrackpur",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "North Dumdum",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "North Guwahati",
      "State": "Assam",
      "District": "Kamrup"
    },
    {
      "City": "North Lakhimpur",
      "State": "Assam",
      "District": "Lakhimpur"
    },
    {
      "City": "Northern Rly. Colony",
      "State": "Uttar Pradesh",
      "District": "Kanpur Nagar"
    },
    {
      "City": "Nowgaon",
      "State": "Madhya Pradesh",
      "District": "Chhatarpur"
    },
    {
      "City": "Nowrozabad(Khodargama)",
      "State": "Madhya Pradesh",
      "District": "Umaria"
    },
    {
      "City": "Nowshehra",
      "State": "Jammu & Kashmir",
      "District": "Rajauri"
    },
    {
      "City": "Nuapatna",
      "State": "Orissa",
      "District": "Cuttack"
    },
    {
      "City": "Nuh",
      "State": "Haryana",
      "District": "Gurgaon"
    },
    {
      "City": "Numaligarh Refinery Township",
      "State": "Assam",
      "District": "Golaghat"
    },
    {
      "City": "Nurpur",
      "State": "Himachal Pradesh",
      "District": "Kangra"
    },
    {
      "City": "Nuzvid",
      "State": "Andhra Pradesh",
      "District": "Krishna"
    },
    {
      "City": "Nyoria Husainpur",
      "State": "Uttar Pradesh",
      "District": "Pilibhit"
    },
    {
      "City": "Nyotini",
      "State": "Uttar Pradesh",
      "District": "Unnao"
    },
    {
      "City": "O' Valley",
      "State": "Tamil Nadu",
      "District": "The Nilgiris"
    },
    {
      "City": "O.F.Khamaria",
      "State": "Madhya Pradesh",
      "District": "Jabalpur"
    },
    {
      "City": "Obedullaganj",
      "State": "Madhya Pradesh",
      "District": "Raisen"
    },
    {
      "City": "Obra",
      "State": "Uttar Pradesh",
      "District": "Sonbhadra"
    },
    {
      "City": "OCL Industrialship",
      "State": "Orissa",
      "District": "Sundargarh"
    },
    {
      "City": "Odaipatti",
      "State": "Tamil Nadu",
      "District": "Theni"
    },
    {
      "City": "Odaiyakulam",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Oddanchatram",
      "State": "Tamil Nadu",
      "District": "Dindigul"
    },
    {
      "City": "Ode",
      "State": "Gujarat",
      "District": "Anand"
    },
    {
      "City": "Odugathur",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Oel Dhakwa",
      "State": "Uttar Pradesh",
      "District": "Kheri"
    },
    {
      "City": "Oggiyamduraipakkam",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Oinam",
      "State": "Manipur",
      "District": "Bishnupur"
    },
    {
      "City": "Okha port",
      "State": "Gujarat",
      "District": "Jamnagar"
    },
    {
      "City": "Okni NO.II",
      "State": "Jharkhand",
      "District": "Hazaribag"
    },
    {
      "City": "Olagadam",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Olavanna",
      "State": "Kerala",
      "District": "Kozhikode"
    },
    {
      "City": "Old Maldah",
      "State": "West Bengal",
      "District": "Maldah"
    },
    {
      "City": "Omalur",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Omerkhan daira",
      "State": "Andhra Pradesh",
      "District": "Rangareddi"
    },
    {
      "City": "Omkareshwar",
      "State": "Madhya Pradesh",
      "District": "East Nimar"
    },
    {
      "City": "Ondal",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Ongole",
      "State": "Andhra Pradesh",
      "District": "Prakasam"
    },
    {
      "City": "Orachha",
      "State": "Madhya Pradesh",
      "District": "Tikamgarh"
    },
    {
      "City": "Orai",
      "State": "Uttar Pradesh",
      "District": "Jalaun"
    },
    {
      "City": "Oran",
      "State": "Uttar Pradesh",
      "District": "Banda"
    },
    {
      "City": "Orathanadu (Mukthambalpuram)",
      "State": "Tamil Nadu",
      "District": "Thanjavur"
    },
    {
      "City": "Ordinance Factory Itarsi",
      "State": "Madhya Pradesh",
      "District": "Hoshangabad"
    },
    {
      "City": "Ordnance Factory Muradnagar",
      "State": "Uttar Pradesh",
      "District": "Ghaziabad"
    },
    {
      "City": "Orla",
      "State": "Jharkhand",
      "District": "Hazaribag"
    },
    {
      "City": "Osmanabad",
      "State": "Maharashtra",
      "District": "Osmanabad"
    },
    {
      "City": "Osmania University",
      "State": "Andhra Pradesh",
      "District": "Hyderabad"
    },
    {
      "City": "Othakadai",
      "State": "Tamil Nadu",
      "District": "Madurai"
    },
    {
      "City": "Othakalmandapam",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Ottappalam",
      "State": "Kerala",
      "District": "Palakkad"
    },
    {
      "City": "Ottapparai",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Ozar",
      "State": "Maharashtra",
      "District": "Nashik"
    },
    {
      "City": "Ozhukarai",
      "State": "Pondicherry *",
      "District": "Pondicherry"
    },
    {
      "City": "P. J. Cholapuram",
      "State": "Tamil Nadu",
      "District": "Kapur"
    },
    {
      "City": "P.Mettupalayam",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "P.N.Patti",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Pachgaon",
      "State": "Maharashtra",
      "District": "Kolhapur"
    },
    {
      "City": "Pachmarhi Cantt",
      "State": "Madhya Pradesh",
      "District": "Hoshangabad"
    },
    {
      "City": "Pachora",
      "State": "Maharashtra",
      "District": "Jalgaon"
    },
    {
      "City": "Pachore",
      "State": "Madhya Pradesh",
      "District": "Rajgarh"
    },
    {
      "City": "Pachperwa",
      "State": "Uttar Pradesh",
      "District": "Balrampur"
    },
    {
      "City": "Pacode",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Padagha",
      "State": "Maharashtra",
      "District": "Thane"
    },
    {
      "City": "Padaiveedu",
      "State": "Tamil Nadu",
      "District": "Namakkal"
    },
    {
      "City": "Padampur",
      "State": "Rajasthan",
      "District": "Ganganagar"
    },
    {
      "City": "Paddhari",
      "State": "Gujarat",
      "District": "Rajkot"
    },
    {
      "City": "Padianallur",
      "State": "Tamil Nadu",
      "District": "Thiruvallur"
    },
    {
      "City": "Padirikuppam",
      "State": "Tamil Nadu",
      "District": "Cuddalore"
    },
    {
      "City": "Padmanabhapuram",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Padmapur",
      "State": "Orissa",
      "District": "Bargarh"
    },
    {
      "City": "Padra",
      "State": "Gujarat",
      "District": "Vadodara"
    },
    {
      "City": "Padrauna",
      "State": "Uttar Pradesh",
      "District": "Kushinagar"
    },
    {
      "City": "Paduvilayi",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Pahalgam",
      "State": "Jammu & Kashmir",
      "District": "Anantnag"
    },
    {
      "City": "Paharpur",
      "State": "Bihar",
      "District": "Gaya"
    },
    {
      "City": "Pahasu",
      "State": "Uttar Pradesh",
      "District": "Bulandshahr"
    },
    {
      "City": "Paintepur",
      "State": "Uttar Pradesh",
      "District": "Sitapur"
    },
    {
      "City": "Pairagachha",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "Paithan",
      "State": "Maharashtra",
      "District": "Aurangabad"
    },
    {
      "City": "Pakaur",
      "State": "Jharkhand",
      "District": "Pakaur"
    },
    {
      "City": "Pal Chourai",
      "State": "Madhya Pradesh",
      "District": "Chhindwara"
    },
    {
      "City": "Palacole",
      "State": "Andhra Pradesh",
      "District": "West Godavari"
    },
    {
      "City": "Palaganangudy",
      "State": "Tamil Nadu",
      "District": "Tiruchirappalli"
    },
    {
      "City": "Palai",
      "State": "Kerala",
      "District": "Kottayam"
    },
    {
      "City": "Palakkad",
      "State": "Kerala",
      "District": "Palakkad"
    },
    {
      "City": "Palakkodu",
      "State": "Tamil Nadu",
      "District": "Dharmapuri"
    },
    {
      "City": "Palakurthi",
      "State": "Andhra Pradesh",
      "District": "Karimnagar"
    },
    {
      "City": "Palamedu",
      "State": "Tamil Nadu",
      "District": "Madurai"
    },
    {
      "City": "Palampur",
      "State": "Himachal Pradesh",
      "District": "Kangra"
    },
    {
      "City": "Palani",
      "State": "Tamil Nadu",
      "District": "Dindigul"
    },
    {
      "City": "Palani Chettipatti",
      "State": "Tamil Nadu",
      "District": "Theni"
    },
    {
      "City": "Palanpur",
      "State": "Gujarat",
      "District": "Banas Kantha"
    },
    {
      "City": "Palasa @ Kasibugga",
      "State": "Andhra Pradesh",
      "District": "Srikakulam"
    },
    {
      "City": "Palasbari",
      "State": "Assam",
      "District": "Kamrup"
    },
    {
      "City": "Palashban",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Palavakkam",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Palavansathu",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Palawa",
      "State": "Jharkhand",
      "District": "Hazaribag"
    },
    {
      "City": "Palayad",
      "State": "Kerala",
      "District": "Kozhikode"
    },
    {
      "City": "Palayam",
      "State": "Tamil Nadu",
      "District": "Dindigul"
    },
    {
      "City": "Palda",
      "State": "Madhya Pradesh",
      "District": "Indore"
    },
    {
      "City": "Pale",
      "State": "Goa",
      "District": "North Goa"
    },
    {
      "City": "Palej",
      "State": "Gujarat",
      "District": "Bharuch"
    },
    {
      "City": "Palera",
      "State": "Madhya Pradesh",
      "District": "Tikamgarh"
    },
    {
      "City": "Palghar",
      "State": "Maharashtra",
      "District": "Thane"
    },
    {
      "City": "Pali",
      "State": "Madhya Pradesh",
      "District": "Umaria"
    },
    {
      "City": "Pali",
      "State": "Rajasthan",
      "District": "Pali"
    },
    {
      "City": "Pali",
      "State": "Maharashtra",
      "District": "Raigarh"
    },
    {
      "City": "Pali",
      "State": "Uttar Pradesh",
      "District": "Hardoi"
    },
    {
      "City": "Pali",
      "State": "Uttar Pradesh",
      "District": "Lalitpur"
    },
    {
      "City": "Palia Kalan",
      "State": "Uttar Pradesh",
      "District": "Kheri"
    },
    {
      "City": "Palissery",
      "State": "Kerala",
      "District": "Thrissur"
    },
    {
      "City": "Palitana",
      "State": "Gujarat",
      "District": "Bhavnagar"
    },
    {
      "City": "Palladam",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Pallapalayam",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Pallapalayam",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Pallapatti",
      "State": "Tamil Nadu",
      "District": "Dindigul"
    },
    {
      "City": "Pallapatti",
      "State": "Tamil Nadu",
      "District": "Kapur"
    },
    {
      "City": "Pallapatti",
      "State": "Tamil Nadu",
      "District": "Virudhunagar"
    },
    {
      "City": "Pallathur",
      "State": "Tamil Nadu",
      "District": "Sivaganga"
    },
    {
      "City": "Pallavaram",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Pallikaranai",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Pallikkunnu",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Pallikonda",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Pallipalayam",
      "State": "Tamil Nadu",
      "District": "Namakkal"
    },
    {
      "City": "Pallipalayam Agraharam",
      "State": "Tamil Nadu",
      "District": "Namakkal"
    },
    {
      "City": "Pallipattu",
      "State": "Tamil Nadu",
      "District": "Thiruvallur"
    },
    {
      "City": "Paluvai",
      "State": "Kerala",
      "District": "Thrissur"
    },
    {
      "City": "Palwal",
      "State": "Haryana",
      "District": "Faridabad"
    },
    {
      "City": "Palwancha",
      "State": "Andhra Pradesh",
      "District": "Khammam"
    },
    {
      "City": "Pammal",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Pampore",
      "State": "Jammu & Kashmir",
      "District": "Pulwama"
    },
    {
      "City": "Pamur",
      "State": "Andhra Pradesh",
      "District": "Prakasam"
    },
    {
      "City": "Panagar",
      "State": "Madhya Pradesh",
      "District": "Jabalpur"
    },
    {
      "City": "Panagudi",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Panaimarathupatti",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Panaji",
      "State": "Goa",
      "District": "North Goa"
    },
    {
      "City": "Panapakkam",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Panara",
      "State": "Madhya Pradesh",
      "District": "Chhindwara"
    },
    {
      "City": "Panboli",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Panchet",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Panchgani",
      "State": "Maharashtra",
      "District": "Satara"
    },
    {
      "City": "Panchkula Urban Estate",
      "State": "Haryana",
      "District": "Panchkula"
    },
    {
      "City": "Panchla",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Panchpara",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Pandamangalam",
      "State": "Tamil Nadu",
      "District": "Namakkal"
    },
    {
      "City": "Pandariya",
      "State": "Chhattisgarh",
      "District": "Kawardha"
    },
    {
      "City": "Pandavapura",
      "State": "Karnataka",
      "District": "Mandya"
    },
    {
      "City": "Pandhana",
      "State": "Madhya Pradesh",
      "District": "East Nimar"
    },
    {
      "City": "Pandharkaoda",
      "State": "Maharashtra",
      "District": "Yavatmal"
    },
    {
      "City": "Pandharpur",
      "State": "Maharashtra",
      "District": "Aurangabad"
    },
    {
      "City": "Pandharpur",
      "State": "Maharashtra",
      "District": "Solapur"
    },
    {
      "City": "Pandhurna",
      "State": "Madhya Pradesh",
      "District": "Chhindwara"
    },
    {
      "City": "Pandua",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "Pangachhiya (B)",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Panhala",
      "State": "Maharashtra",
      "District": "Kolhapur"
    },
    {
      "City": "Paniara",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Panihati",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Panipat",
      "State": "Haryana",
      "District": "Panipat"
    },
    {
      "City": "Panipat Taraf Ansar",
      "State": "Haryana",
      "District": "Panipat"
    },
    {
      "City": "Panipat Taraf Rajputan",
      "State": "Haryana",
      "District": "Panipat"
    },
    {
      "City": "Panipt Taraf Makhdum Zadgan",
      "State": "Haryana",
      "District": "Panipat"
    },
    {
      "City": "Panna",
      "State": "Madhya Pradesh",
      "District": "Panna"
    },
    {
      "City": "Pannaikadu",
      "State": "Tamil Nadu",
      "District": "Dindigul"
    },
    {
      "City": "Pannaipuram",
      "State": "Tamil Nadu",
      "District": "Theni"
    },
    {
      "City": "Panniyannur",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Panoor",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Panposh",
      "State": "Orissa",
      "District": "Sundargarh"
    },
    {
      "City": "Panruti",
      "State": "Tamil Nadu",
      "District": "Cuddalore"
    },
    {
      "City": "Pansemal",
      "State": "Madhya Pradesh",
      "District": "Barwani"
    },
    {
      "City": "Pantheeramkavu",
      "State": "Kerala",
      "District": "Kozhikode"
    },
    {
      "City": "Panuhat",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Panvel",
      "State": "Maharashtra",
      "District": "Raigarh"
    },
    {
      "City": "Paonta Sahib",
      "State": "Himachal Pradesh",
      "District": "Sirmaur"
    },
    {
      "City": "Papampeta",
      "State": "Andhra Pradesh",
      "District": "Anantapur"
    },
    {
      "City": "Papanasam",
      "State": "Tamil Nadu",
      "District": "Thanjavur"
    },
    {
      "City": "Pappankurichi",
      "State": "Tamil Nadu",
      "District": "Tiruchirappalli"
    },
    {
      "City": "Papparapatti",
      "State": "Tamil Nadu",
      "District": "Dharmapuri"
    },
    {
      "City": "Papparapatti",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Pappinisseri",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Pappireddipatti",
      "State": "Tamil Nadu",
      "District": "Dharmapuri"
    },
    {
      "City": "Par Beliya",
      "State": "West Bengal",
      "District": "Puruliya"
    },
    {
      "City": "Paradip",
      "State": "Orissa",
      "District": "Jagatsinghapur"
    },
    {
      "City": "Paramakudi",
      "State": "Tamil Nadu",
      "District": "Ramanathapuram"
    },
    {
      "City": "Paramathi",
      "State": "Tamil Nadu",
      "District": "Namakkal"
    },
    {
      "City": "Paranda",
      "State": "Maharashtra",
      "District": "Osmanabad"
    },
    {
      "City": "Parangipettai",
      "State": "Tamil Nadu",
      "District": "Cuddalore"
    },
    {
      "City": "Parashkol",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Parasi",
      "State": "Uttar Pradesh",
      "District": "Sonbhadra"
    },
    {
      "City": "Parasia",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Paratdih",
      "State": "Jharkhand",
      "District": "Giridih"
    },
    {
      "City": "Paravai",
      "State": "Tamil Nadu",
      "District": "Madurai"
    },
    {
      "City": "Paravoor",
      "State": "Kerala",
      "District": "Kollam"
    },
    {
      "City": "Paravur",
      "State": "Kerala",
      "District": "Ernakulam"
    },
    {
      "City": "Parbatsar",
      "State": "Rajasthan",
      "District": "Nagaur"
    },
    {
      "City": "Parbbatipur",
      "State": "West Bengal",
      "District": "Nadia"
    },
    {
      "City": "Parbhani",
      "State": "Maharashtra",
      "District": "Parbhani"
    },
    {
      "City": "Parcem",
      "State": "Goa",
      "District": "North Goa"
    },
    {
      "City": "Pardi",
      "State": "Gujarat",
      "District": "Valsad"
    },
    {
      "City": "Parichha",
      "State": "Uttar Pradesh",
      "District": "Jhansi"
    },
    {
      "City": "Parikshitgarh",
      "State": "Uttar Pradesh",
      "District": "Meerut"
    },
    {
      "City": "Parlakhemundi",
      "State": "Orissa",
      "District": "Gajapati"
    },
    {
      "City": "Parli",
      "State": "Maharashtra",
      "District": "Bid"
    },
    {
      "City": "Parnera",
      "State": "Gujarat",
      "District": "Valsad"
    },
    {
      "City": "Parola",
      "State": "Maharashtra",
      "District": "Jalgaon"
    },
    {
      "City": "Parole",
      "State": "Jammu & Kashmir",
      "District": "Kathua"
    },
    {
      "City": "Parsadepur",
      "State": "Uttar Pradesh",
      "District": "Rae Bareli"
    },
    {
      "City": "Partapur",
      "State": "Rajasthan",
      "District": "Banswara"
    },
    {
      "City": "Partur",
      "State": "Maharashtra",
      "District": "Jalna"
    },
    {
      "City": "Parvat",
      "State": "Gujarat",
      "District": "Surat"
    },
    {
      "City": "Parvathipuram",
      "State": "Andhra Pradesh",
      "District": "Vizianagaram"
    },
    {
      "City": "Parwanoo",
      "State": "Himachal Pradesh",
      "District": "Solan"
    },
    {
      "City": "Pasan",
      "State": "Madhya Pradesh",
      "District": "Shahdol"
    },
    {
      "City": "Paschim Jitpur",
      "State": "West Bengal",
      "District": "Jalpaiguri"
    },
    {
      "City": "Paschim Punropara",
      "State": "West Bengal",
      "District": "Murshidabad"
    },
    {
      "City": "Pasighat",
      "State": "Arunachal Pradesh",
      "District": "East Siang"
    },
    {
      "City": "Pasthal",
      "State": "Maharashtra",
      "District": "Thane"
    },
    {
      "City": "Pasur",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Patala",
      "State": "Uttar Pradesh",
      "District": "Ghaziabad"
    },
    {
      "City": "Patan",
      "State": "Gujarat",
      "District": "Patan"
    },
    {
      "City": "Patan",
      "State": "Chhattisgarh",
      "District": "Durg"
    },
    {
      "City": "Patan",
      "State": "Maharashtra",
      "District": "Satara"
    },
    {
      "City": "Patan",
      "State": "Madhya Pradesh",
      "District": "Jabalpur"
    },
    {
      "City": "Patancheru",
      "State": "Andhra Pradesh",
      "District": "Medak"
    },
    {
      "City": "Pataudi",
      "State": "Haryana",
      "District": "Gurgaon"
    },
    {
      "City": "Pathalgaon",
      "State": "Chhattisgarh",
      "District": "Jashpur"
    },
    {
      "City": "Pathamadai",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Pathanamthitta",
      "State": "Kerala",
      "District": "Pathanamthitta"
    },
    {
      "City": "Pathankot",
      "State": "Punjab",
      "District": "Gurdaspur"
    },
    {
      "City": "Pathardi",
      "State": "Maharashtra",
      "District": "Ahmadnagar"
    },
    {
      "City": "Pathardih",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Patharia",
      "State": "Madhya Pradesh",
      "District": "Damoh"
    },
    {
      "City": "Pathiriyad",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Pathri",
      "State": "Maharashtra",
      "District": "Parbhani"
    },
    {
      "City": "Pathsala",
      "State": "Assam",
      "District": "Barpeta"
    },
    {
      "City": "Patiala",
      "State": "Punjab",
      "District": "Patiala"
    },
    {
      "City": "Patiyali",
      "State": "Uttar Pradesh",
      "District": "Etah"
    },
    {
      "City": "Patna",
      "State": "Bihar",
      "District": "Patna"
    },
    {
      "City": "Patnagarh",
      "State": "Orissa",
      "District": "Balangir"
    },
    {
      "City": "Patratu",
      "State": "Jharkhand",
      "District": "Hazaribag"
    },
    {
      "City": "Pattabong Tea Garden",
      "State": "West Bengal",
      "District": "Darjiling"
    },
    {
      "City": "Pattamundai",
      "State": "Orissa",
      "District": "Kendrapara"
    },
    {
      "City": "Pattan",
      "State": "Jammu & Kashmir",
      "District": "Baramula"
    },
    {
      "City": "Pattanagere",
      "State": "Karnataka",
      "District": "Bangalore"
    },
    {
      "City": "Patti",
      "State": "Punjab",
      "District": "Amritsar"
    },
    {
      "City": "Patti",
      "State": "Uttar Pradesh",
      "District": "Pratapgarh"
    },
    {
      "City": "Pattinam",
      "State": "Tamil Nadu",
      "District": "Namakkal"
    },
    {
      "City": "Pattiom",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Pattiveeranpatti",
      "State": "Tamil Nadu",
      "District": "Dindigul"
    },
    {
      "City": "Pattran",
      "State": "Punjab",
      "District": "Patiala"
    },
    {
      "City": "Pattukkottai",
      "State": "Tamil Nadu",
      "District": "Thanjavur"
    },
    {
      "City": "Patuli",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Patulia",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Patur",
      "State": "Maharashtra",
      "District": "Akola"
    },
    {
      "City": "Pauni",
      "State": "Maharashtra",
      "District": "Bhandara"
    },
    {
      "City": "Pauri",
      "State": "Uttaranchal",
      "District": "Garhwal"
    },
    {
      "City": "Pavagada",
      "State": "Karnataka",
      "District": "Tumkur"
    },
    {
      "City": "Pavaratty",
      "State": "Kerala",
      "District": "Thrissur"
    },
    {
      "City": "Pawai",
      "State": "Madhya Pradesh",
      "District": "Panna"
    },
    {
      "City": "Payal",
      "State": "Punjab",
      "District": "Ludhiana"
    },
    {
      "City": "Payyannur",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Pazhugal",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Pedana",
      "State": "Andhra Pradesh",
      "District": "Krishna"
    },
    {
      "City": "Peddapuram",
      "State": "Andhra Pradesh",
      "District": "East Godavari"
    },
    {
      "City": "Peerkankaranai",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Pehlad Pur Bangar",
      "State": "Delhi *",
      "District": "North West"
    },
    {
      "City": "Pehowa",
      "State": "Haryana",
      "District": "Kurukshetra"
    },
    {
      "City": "Pen",
      "State": "Maharashtra",
      "District": "Raigarh"
    },
    {
      "City": "Pendra",
      "State": "Chhattisgarh",
      "District": "Bilaspur"
    },
    {
      "City": "Penha-de-Franca",
      "State": "Goa",
      "District": "North Goa"
    },
    {
      "City": "Pennadam",
      "State": "Tamil Nadu",
      "District": "Cuddalore"
    },
    {
      "City": "Pennagaram",
      "State": "Tamil Nadu",
      "District": "Dharmapuri"
    },
    {
      "City": "Pennathur",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Peraiyur",
      "State": "Tamil Nadu",
      "District": "Madurai"
    },
    {
      "City": "Perakam",
      "State": "Kerala",
      "District": "Thrissur"
    },
    {
      "City": "Peralam",
      "State": "Tamil Nadu",
      "District": "Thiruvarur"
    },
    {
      "City": "Peralasseri",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Perambalur",
      "State": "Tamil Nadu",
      "District": "Perambalur"
    },
    {
      "City": "Peranamallur",
      "State": "Tamil Nadu",
      "District": "Tiruvanamalai"
    },
    {
      "City": "Peravurani",
      "State": "Tamil Nadu",
      "District": "Thanjavur"
    },
    {
      "City": "Peringathur",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Perinthalmanna",
      "State": "Kerala",
      "District": "Malappuram"
    },
    {
      "City": "Periya Negamam",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Periyakodiveri",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Periyakulam",
      "State": "Tamil Nadu",
      "District": "Theni"
    },
    {
      "City": "Periyanaickenpalayam",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Periyapatti",
      "State": "Tamil Nadu",
      "District": "Namakkal"
    },
    {
      "City": "Periyasemur",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Pernampattu",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Pernem",
      "State": "Goa",
      "District": "North Goa"
    },
    {
      "City": "Perumagalur",
      "State": "Tamil Nadu",
      "District": "Thanjavur"
    },
    {
      "City": "Perumandi",
      "State": "Tamil Nadu",
      "District": "Thanjavur"
    },
    {
      "City": "Perumbaikad",
      "State": "Kerala",
      "District": "Kottayam"
    },
    {
      "City": "Perumbavoor",
      "State": "Kerala",
      "District": "Ernakulam"
    },
    {
      "City": "Perumuchi",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Perundurai",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Perungalathur",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Perungudi",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Perungulam",
      "State": "Tamil Nadu",
      "District": "Toothukudi"
    },
    {
      "City": "Perur",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Peth Umri",
      "State": "Maharashtra",
      "District": "Nanded"
    },
    {
      "City": "Pethampalayam",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Pethanaickenpalayam",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Petlad",
      "State": "Gujarat",
      "District": "Anand"
    },
    {
      "City": "Petlawad",
      "State": "Madhya Pradesh",
      "District": "Jhabua"
    },
    {
      "City": "Petro Chemical Complex INA",
      "State": "Gujarat",
      "District": "Vadodara"
    },
    {
      "City": "Phagwara",
      "State": "Punjab",
      "District": "Kapurthala"
    },
    {
      "City": "Phalauda",
      "State": "Uttar Pradesh",
      "District": "Meerut"
    },
    {
      "City": "Phalna",
      "State": "Rajasthan",
      "District": "Pali"
    },
    {
      "City": "Phalodi",
      "State": "Rajasthan",
      "District": "Jodhpur"
    },
    {
      "City": "Phaltan",
      "State": "Maharashtra",
      "District": "Satara"
    },
    {
      "City": "Phaphund",
      "State": "Uttar Pradesh",
      "District": "Auraiya"
    },
    {
      "City": "Phek",
      "State": "Nagaland",
      "District": "Phek"
    },
    {
      "City": "Phillaur",
      "State": "Punjab",
      "District": "Jalandhar"
    },
    {
      "City": "Phulabani",
      "State": "Orissa",
      "District": "Kandhamal"
    },
    {
      "City": "Phulera",
      "State": "Rajasthan",
      "District": "Jaipur"
    },
    {
      "City": "Phulia",
      "State": "West Bengal",
      "District": "Nadia"
    },
    {
      "City": "Phulpur",
      "State": "Uttar Pradesh",
      "District": "Allahabad"
    },
    {
      "City": "Phulpur",
      "State": "Uttar Pradesh",
      "District": "Azamgarh"
    },
    {
      "City": "Phulwari Sharif",
      "State": "Bihar",
      "District": "Patna"
    },
    {
      "City": "Phulwaria",
      "State": "Uttar Pradesh",
      "District": "Varanasi"
    },
    {
      "City": "Phunderdihari",
      "State": "Chhattisgarh",
      "District": "Surguja"
    },
    {
      "City": "Phuphkalan",
      "State": "Madhya Pradesh",
      "District": "Bhind"
    },
    {
      "City": "Phusro",
      "State": "Jharkhand",
      "District": "Bokaro"
    },
    {
      "City": "Pichhore",
      "State": "Madhya Pradesh",
      "District": "Gwalior"
    },
    {
      "City": "Pichhore",
      "State": "Madhya Pradesh",
      "District": "Shivpuri"
    },
    {
      "City": "Pihani",
      "State": "Uttar Pradesh",
      "District": "Hardoi"
    },
    {
      "City": "Pilani",
      "State": "Rajasthan",
      "District": "Jhunjhunun"
    },
    {
      "City": "Pilibanga",
      "State": "Rajasthan",
      "District": "Hanumangarh"
    },
    {
      "City": "Pilibhit",
      "State": "Uttar Pradesh",
      "District": "Pilibhit"
    },
    {
      "City": "Pilkhana",
      "State": "Uttar Pradesh",
      "District": "Aligarh"
    },
    {
      "City": "Pilkhuwa",
      "State": "Uttar Pradesh",
      "District": "Ghaziabad"
    },
    {
      "City": "Pillanallur",
      "State": "Tamil Nadu",
      "District": "Namakkal"
    },
    {
      "City": "Pimpri Chinchwad",
      "State": "Maharashtra",
      "District": "Pune"
    },
    {
      "City": "Pinahat",
      "State": "Uttar Pradesh",
      "District": "Agra"
    },
    {
      "City": "Pinarayi",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Pindwara",
      "State": "Rajasthan",
      "District": "Sirohi"
    },
    {
      "City": "Pinjore",
      "State": "Haryana",
      "District": "Panchkula"
    },
    {
      "City": "Pipalsana Chaudhari",
      "State": "Uttar Pradesh",
      "District": "Bareilly"
    },
    {
      "City": "Piparcity",
      "State": "Rajasthan",
      "District": "Jodhpur"
    },
    {
      "City": "Pipariya",
      "State": "Madhya Pradesh",
      "District": "Hoshangabad"
    },
    {
      "City": "Pipariya",
      "State": "Madhya Pradesh",
      "District": "Jabalpur"
    },
    {
      "City": "Pipiganj",
      "State": "Uttar Pradesh",
      "District": "Gorakhpur"
    },
    {
      "City": "Pipili",
      "State": "Orissa",
      "District": "Puri"
    },
    {
      "City": "Piploda",
      "State": "Madhya Pradesh",
      "District": "Ratlam"
    },
    {
      "City": "Piplya Mandi",
      "State": "Madhya Pradesh",
      "District": "Mandsaur"
    },
    {
      "City": "Pipraich",
      "State": "Uttar Pradesh",
      "District": "Gorakhpur"
    },
    {
      "City": "Pipri",
      "State": "Uttar Pradesh",
      "District": "Sonbhadra"
    },
    {
      "City": "Pirawa",
      "State": "Rajasthan",
      "District": "Jhalawar"
    },
    {
      "City": "Piriyapatna",
      "State": "Karnataka",
      "District": "Mysore"
    },
    {
      "City": "Piro",
      "State": "Bihar",
      "District": "Bhojpur"
    },
    {
      "City": "Pitapuram",
      "State": "Andhra Pradesh",
      "District": "East Godavari"
    },
    {
      "City": "Pithampur",
      "State": "Madhya Pradesh",
      "District": "Dhar"
    },
    {
      "City": "Pithora",
      "State": "Chhattisgarh",
      "District": "Mahasamund"
    },
    {
      "City": "Pithoragarh",
      "State": "Uttaranchal",
      "District": "Pithoragarh"
    },
    {
      "City": "Podara",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Pokaran",
      "State": "Rajasthan",
      "District": "Jaisalmer"
    },
    {
      "City": "Poladpur",
      "State": "Maharashtra",
      "District": "Raigarh"
    },
    {
      "City": "Polasara",
      "State": "Orissa",
      "District": "Ganjam"
    },
    {
      "City": "Polay Kalan",
      "State": "Madhya Pradesh",
      "District": "Shajapur"
    },
    {
      "City": "Polichalur",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Pollachi",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Polur",
      "State": "Tamil Nadu",
      "District": "Tiruvanamalai"
    },
    {
      "City": "Ponda",
      "State": "Goa",
      "District": "North Goa"
    },
    {
      "City": "Pondar Kanali",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Pondicherry",
      "State": "Pondicherry *",
      "District": "Pondicherry"
    },
    {
      "City": "Ponmani",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Ponnamaravathi",
      "State": "Tamil Nadu",
      "District": "Pudukkottai"
    },
    {
      "City": "Ponnampatti",
      "State": "Tamil Nadu",
      "District": "Tiruchirappalli"
    },
    {
      "City": "Ponnani",
      "State": "Kerala",
      "District": "Malappuram"
    },
    {
      "City": "Ponneri",
      "State": "Tamil Nadu",
      "District": "Thiruvallur"
    },
    {
      "City": "Ponnur",
      "State": "Andhra Pradesh",
      "District": "Guntur"
    },
    {
      "City": "Poolambadi",
      "State": "Tamil Nadu",
      "District": "Perambalur"
    },
    {
      "City": "Poolampatti",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Pooluvapatti",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Poonamallee",
      "State": "Tamil Nadu",
      "District": "Thiruvallur"
    },
    {
      "City": "Pooth Kalan",
      "State": "Delhi *",
      "District": "North West"
    },
    {
      "City": "Pooth Khurd",
      "State": "Delhi *",
      "District": "North West"
    },
    {
      "City": "Porbandar",
      "State": "Gujarat",
      "District": "Porbandar"
    },
    {
      "City": "Porompat",
      "State": "Manipur",
      "District": "Imphal East"
    },
    {
      "City": "Porsa",
      "State": "Madhya Pradesh",
      "District": "Morena"
    },
    {
      "City": "Port Blair",
      "State": "Andaman & Nicobar Islands *",
      "District": "Andamans"
    },
    {
      "City": "Porur",
      "State": "Tamil Nadu",
      "District": "Thiruvallur"
    },
    {
      "City": "Pothanur",
      "State": "Tamil Nadu",
      "District": "Namakkal"
    },
    {
      "City": "Pothatturpettai",
      "State": "Tamil Nadu",
      "District": "Thiruvallur"
    },
    {
      "City": "Pottore",
      "State": "Kerala",
      "District": "Thrissur"
    },
    {
      "City": "Powayan",
      "State": "Uttar Pradesh",
      "District": "Shahjahanpur"
    },
    {
      "City": "Prantij",
      "State": "Gujarat",
      "District": "Sabar Kantha"
    },
    {
      "City": "Pratapgarh",
      "State": "Tripura",
      "District": "West Tripura"
    },
    {
      "City": "Pratapgarh",
      "State": "Rajasthan",
      "District": "Chittaurgarh"
    },
    {
      "City": "Pratapgarh City",
      "State": "Uttar Pradesh",
      "District": "Pratapgarh"
    },
    {
      "City": "Pratapsasan",
      "State": "Orissa",
      "District": "Khordha"
    },
    {
      "City": "Pratitnagar",
      "State": "Uttaranchal",
      "District": "Dehradun"
    },
    {
      "City": "Prayagpur",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Prithvipur",
      "State": "Madhya Pradesh",
      "District": "Tikamgarh"
    },
    {
      "City": "Proddatur",
      "State": "Andhra Pradesh",
      "District": "Cuddapah"
    },
    {
      "City": "Pudu",
      "State": "Karnataka",
      "District": "Dakshina Kannada"
    },
    {
      "City": "Pudukadai",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Pudukkottai",
      "State": "Tamil Nadu",
      "District": "Pudukkottai"
    },
    {
      "City": "Pudukkottai",
      "State": "Tamil Nadu",
      "District": "Pudukkottai"
    },
    {
      "City": "Pudupalaiyam Aghraharam",
      "State": "Tamil Nadu",
      "District": "Namakkal"
    },
    {
      "City": "Pudupalayam",
      "State": "Tamil Nadu",
      "District": "Tiruvanamalai"
    },
    {
      "City": "Pudupatti",
      "State": "Tamil Nadu",
      "District": "Theni"
    },
    {
      "City": "Pudupatti",
      "State": "Tamil Nadu",
      "District": "Virudhunagar"
    },
    {
      "City": "Pudupattinam",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Pudur (S)",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Puduvayal",
      "State": "Tamil Nadu",
      "District": "Sivaganga"
    },
    {
      "City": "Pujali",
      "State": "West Bengal",
      "District": "South Twentyfour Parganas"
    },
    {
      "City": "Pukhrayan",
      "State": "Uttar Pradesh",
      "District": "Kanpur Dehat"
    },
    {
      "City": "Pul Pehlad",
      "State": "Delhi *",
      "District": "South"
    },
    {
      "City": "Pulgaon",
      "State": "Maharashtra",
      "District": "Wardha"
    },
    {
      "City": "Puliyankudi",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Puliyur",
      "State": "Tamil Nadu",
      "District": "Kapur"
    },
    {
      "City": "Pullampadi",
      "State": "Tamil Nadu",
      "District": "Tiruchirappalli"
    },
    {
      "City": "Pulwama",
      "State": "Jammu & Kashmir",
      "District": "Pulwama"
    },
    {
      "City": "Punahana",
      "State": "Haryana",
      "District": "Gurgaon"
    },
    {
      "City": "Punalur",
      "State": "Kerala",
      "District": "Kollam"
    },
    {
      "City": "Punch",
      "State": "Jammu & Kashmir",
      "District": "Punch"
    },
    {
      "City": "Pundri",
      "State": "Haryana",
      "District": "Kaithal"
    },
    {
      "City": "Pune",
      "State": "Maharashtra",
      "District": "Pune"
    },
    {
      "City": "Pune",
      "State": "Maharashtra",
      "District": "Pune"
    },
    {
      "City": "Punganur",
      "State": "Andhra Pradesh",
      "District": "Chittoor"
    },
    {
      "City": "Punjai Thottakurichi",
      "State": "Tamil Nadu",
      "District": "Kapur"
    },
    {
      "City": "Punjaipugalur",
      "State": "Tamil Nadu",
      "District": "Kapur"
    },
    {
      "City": "Punjaipuliampatti",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Puranattukara",
      "State": "Kerala",
      "District": "Thrissur"
    },
    {
      "City": "Puranpur",
      "State": "Uttar Pradesh",
      "District": "Pilibhit"
    },
    {
      "City": "Purba Tajpur",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "Purdilnagar",
      "State": "Uttar Pradesh",
      "District": "Hathras"
    },
    {
      "City": "Puri",
      "State": "Orissa",
      "District": "Puri"
    },
    {
      "City": "Purna",
      "State": "Maharashtra",
      "District": "Parbhani"
    },
    {
      "City": "Purnia",
      "State": "Bihar",
      "District": "Purnia"
    },
    {
      "City": "Purquazi",
      "State": "Uttar Pradesh",
      "District": "Muzaffarnagar"
    },
    {
      "City": "Puruliya",
      "State": "West Bengal",
      "District": "Puruliya"
    },
    {
      "City": "Purushottamnagar",
      "State": "Maharashtra",
      "District": "Nandurbar"
    },
    {
      "City": "Purusottampur",
      "State": "Orissa",
      "District": "Ganjam"
    },
    {
      "City": "Purwa",
      "State": "Uttar Pradesh",
      "District": "Unnao"
    },
    {
      "City": "Pusad",
      "State": "Maharashtra",
      "District": "Yavatmal"
    },
    {
      "City": "Pushkar",
      "State": "Rajasthan",
      "District": "Ajmer"
    },
    {
      "City": "Puthalam",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Puthukkad",
      "State": "Kerala",
      "District": "Thrissur"
    },
    {
      "City": "Puthunagaram",
      "State": "Kerala",
      "District": "Palakkad"
    },
    {
      "City": "Puttur",
      "State": "Andhra Pradesh",
      "District": "Chittoor"
    },
    {
      "City": "Puttur",
      "State": "Karnataka",
      "District": "Dakshina Kannada"
    },
    {
      "City": "Puvalur",
      "State": "Tamil Nadu",
      "District": "Tiruchirappalli"
    },
    {
      "City": "Puzhal",
      "State": "Tamil Nadu",
      "District": "Thiruvallur"
    },
    {
      "City": "Puzhathi",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Puzhithivakkam (Ullagaram)",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Pynthorumkhrah",
      "State": "Meghalaya",
      "District": "East Khasi Hills"
    },
    {
      "City": "Qadian",
      "State": "Punjab",
      "District": "Gurdaspur"
    },
    {
      "City": "Qasimpur Power House Colony",
      "State": "Uttar Pradesh",
      "District": "Aligarh"
    },
    {
      "City": "Qazigund",
      "State": "Jammu & Kashmir",
      "District": "Anantnag"
    },
    {
      "City": "Quammruddin Nagar",
      "State": "Delhi *",
      "District": "West"
    },
    {
      "City": "Quepem",
      "State": "Goa",
      "District": "South Goa"
    },
    {
      "City": "Queula",
      "State": "Goa",
      "District": "North Goa"
    },
    {
      "City": "Quilandy",
      "State": "Kerala",
      "District": "Kozhikode"
    },
    {
      "City": "Quthbullapur",
      "State": "Andhra Pradesh",
      "District": "Rangareddi"
    },
    {
      "City": "R.Pudupatti",
      "State": "Tamil Nadu",
      "District": "Namakkal"
    },
    {
      "City": "R.S.Mangalam",
      "State": "Tamil Nadu",
      "District": "Ramanathapuram"
    },
    {
      "City": "Rabkavi Banhatti",
      "State": "Karnataka",
      "District": "Bagalkot"
    },
    {
      "City": "Rabupura",
      "State": "Uttar Pradesh",
      "District": "Gautam Buddha Nagar"
    },
    {
      "City": "Radaur",
      "State": "Haryana",
      "District": "Yamunanagar"
    },
    {
      "City": "Radhakund",
      "State": "Uttar Pradesh",
      "District": "Mathura"
    },
    {
      "City": "Radhanpur",
      "State": "Gujarat",
      "District": "Patan"
    },
    {
      "City": "Rae Bareli",
      "State": "Uttar Pradesh",
      "District": "Rae Bareli"
    },
    {
      "City": "Rafiganj",
      "State": "Bihar",
      "District": "Aurangabad"
    },
    {
      "City": "Raghogarh -Vijaypur",
      "State": "Madhya Pradesh",
      "District": "Guna"
    },
    {
      "City": "Raghudebbati",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Raghunathchak",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Raghunathpur",
      "State": "Bihar",
      "District": "Katihar"
    },
    {
      "City": "Raghunathpur",
      "State": "West Bengal",
      "District": "Puruliya"
    },
    {
      "City": "Raghunathpur (PS-Dankuni)",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "Raghunathpur (PS-Magra)",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "Rahatgarh",
      "State": "Madhya Pradesh",
      "District": "Sagar"
    },
    {
      "City": "Rahimatpur",
      "State": "Maharashtra",
      "District": "Satara"
    },
    {
      "City": "Rahon",
      "State": "Punjab",
      "District": "Nawanshahr"
    },
    {
      "City": "Rahta Pimplas",
      "State": "Maharashtra",
      "District": "Ahmadnagar"
    },
    {
      "City": "Rahuri",
      "State": "Maharashtra",
      "District": "Ahmadnagar"
    },
    {
      "City": "Raichur",
      "State": "Karnataka",
      "District": "Raichur"
    },
    {
      "City": "Raigachhi",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Raiganj",
      "State": "West Bengal",
      "District": "Uttar Dinajpur"
    },
    {
      "City": "Raigarh",
      "State": "Chhattisgarh",
      "District": "Raigarh"
    },
    {
      "City": "Raikot",
      "State": "Punjab",
      "District": "Ludhiana"
    },
    {
      "City": "Raipur",
      "State": "Uttaranchal",
      "District": "Dehradun"
    },
    {
      "City": "Raipur",
      "State": "Chhattisgarh",
      "District": "Raipur"
    },
    {
      "City": "Raipur Rani",
      "State": "Haryana",
      "District": "Panchkula"
    },
    {
      "City": "Rairangpur",
      "State": "Orissa",
      "District": "Mayurbhanj"
    },
    {
      "City": "Raisen",
      "State": "Madhya Pradesh",
      "District": "Raisen"
    },
    {
      "City": "Raisinghnagar",
      "State": "Rajasthan",
      "District": "Ganganagar"
    },
    {
      "City": "Raja Ka Rampur",
      "State": "Uttar Pradesh",
      "District": "Etah"
    },
    {
      "City": "Rajagangapur",
      "State": "Orissa",
      "District": "Sundargarh"
    },
    {
      "City": "Rajahmundry",
      "State": "Andhra Pradesh",
      "District": "East Godavari"
    },
    {
      "City": "Rajakhedi",
      "State": "Madhya Pradesh",
      "District": "Sagar"
    },
    {
      "City": "Rajakhera",
      "State": "Rajasthan",
      "District": "Dhaulpur"
    },
    {
      "City": "Rajaldesar",
      "State": "Rajasthan",
      "District": "Churu"
    },
    {
      "City": "Rajam",
      "State": "Andhra Pradesh",
      "District": "Srikakulam"
    },
    {
      "City": "Rajapalayam",
      "State": "Tamil Nadu",
      "District": "Virudhunagar"
    },
    {
      "City": "Rajapur",
      "State": "Maharashtra",
      "District": "Ratnagiri"
    },
    {
      "City": "Rajapur",
      "State": "Uttar Pradesh",
      "District": "Chitrakoot"
    },
    {
      "City": "Rajarhat Gopalpur",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Rajasansi",
      "State": "Punjab",
      "District": "Amritsar"
    },
    {
      "City": "Rajauri",
      "State": "Jammu & Kashmir",
      "District": "Rajauri"
    },
    {
      "City": "Rajendranagar",
      "State": "Andhra Pradesh",
      "District": "Rangareddi"
    },
    {
      "City": "Rajgamar",
      "State": "Chhattisgarh",
      "District": "Korba"
    },
    {
      "City": "Rajgarh",
      "State": "Rajasthan",
      "District": "Churu"
    },
    {
      "City": "Rajgarh",
      "State": "Rajasthan",
      "District": "Alwar"
    },
    {
      "City": "Rajgarh",
      "State": "Himachal Pradesh",
      "District": "Sirmaur"
    },
    {
      "City": "Rajgarh",
      "State": "Madhya Pradesh",
      "District": "Dhar"
    },
    {
      "City": "Rajgarh",
      "State": "Madhya Pradesh",
      "District": "Rajgarh"
    },
    {
      "City": "Rajgir",
      "State": "Bihar",
      "District": "Nalanda"
    },
    {
      "City": "Rajgurunagar (Khed)",
      "State": "Maharashtra",
      "District": "Pune"
    },
    {
      "City": "Rajkot",
      "State": "Gujarat",
      "District": "Rajkot"
    },
    {
      "City": "Rajmahal",
      "State": "Jharkhand",
      "District": "Sahibganj"
    },
    {
      "City": "Rajnagar",
      "State": "Madhya Pradesh",
      "District": "Chhatarpur"
    },
    {
      "City": "Rajnandgaon",
      "State": "Chhattisgarh",
      "District": "Rajnandgaon"
    },
    {
      "City": "Rajokri",
      "State": "Delhi *",
      "District": "South West"
    },
    {
      "City": "Rajpipla",
      "State": "Gujarat",
      "District": "Narmada"
    },
    {
      "City": "Rajpur",
      "State": "Madhya Pradesh",
      "District": "Barwani"
    },
    {
      "City": "Rajpur Sonarpur",
      "State": "West Bengal",
      "District": "South Twentyfour Parganas"
    },
    {
      "City": "Rajpura",
      "State": "Punjab",
      "District": "Patiala"
    },
    {
      "City": "Rajsamand",
      "State": "Rajasthan",
      "District": "Rajsamand"
    },
    {
      "City": "Rajula",
      "State": "Gujarat",
      "District": "Amreli"
    },
    {
      "City": "Rajur",
      "State": "Maharashtra",
      "District": "Yavatmal"
    },
    {
      "City": "Rajura",
      "State": "Maharashtra",
      "District": "Chandrapur"
    },
    {
      "City": "Ram Garh",
      "State": "Jammu & Kashmir",
      "District": "Jammu"
    },
    {
      "City": "Ramachandrapuram",
      "State": "Andhra Pradesh",
      "District": "Medak"
    },
    {
      "City": "Ramachandrapuram",
      "State": "Andhra Pradesh",
      "District": "East Godavari"
    },
    {
      "City": "Ramachandrapuram-Bhel Township )",
      "State": "Andhra Pradesh",
      "District": "Medak"
    },
    {
      "City": "Ramagundam",
      "State": "Andhra Pradesh",
      "District": "Karimnagar"
    },
    {
      "City": "Raman",
      "State": "Punjab",
      "District": "Bathinda"
    },
    {
      "City": "Ramanagaram",
      "State": "Karnataka",
      "District": "Bangalore Rural"
    },
    {
      "City": "Ramanathapuram",
      "State": "Tamil Nadu",
      "District": "Ramanathapuram"
    },
    {
      "City": "Ramanattukara",
      "State": "Kerala",
      "District": "Kozhikode"
    },
    {
      "City": "Ramanayyapeta",
      "State": "Andhra Pradesh",
      "District": "East Godavari"
    },
    {
      "City": "Ramanujganj",
      "State": "Chhattisgarh",
      "District": "Surguja"
    },
    {
      "City": "Ramapuram",
      "State": "Tamil Nadu",
      "District": "Thiruvallur"
    },
    {
      "City": "Ramapuram",
      "State": "Andhra Pradesh",
      "District": "Kurnool"
    },
    {
      "City": "Ramban",
      "State": "Jammu & Kashmir",
      "District": "Doda"
    },
    {
      "City": "Rambha",
      "State": "Orissa",
      "District": "Ganjam"
    },
    {
      "City": "Ramchandrapur",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Ramdass",
      "State": "Punjab",
      "District": "Amritsar"
    },
    {
      "City": "Ramdurg",
      "State": "Karnataka",
      "District": "Belgaum"
    },
    {
      "City": "Rameswaram",
      "State": "Andhra Pradesh",
      "District": "Cuddapah"
    },
    {
      "City": "Rameswaram",
      "State": "Tamil Nadu",
      "District": "Ramanathapuram"
    },
    {
      "City": "Ramganj Mandi",
      "State": "Rajasthan",
      "District": "Kota"
    },
    {
      "City": "Ramgarh",
      "State": "Rajasthan",
      "District": "Sikar"
    },
    {
      "City": "Ramgarh Cantonment",
      "State": "Jharkhand",
      "District": "Hazaribag"
    },
    {
      "City": "Ramjibanpur",
      "State": "West Bengal",
      "District": "Medinipur"
    },
    {
      "City": "Ramkola",
      "State": "Uttar Pradesh",
      "District": "Kushinagar"
    },
    {
      "City": "Ramnagar",
      "State": "Bihar",
      "District": "Pashchim Champaran"
    },
    {
      "City": "Ramnagar",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Ramnagar",
      "State": "Jammu & Kashmir",
      "District": "Udhampur"
    },
    {
      "City": "Ramnagar",
      "State": "Uttaranchal",
      "District": "Nainital"
    },
    {
      "City": "Ramnagar",
      "State": "Uttar Pradesh",
      "District": "Barabanki"
    },
    {
      "City": "Ramnagar",
      "State": "Uttar Pradesh",
      "District": "Varanasi"
    },
    {
      "City": "Ramol",
      "State": "Gujarat",
      "District": "Ahmadabad"
    },
    {
      "City": "Rampachodavaram",
      "State": "Andhra Pradesh",
      "District": "East Godavari"
    },
    {
      "City": "Rampur",
      "State": "Uttar Pradesh",
      "District": "Rampur"
    },
    {
      "City": "Rampur",
      "State": "Himachal Pradesh",
      "District": "Shimla"
    },
    {
      "City": "Rampur Baghelan",
      "State": "Madhya Pradesh",
      "District": "Satna"
    },
    {
      "City": "Rampur Bhawanipur",
      "State": "Uttar Pradesh",
      "District": "Barabanki"
    },
    {
      "City": "Rampur Karkhana",
      "State": "Uttar Pradesh",
      "District": "Deoria"
    },
    {
      "City": "Rampur Maniharan",
      "State": "Uttar Pradesh",
      "District": "Saharanpur"
    },
    {
      "City": "Rampur Naikin",
      "State": "Madhya Pradesh",
      "District": "Sidhi"
    },
    {
      "City": "Rampura",
      "State": "Madhya Pradesh",
      "District": "Neemuch"
    },
    {
      "City": "Rampura",
      "State": "Uttar Pradesh",
      "District": "Jalaun"
    },
    {
      "City": "Rampura Phul",
      "State": "Punjab",
      "District": "Bathinda"
    },
    {
      "City": "Rampurhat",
      "State": "West Bengal",
      "District": "Birbhum"
    },
    {
      "City": "Ramtek",
      "State": "Maharashtra",
      "District": "Nagpur"
    },
    {
      "City": "Ranaghat",
      "State": "West Bengal",
      "District": "Nadia"
    },
    {
      "City": "Ranapur",
      "State": "Madhya Pradesh",
      "District": "Jhabua"
    },
    {
      "City": "Ranavav",
      "State": "Gujarat",
      "District": "Porbandar"
    },
    {
      "City": "Ranbir Singh Pora",
      "State": "Jammu & Kashmir",
      "District": "Jammu"
    },
    {
      "City": "Ranchi",
      "State": "Jharkhand",
      "District": "Ranchi"
    },
    {
      "City": "Rangapara",
      "State": "Assam",
      "District": "Sonitpur"
    },
    {
      "City": "Rangia",
      "State": "Assam",
      "District": "Kamrup"
    },
    {
      "City": "Rangpo",
      "State": "Sikkim",
      "District": "East"
    },
    {
      "City": "Rani",
      "State": "Rajasthan",
      "District": "Pali"
    },
    {
      "City": "Rania",
      "State": "Haryana",
      "District": "Sirsa"
    },
    {
      "City": "Ranibennur",
      "State": "Karnataka",
      "District": "Haveri"
    },
    {
      "City": "Raniganj",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Ranikhet",
      "State": "Uttaranchal",
      "District": "Almora"
    },
    {
      "City": "Ranip",
      "State": "Gujarat",
      "District": "Ahmadabad"
    },
    {
      "City": "Ranipettai",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Ranipur",
      "State": "Uttar Pradesh",
      "District": "Jhansi"
    },
    {
      "City": "Ranirbazar",
      "State": "Tripura",
      "District": "West Tripura"
    },
    {
      "City": "Ranoli",
      "State": "Gujarat",
      "District": "Vadodara"
    },
    {
      "City": "Rapar",
      "State": "Gujarat",
      "District": "Kachchh"
    },
    {
      "City": "Rashidpur Garhi",
      "State": "Uttar Pradesh",
      "District": "Bijnor"
    },
    {
      "City": "Rasipuram",
      "State": "Tamil Nadu",
      "District": "Namakkal"
    },
    {
      "City": "Rasra",
      "State": "Uttar Pradesh",
      "District": "Ballia"
    },
    {
      "City": "Rasulabad",
      "State": "Uttar Pradesh",
      "District": "Unnao"
    },
    {
      "City": "Ratangarh",
      "State": "Rajasthan",
      "District": "Churu"
    },
    {
      "City": "Ratangarh",
      "State": "Madhya Pradesh",
      "District": "Neemuch"
    },
    {
      "City": "Ratannagar",
      "State": "Rajasthan",
      "District": "Churu"
    },
    {
      "City": "Ratanpur",
      "State": "Chhattisgarh",
      "District": "Bilaspur"
    },
    {
      "City": "Rath",
      "State": "Uttar Pradesh",
      "District": "Hamirpur"
    },
    {
      "City": "Ratia",
      "State": "Haryana",
      "District": "Fatehabad"
    },
    {
      "City": "Ratibati",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Ratlam",
      "State": "Madhya Pradesh",
      "District": "Ratlam"
    },
    {
      "City": "Ratlam Rly. Colony (Ratlam Kasba)",
      "State": "Madhya Pradesh",
      "District": "Ratlam"
    },
    {
      "City": "Ratnagiri",
      "State": "Maharashtra",
      "District": "Ratnagiri"
    },
    {
      "City": "Rau",
      "State": "Madhya Pradesh",
      "District": "Indore"
    },
    {
      "City": "Raurkela",
      "State": "Orissa",
      "District": "Sundargarh"
    },
    {
      "City": "Raurkela Industrialship",
      "State": "Orissa",
      "District": "Sundargarh"
    },
    {
      "City": "Raver",
      "State": "Maharashtra",
      "District": "Jalgaon"
    },
    {
      "City": "Rawalsar",
      "State": "Himachal Pradesh",
      "District": "Mandi"
    },
    {
      "City": "Rawatbhata",
      "State": "Rajasthan",
      "District": "Chittaurgarh"
    },
    {
      "City": "Rawatsar",
      "State": "Rajasthan",
      "District": "Hanumangarh"
    },
    {
      "City": "Raxaul Bazar",
      "State": "Bihar",
      "District": "Purba Champaran"
    },
    {
      "City": "Raya",
      "State": "Uttar Pradesh",
      "District": "Mathura"
    },
    {
      "City": "Rayachoti",
      "State": "Andhra Pradesh",
      "District": "Cuddapah"
    },
    {
      "City": "Rayadurg",
      "State": "Andhra Pradesh",
      "District": "Anantapur"
    },
    {
      "City": "Rayagada",
      "State": "Orissa",
      "District": "Rayagada"
    },
    {
      "City": "Rayagiri",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Raybag",
      "State": "Karnataka",
      "District": "Belgaum"
    },
    {
      "City": "Rayya",
      "State": "Punjab",
      "District": "Amritsar"
    },
    {
      "City": "Reasi",
      "State": "Jammu & Kashmir",
      "District": "Udhampur"
    },
    {
      "City": "Redhakhol",
      "State": "Orissa",
      "District": "Sambalpur"
    },
    {
      "City": "Reengus",
      "State": "Rajasthan",
      "District": "Sikar"
    },
    {
      "City": "Reethapuram",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Rehambal",
      "State": "Jammu & Kashmir",
      "District": "Udhampur"
    },
    {
      "City": "Rehli",
      "State": "Madhya Pradesh",
      "District": "Sagar"
    },
    {
      "City": "Rehti",
      "State": "Madhya Pradesh",
      "District": "Sehore"
    },
    {
      "City": "Reis Magos",
      "State": "Goa",
      "District": "North Goa"
    },
    {
      "City": "Religara alias Pachhiari",
      "State": "Jharkhand",
      "District": "Hazaribag"
    },
    {
      "City": "Remuna",
      "State": "Orissa",
      "District": "Baleshwar"
    },
    {
      "City": "Rengali Dam Projectship",
      "State": "Orissa",
      "District": "Anugul"
    },
    {
      "City": "Renigunta",
      "State": "Andhra Pradesh",
      "District": "Chittoor"
    },
    {
      "City": "Renukoot",
      "State": "Uttar Pradesh",
      "District": "Sonbhadra"
    },
    {
      "City": "Reoti",
      "State": "Uttar Pradesh",
      "District": "Ballia"
    },
    {
      "City": "Repalle",
      "State": "Andhra Pradesh",
      "District": "Guntur"
    },
    {
      "City": "Resubelpara",
      "State": "Meghalaya",
      "District": "East Garo Hills"
    },
    {
      "City": "Revelganj",
      "State": "Bihar",
      "District": "Saran"
    },
    {
      "City": "Rewa",
      "State": "Madhya Pradesh",
      "District": "Rewa"
    },
    {
      "City": "Rewari",
      "State": "Haryana",
      "District": "Rewari"
    },
    {
      "City": "Rewari (Rural)",
      "State": "Haryana",
      "District": "Rewari"
    },
    {
      "City": "Richha",
      "State": "Uttar Pradesh",
      "District": "Bareilly"
    },
    {
      "City": "Rikhabdeo",
      "State": "Rajasthan",
      "District": "Udaipur"
    },
    {
      "City": "Rishikesh",
      "State": "Uttaranchal",
      "District": "Dehradun"
    },
    {
      "City": "Rishra",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "Rishra",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "Risia Bazar",
      "State": "Uttar Pradesh",
      "District": "Bahraich"
    },
    {
      "City": "Risod",
      "State": "Maharashtra",
      "District": "Washim"
    },
    {
      "City": "Rithora",
      "State": "Uttar Pradesh",
      "District": "Bareilly"
    },
    {
      "City": "Rly. Settlement Roza",
      "State": "Uttar Pradesh",
      "District": "Shahjahanpur"
    },
    {
      "City": "Robertsganj",
      "State": "Uttar Pradesh",
      "District": "Sonbhadra"
    },
    {
      "City": "Robertson Pet",
      "State": "Karnataka",
      "District": "Kolar"
    },
    {
      "City": "Roha Ashtami",
      "State": "Maharashtra",
      "District": "Raigarh"
    },
    {
      "City": "Rohraband",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Rohru",
      "State": "Himachal Pradesh",
      "District": "Shimla"
    },
    {
      "City": "Rohtak",
      "State": "Haryana",
      "District": "Rohtak"
    },
    {
      "City": "Roing",
      "State": "Arunachal Pradesh",
      "District": "Dibang Valley"
    },
    {
      "City": "Ron",
      "State": "Karnataka",
      "District": "Gadag"
    },
    {
      "City": "Roorkee",
      "State": "Uttaranchal",
      "District": "Hardwar"
    },
    {
      "City": "Roorkee",
      "State": "Uttaranchal",
      "District": "Hardwar"
    },
    {
      "City": "Rosalpatti",
      "State": "Tamil Nadu",
      "District": "Virudhunagar"
    },
    {
      "City": "Rosera",
      "State": "Bihar",
      "District": "Samastipur"
    },
    {
      "City": "Roshan Pura alias Dichaon Khurd",
      "State": "Delhi *",
      "District": "South West"
    },
    {
      "City": "Rudauli",
      "State": "Uttar Pradesh",
      "District": "Faizabad"
    },
    {
      "City": "Rudayan",
      "State": "Uttar Pradesh",
      "District": "Budaun"
    },
    {
      "City": "Rudra Prayag",
      "State": "Uttaranchal",
      "District": "Rudraprayag"
    },
    {
      "City": "Rudrapur",
      "State": "Uttaranchal",
      "District": "Udham Singh Nagar"
    },
    {
      "City": "Rudrapur",
      "State": "Uttar Pradesh",
      "District": "Deoria"
    },
    {
      "City": "Rudravathi",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Ruiya",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Runji Gautampura",
      "State": "Madhya Pradesh",
      "District": "Indore"
    },
    {
      "City": "Rupnagar",
      "State": "Punjab",
      "District": "Rupnagar"
    },
    {
      "City": "Rura",
      "State": "Uttar Pradesh",
      "District": "Kanpur Dehat"
    },
    {
      "City": "Rurki Kasba",
      "State": "Punjab",
      "District": "Patiala"
    },
    {
      "City": "Rustamnagar Sahaspur",
      "State": "Uttar Pradesh",
      "District": "Moradabad"
    },
    {
      "City": "S. Kannanur",
      "State": "Tamil Nadu",
      "District": "Tiruchirappalli"
    },
    {
      "City": "S.A.S. Nagar (Mohali)",
      "State": "Punjab",
      "District": "Rupnagar"
    },
    {
      "City": "S.Kodikulam",
      "State": "Tamil Nadu",
      "District": "Virudhunagar"
    },
    {
      "City": "S.Nallur",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "S.T. Power Project Town",
      "State": "West Bengal",
      "District": "Puruliya"
    },
    {
      "City": "Sabalgarh",
      "State": "Madhya Pradesh",
      "District": "Morena"
    },
    {
      "City": "Sabathu",
      "State": "Himachal Pradesh",
      "District": "Solan"
    },
    {
      "City": "Sabroom",
      "State": "Tripura",
      "District": "South Tripura"
    },
    {
      "City": "Sachin",
      "State": "Gujarat",
      "District": "Surat"
    },
    {
      "City": "Sachin INA",
      "State": "Gujarat",
      "District": "Surat"
    },
    {
      "City": "Sadabad",
      "State": "Uttar Pradesh",
      "District": "Hathras"
    },
    {
      "City": "Sadalgi",
      "State": "Karnataka",
      "District": "Belgaum"
    },
    {
      "City": "Sadasivpet",
      "State": "Andhra Pradesh",
      "District": "Medak"
    },
    {
      "City": "Sadat",
      "State": "Uttar Pradesh",
      "District": "Ghazipur"
    },
    {
      "City": "Sadat Pur Gujran",
      "State": "Delhi *",
      "District": "North East"
    },
    {
      "City": "Sadaura",
      "State": "Haryana",
      "District": "Yamunanagar"
    },
    {
      "City": "Sadpur",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Sadri",
      "State": "Rajasthan",
      "District": "Pali"
    },
    {
      "City": "Sadulshahar",
      "State": "Rajasthan",
      "District": "Ganganagar"
    },
    {
      "City": "Safidon",
      "State": "Haryana",
      "District": "Jind"
    },
    {
      "City": "Safipur",
      "State": "Uttar Pradesh",
      "District": "Unnao"
    },
    {
      "City": "Sagar",
      "State": "Madhya Pradesh",
      "District": "Sagar"
    },
    {
      "City": "Sagar",
      "State": "Karnataka",
      "District": "Shimoga"
    },
    {
      "City": "Sagar Cantt.",
      "State": "Madhya Pradesh",
      "District": "Sagar"
    },
    {
      "City": "Sagwara",
      "State": "Rajasthan",
      "District": "Dungarpur"
    },
    {
      "City": "Sahajadpur",
      "State": "West Bengal",
      "District": "Murshidabad"
    },
    {
      "City": "Sahanpur",
      "State": "Uttar Pradesh",
      "District": "Bijnor"
    },
    {
      "City": "Sahapur",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Saharanpur",
      "State": "Uttar Pradesh",
      "District": "Saharanpur"
    },
    {
      "City": "Saharsa",
      "State": "Bihar",
      "District": "Saharsa"
    },
    {
      "City": "Sahaspur",
      "State": "Uttar Pradesh",
      "District": "Bijnor"
    },
    {
      "City": "Sahaswan",
      "State": "Uttar Pradesh",
      "District": "Budaun"
    },
    {
      "City": "Sahatwar",
      "State": "Uttar Pradesh",
      "District": "Ballia"
    },
    {
      "City": "Sahawar",
      "State": "Uttar Pradesh",
      "District": "Etah"
    },
    {
      "City": "Sahibabad Daulat Pur",
      "State": "Delhi *",
      "District": "North West"
    },
    {
      "City": "Sahibganj",
      "State": "Jharkhand",
      "District": "Sahibganj"
    },
    {
      "City": "Sahjanwa",
      "State": "Uttar Pradesh",
      "District": "Gorakhpur"
    },
    {
      "City": "Sahnewal",
      "State": "Punjab",
      "District": "Ludhiana"
    },
    {
      "City": "Sahnidih",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Sahpau NP",
      "State": "Uttar Pradesh",
      "District": "Hathras"
    },
    {
      "City": "Saidpur",
      "State": "Uttar Pradesh",
      "District": "Budaun"
    },
    {
      "City": "Saidpur",
      "State": "Uttar Pradesh",
      "District": "Ghazipur"
    },
    {
      "City": "Saidul Ajaib",
      "State": "Delhi *",
      "District": "South"
    },
    {
      "City": "Saiha",
      "State": "Mizoram",
      "District": "Saiha"
    },
    {
      "City": "Sailana",
      "State": "Madhya Pradesh",
      "District": "Ratlam"
    },
    {
      "City": "Sailu",
      "State": "Maharashtra",
      "District": "Parbhani"
    },
    {
      "City": "Sainthal",
      "State": "Uttar Pradesh",
      "District": "Bareilly"
    },
    {
      "City": "Sainthia",
      "State": "West Bengal",
      "District": "Birbhum"
    },
    {
      "City": "Sairang",
      "State": "Mizoram",
      "District": "Aizawl"
    },
    {
      "City": "Saitual",
      "State": "Mizoram",
      "District": "Aizawl"
    },
    {
      "City": "Saiyad Raja",
      "State": "Uttar Pradesh",
      "District": "Chandauli"
    },
    {
      "City": "Sakhanu",
      "State": "Uttar Pradesh",
      "District": "Budaun"
    },
    {
      "City": "Sakit",
      "State": "Uttar Pradesh",
      "District": "Etah"
    },
    {
      "City": "Sakleshpur",
      "State": "Karnataka",
      "District": "Hassan"
    },
    {
      "City": "Sakti",
      "State": "Chhattisgarh",
      "District": "Janjgir-Champa"
    },
    {
      "City": "Salakati",
      "State": "Assam",
      "District": "Kokrajhar"
    },
    {
      "City": "Salangapalayam",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Salap",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Salarpur Khadar",
      "State": "Uttar Pradesh",
      "District": "Gautam Buddha Nagar"
    },
    {
      "City": "Salaya",
      "State": "Gujarat",
      "District": "Jamnagar"
    },
    {
      "City": "Salem",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Salempur",
      "State": "Uttar Pradesh",
      "District": "Deoria"
    },
    {
      "City": "Saligao",
      "State": "Goa",
      "District": "North Goa"
    },
    {
      "City": "Saligram",
      "State": "Karnataka",
      "District": "Udupi"
    },
    {
      "City": "Salon",
      "State": "Uttar Pradesh",
      "District": "Rae Bareli"
    },
    {
      "City": "Salumbar",
      "State": "Rajasthan",
      "District": "Udaipur"
    },
    {
      "City": "Salur",
      "State": "Andhra Pradesh",
      "District": "Vizianagaram"
    },
    {
      "City": "Samalapuram",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Samalkha",
      "State": "Haryana",
      "District": "Panipat"
    },
    {
      "City": "Samalkota",
      "State": "Andhra Pradesh",
      "District": "East Godavari"
    },
    {
      "City": "Samana",
      "State": "Punjab",
      "District": "Patiala"
    },
    {
      "City": "Samastipur",
      "State": "Bihar",
      "District": "Samastipur"
    },
    {
      "City": "Samathur",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Samba",
      "State": "Jammu & Kashmir",
      "District": "Jammu"
    },
    {
      "City": "Sambalpur",
      "State": "Orissa",
      "District": "Sambalpur"
    },
    {
      "City": "Sambavar Vadagarai",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Sambhal",
      "State": "Uttar Pradesh",
      "District": "Moradabad"
    },
    {
      "City": "Sambhalka",
      "State": "Delhi *",
      "District": "South West"
    },
    {
      "City": "Sambhar",
      "State": "Rajasthan",
      "District": "Jaipur"
    },
    {
      "City": "Samdhan",
      "State": "Uttar Pradesh",
      "District": "Kannauj"
    },
    {
      "City": "Samrala",
      "State": "Punjab",
      "District": "Ludhiana"
    },
    {
      "City": "Samthar",
      "State": "Uttar Pradesh",
      "District": "Jhansi"
    },
    {
      "City": "Samurou",
      "State": "Manipur",
      "District": "Thoubal & Imphal West"
    },
    {
      "City": "Sanand",
      "State": "Gujarat",
      "District": "Ahmadabad"
    },
    {
      "City": "Sanaur",
      "State": "Punjab",
      "District": "Patiala"
    },
    {
      "City": "Sanawad",
      "State": "Madhya Pradesh",
      "District": "West Nimar"
    },
    {
      "City": "Sanchi",
      "State": "Madhya Pradesh",
      "District": "Raisen"
    },
    {
      "City": "Sanchore",
      "State": "Rajasthan",
      "District": "Jalor"
    },
    {
      "City": "Sancoale",
      "State": "Goa",
      "District": "South Goa"
    },
    {
      "City": "Sandi",
      "State": "Uttar Pradesh",
      "District": "Hardoi"
    },
    {
      "City": "Sandila",
      "State": "Uttar Pradesh",
      "District": "Hardoi"
    },
    {
      "City": "Sandor",
      "State": "Maharashtra",
      "District": "Thane"
    },
    {
      "City": "Sandur",
      "State": "Karnataka",
      "District": "Bellary"
    },
    {
      "City": "Sangamner",
      "State": "Maharashtra",
      "District": "Ahmadnagar"
    },
    {
      "City": "Sangareddy",
      "State": "Andhra Pradesh",
      "District": "Medak"
    },
    {
      "City": "Sangaria",
      "State": "Rajasthan",
      "District": "Hanumangarh"
    },
    {
      "City": "Sangat",
      "State": "Punjab",
      "District": "Bathinda"
    },
    {
      "City": "Sangli-Miraj & Kupwad",
      "State": "Maharashtra",
      "District": "Sangli"
    },
    {
      "City": "Sangod",
      "State": "Rajasthan",
      "District": "Kota"
    },
    {
      "City": "Sangole",
      "State": "Maharashtra",
      "District": "Solapur"
    },
    {
      "City": "Sangrur",
      "State": "Punjab",
      "District": "Sangrur"
    },
    {
      "City": "Sanguem",
      "State": "Goa",
      "District": "South Goa"
    },
    {
      "City": "Sankaramanallur",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Sankarankoil",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Sankarapuram",
      "State": "Tamil Nadu",
      "District": "Viluppuram"
    },
    {
      "City": "Sankari",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Sankarnagar",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Sankarpur",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Sankeshwar",
      "State": "Karnataka",
      "District": "Belgaum"
    },
    {
      "City": "Sankhol",
      "State": "Haryana",
      "District": "Jhajjar"
    },
    {
      "City": "Sankrail",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Sanoth",
      "State": "Delhi *",
      "District": "North West"
    },
    {
      "City": "Sanquelim",
      "State": "Goa",
      "District": "North Goa"
    },
    {
      "City": "Sansarpur",
      "State": "Punjab",
      "District": "Jalandhar"
    },
    {
      "City": "Santipur",
      "State": "West Bengal",
      "District": "Nadia"
    },
    {
      "City": "Santokhgarh",
      "State": "Himachal Pradesh",
      "District": "Una"
    },
    {
      "City": "Santoshpur",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Santrampur",
      "State": "Gujarat",
      "District": "Panch Mahals"
    },
    {
      "City": "Sanvordem",
      "State": "Goa",
      "District": "South Goa"
    },
    {
      "City": "Sao Jose-de-Areal",
      "State": "Goa",
      "District": "South Goa"
    },
    {
      "City": "Sapatgram",
      "State": "Assam",
      "District": "Dhubri"
    },
    {
      "City": "Sarai Aquil",
      "State": "Uttar Pradesh",
      "District": "Kaushambi"
    },
    {
      "City": "Sarai Mir",
      "State": "Uttar Pradesh",
      "District": "Azamgarh"
    },
    {
      "City": "Saraidhela",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Saraipali",
      "State": "Chhattisgarh",
      "District": "Mahasamund"
    },
    {
      "City": "Sarangarh",
      "State": "Chhattisgarh",
      "District": "Raigarh"
    },
    {
      "City": "Sarangpur",
      "State": "Madhya Pradesh",
      "District": "Rajgarh"
    },
    {
      "City": "Sarapaka",
      "State": "Andhra Pradesh",
      "District": "Khammam"
    },
    {
      "City": "Saravanampatti",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Sarbhog",
      "State": "Assam",
      "District": "Barpeta"
    },
    {
      "City": "Sarcarsamakulam",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Sardarpur",
      "State": "Madhya Pradesh",
      "District": "Dhar"
    },
    {
      "City": "Sardarshahar",
      "State": "Rajasthan",
      "District": "Churu"
    },
    {
      "City": "Sardhana",
      "State": "Uttar Pradesh",
      "District": "Meerut"
    },
    {
      "City": "Sardulgarh",
      "State": "Punjab",
      "District": "Mansa"
    },
    {
      "City": "Sarenga",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Sarigam INA",
      "State": "Gujarat",
      "District": "Valsad"
    },
    {
      "City": "Sarila",
      "State": "Uttar Pradesh",
      "District": "Hamirpur"
    },
    {
      "City": "Sarjamda",
      "State": "Jharkhand",
      "District": "Purbi Singhbhum"
    },
    {
      "City": "Sarkaghat",
      "State": "Himachal Pradesh",
      "District": "Mandi"
    },
    {
      "City": "Sarkhej-Okaf",
      "State": "Gujarat",
      "District": "Ahmadabad"
    },
    {
      "City": "Sarni",
      "State": "Madhya Pradesh",
      "District": "Betul"
    },
    {
      "City": "Sarpi",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Sarsawan",
      "State": "Uttar Pradesh",
      "District": "Saharanpur"
    },
    {
      "City": "Sarthebari",
      "State": "Assam",
      "District": "Barpeta"
    },
    {
      "City": "Sarupathar",
      "State": "Assam",
      "District": "Golaghat"
    },
    {
      "City": "Sarupathar Bengali",
      "State": "Assam",
      "District": "Dibrugarh"
    },
    {
      "City": "Sarwar",
      "State": "Rajasthan",
      "District": "Ajmer"
    },
    {
      "City": "Sasaram",
      "State": "Bihar",
      "District": "Rohtas"
    },
    {
      "City": "Sasauli",
      "State": "Haryana",
      "District": "Yamunanagar"
    },
    {
      "City": "Sasni",
      "State": "Uttar Pradesh",
      "District": "Hathras"
    },
    {
      "City": "Sasti",
      "State": "Maharashtra",
      "District": "Chandrapur"
    },
    {
      "City": "Sasvad",
      "State": "Maharashtra",
      "District": "Pune"
    },
    {
      "City": "Satai",
      "State": "Madhya Pradesh",
      "District": "Chhatarpur"
    },
    {
      "City": "Satalkheri",
      "State": "Rajasthan",
      "District": "Kota"
    },
    {
      "City": "Satana",
      "State": "Maharashtra",
      "District": "Nashik"
    },
    {
      "City": "Satara",
      "State": "Maharashtra",
      "District": "Satara"
    },
    {
      "City": "Sathankulam",
      "State": "Tamil Nadu",
      "District": "Toothukudi"
    },
    {
      "City": "Sathiyavijayanagaram",
      "State": "Tamil Nadu",
      "District": "Tiruvanamalai"
    },
    {
      "City": "Sathuvachari",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Sathyamangala",
      "State": "Karnataka",
      "District": "Hassan"
    },
    {
      "City": "Sathyamangalam",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Satigachha",
      "State": "West Bengal",
      "District": "Nadia"
    },
    {
      "City": "Satna",
      "State": "Madhya Pradesh",
      "District": "Satna"
    },
    {
      "City": "Satrikh",
      "State": "Uttar Pradesh",
      "District": "Barabanki"
    },
    {
      "City": "Sattenapalle",
      "State": "Andhra Pradesh",
      "District": "Guntur"
    },
    {
      "City": "Sattur",
      "State": "Tamil Nadu",
      "District": "Virudhunagar"
    },
    {
      "City": "Satwas",
      "State": "Madhya Pradesh",
      "District": "Dewas"
    },
    {
      "City": "Saunda",
      "State": "Jharkhand",
      "District": "Hazaribag"
    },
    {
      "City": "Saundatti-Yellamma",
      "State": "Karnataka",
      "District": "Belgaum"
    },
    {
      "City": "Saunkh",
      "State": "Uttar Pradesh",
      "District": "Mathura"
    },
    {
      "City": "Saurikh",
      "State": "Uttar Pradesh",
      "District": "Kannauj"
    },
    {
      "City": "Sausar",
      "State": "Madhya Pradesh",
      "District": "Chhindwara"
    },
    {
      "City": "Savanur",
      "State": "Karnataka",
      "District": "Haveri"
    },
    {
      "City": "Savarkundla",
      "State": "Gujarat",
      "District": "Amreli"
    },
    {
      "City": "Savda",
      "State": "Maharashtra",
      "District": "Jalgaon"
    },
    {
      "City": "Savner",
      "State": "Maharashtra",
      "District": "Nagpur"
    },
    {
      "City": "Sawai Madhopur",
      "State": "Rajasthan",
      "District": "Sawai Madhopur"
    },
    {
      "City": "Sawantwadi",
      "State": "Maharashtra",
      "District": "Sindhudurg"
    },
    {
      "City": "Sawari Jawharnagar",
      "State": "Maharashtra",
      "District": "Bhandara"
    },
    {
      "City": "Sawer",
      "State": "Madhya Pradesh",
      "District": "Indore"
    },
    {
      "City": "Sayalgudi",
      "State": "Tamil Nadu",
      "District": "Ramanathapuram"
    },
    {
      "City": "Sayan",
      "State": "Gujarat",
      "District": "Surat"
    },
    {
      "City": "Sayapuram",
      "State": "Tamil Nadu",
      "District": "Toothukudi"
    },
    {
      "City": "Secunderabad",
      "State": "Andhra Pradesh",
      "District": "Hyderabad"
    },
    {
      "City": "Sedam",
      "State": "Karnataka",
      "District": "Gulbarga"
    },
    {
      "City": "Seerapalli",
      "State": "Tamil Nadu",
      "District": "Namakkal"
    },
    {
      "City": "Seevur",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Sehore",
      "State": "Madhya Pradesh",
      "District": "Sehore"
    },
    {
      "City": "Seithur",
      "State": "Tamil Nadu",
      "District": "Virudhunagar"
    },
    {
      "City": "Sekmai Bazar",
      "State": "Manipur",
      "District": "Imphal West"
    },
    {
      "City": "Semaria",
      "State": "Madhya Pradesh",
      "District": "Rewa"
    },
    {
      "City": "Sembakkam",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Semmipalayam",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Senchoa Gaon",
      "State": "Assam",
      "District": "Jorhat"
    },
    {
      "City": "Sendhwa",
      "State": "Madhya Pradesh",
      "District": "Barwani"
    },
    {
      "City": "Senthamangalam",
      "State": "Tamil Nadu",
      "District": "Namakkal"
    },
    {
      "City": "Sentharapatti",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Senur",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Seohara",
      "State": "Uttar Pradesh",
      "District": "Bijnor"
    },
    {
      "City": "Seondha",
      "State": "Madhya Pradesh",
      "District": "Datia"
    },
    {
      "City": "Seoni",
      "State": "Himachal Pradesh",
      "District": "Shimla"
    },
    {
      "City": "Seoni",
      "State": "Madhya Pradesh",
      "District": "Seoni"
    },
    {
      "City": "Seoni Malwa",
      "State": "Madhya Pradesh",
      "District": "Hoshangabad"
    },
    {
      "City": "Seppa",
      "State": "Arunachal Pradesh",
      "District": "East Kameng"
    },
    {
      "City": "Seraikela",
      "State": "Jharkhand",
      "District": "Pashchimi Singhbhum"
    },
    {
      "City": "Serampore",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "Serchhip",
      "State": "Mizoram",
      "District": "Serchhip"
    },
    {
      "City": "Serilingampalle",
      "State": "Andhra Pradesh",
      "District": "Rangareddi"
    },
    {
      "City": "Serpur",
      "State": "West Bengal",
      "District": "Murshidabad"
    },
    {
      "City": "Sethia",
      "State": "Madhya Pradesh",
      "District": "Chhindwara"
    },
    {
      "City": "Sethiathoppu",
      "State": "Tamil Nadu",
      "District": "Cuddalore"
    },
    {
      "City": "Sevilimedu",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Sevugampatti",
      "State": "Tamil Nadu",
      "District": "Dindigul"
    },
    {
      "City": "Sewai",
      "State": "Jharkhand",
      "District": "Hazaribag"
    },
    {
      "City": "Sewalkhas",
      "State": "Uttar Pradesh",
      "District": "Meerut"
    },
    {
      "City": "Sewarhi",
      "State": "Uttar Pradesh",
      "District": "Kushinagar"
    },
    {
      "City": "Shahabad",
      "State": "Karnataka",
      "District": "Gulbarga"
    },
    {
      "City": "Shahabad",
      "State": "Uttar Pradesh",
      "District": "Rampur"
    },
    {
      "City": "Shahabad",
      "State": "Uttar Pradesh",
      "District": "Hardoi"
    },
    {
      "City": "Shahabad ACC",
      "State": "Karnataka",
      "District": "Gulbarga"
    },
    {
      "City": "Shahade",
      "State": "Maharashtra",
      "District": "Nandurbar"
    },
    {
      "City": "Shahapur",
      "State": "Maharashtra",
      "District": "Thane"
    },
    {
      "City": "Shahbad",
      "State": "Haryana",
      "District": "Kurukshetra"
    },
    {
      "City": "Shahdol",
      "State": "Madhya Pradesh",
      "District": "Shahdol"
    },
    {
      "City": "Shahganj",
      "State": "Uttar Pradesh",
      "District": "Jaunpur"
    },
    {
      "City": "Shahgarh",
      "State": "Madhya Pradesh",
      "District": "Sagar"
    },
    {
      "City": "Shahi",
      "State": "Uttar Pradesh",
      "District": "Bareilly"
    },
    {
      "City": "Shahjahanpur",
      "State": "Uttar Pradesh",
      "District": "Shahjahanpur"
    },
    {
      "City": "Shahjahanpur",
      "State": "Uttar Pradesh",
      "District": "Shahjahanpur"
    },
    {
      "City": "Shahkot",
      "State": "Punjab",
      "District": "Jalandhar"
    },
    {
      "City": "Shahpur",
      "State": "Uttar Pradesh",
      "District": "Muzaffarnagar"
    },
    {
      "City": "Shahpur",
      "State": "Karnataka",
      "District": "Gulbarga"
    },
    {
      "City": "Shahpur",
      "State": "Madhya Pradesh",
      "District": "Sagar"
    },
    {
      "City": "Shahpur",
      "State": "Bihar",
      "District": "Bhojpur"
    },
    {
      "City": "Shahpur",
      "State": "Madhya Pradesh",
      "District": "East Nimar"
    },
    {
      "City": "Shahpur",
      "State": "Madhya Pradesh",
      "District": "Betul"
    },
    {
      "City": "Shahpura",
      "State": "Rajasthan",
      "District": "Jaipur"
    },
    {
      "City": "Shahpura",
      "State": "Rajasthan",
      "District": "Bhilwara"
    },
    {
      "City": "Shahpura",
      "State": "Madhya Pradesh",
      "District": "Jabalpur"
    },
    {
      "City": "Shahpura",
      "State": "Madhya Pradesh",
      "District": "Dindori"
    },
    {
      "City": "Shajapur",
      "State": "Madhya Pradesh",
      "District": "Shajapur"
    },
    {
      "City": "Shaktigarh",
      "State": "Uttaranchal",
      "District": "Udham Singh Nagar"
    },
    {
      "City": "Shaktinagar",
      "State": "Karnataka",
      "District": "Raichur"
    },
    {
      "City": "Shamchaurasi",
      "State": "Punjab",
      "District": "Hoshiarpur"
    },
    {
      "City": "Shamgarh",
      "State": "Madhya Pradesh",
      "District": "Mandsaur"
    },
    {
      "City": "Shamli",
      "State": "Uttar Pradesh",
      "District": "Muzaffarnagar"
    },
    {
      "City": "Shamsabad",
      "State": "Uttar Pradesh",
      "District": "Agra"
    },
    {
      "City": "Shamsabad",
      "State": "Uttar Pradesh",
      "District": "Farrukhabad"
    },
    {
      "City": "Shankargarh",
      "State": "Uttar Pradesh",
      "District": "Allahabad"
    },
    {
      "City": "Shankhanagar",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "Shegaon",
      "State": "Maharashtra",
      "District": "Buldana"
    },
    {
      "City": "Sheikhpura",
      "State": "Bihar",
      "District": "Sheikhpura"
    },
    {
      "City": "Shekhpura",
      "State": "Punjab",
      "District": "Patiala"
    },
    {
      "City": "Shelar",
      "State": "Maharashtra",
      "District": "Thane"
    },
    {
      "City": "Shenbakkam",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Shendurjana",
      "State": "Maharashtra",
      "District": "Amravati"
    },
    {
      "City": "Shenkottai",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Sheoganj",
      "State": "Rajasthan",
      "District": "Sirohi"
    },
    {
      "City": "Sheohar",
      "State": "Bihar",
      "District": "Sheohar"
    },
    {
      "City": "Sheopur",
      "State": "Madhya Pradesh",
      "District": "Sheopur"
    },
    {
      "City": "Shergarh",
      "State": "Uttar Pradesh",
      "District": "Bareilly"
    },
    {
      "City": "Sherghati",
      "State": "Bihar",
      "District": "Gaya"
    },
    {
      "City": "Sherkot",
      "State": "Uttar Pradesh",
      "District": "Bijnor"
    },
    {
      "City": "Shiggaon",
      "State": "Karnataka",
      "District": "Haveri"
    },
    {
      "City": "Shikarpur",
      "State": "Uttar Pradesh",
      "District": "Bulandshahr"
    },
    {
      "City": "Shikarpur",
      "State": "Karnataka",
      "District": "Shimoga"
    },
    {
      "City": "Shikohabad",
      "State": "Uttar Pradesh",
      "District": "Firozabad"
    },
    {
      "City": "Shillong",
      "State": "Meghalaya",
      "District": "East Khasi Hills"
    },
    {
      "City": "Shillong Cantt.",
      "State": "Meghalaya",
      "District": "East Khasi Hills"
    },
    {
      "City": "Shimla",
      "State": "Himachal Pradesh",
      "District": "Shimla"
    },
    {
      "City": "Shimoga",
      "State": "Karnataka",
      "District": "Shimoga"
    },
    {
      "City": "Shirdi",
      "State": "Maharashtra",
      "District": "Ahmadnagar"
    },
    {
      "City": "Shirhatti",
      "State": "Karnataka",
      "District": "Gadag"
    },
    {
      "City": "Shirpur-Warwade",
      "State": "Maharashtra",
      "District": "Dhule"
    },
    {
      "City": "Shirur",
      "State": "Maharashtra",
      "District": "Pune"
    },
    {
      "City": "Shirwal",
      "State": "Maharashtra",
      "District": "Satara"
    },
    {
      "City": "Shishgarh",
      "State": "Uttar Pradesh",
      "District": "Bareilly"
    },
    {
      "City": "Shivajinagar",
      "State": "Maharashtra",
      "District": "Chandrapur"
    },
    {
      "City": "Shivatkar (Nira)",
      "State": "Maharashtra",
      "District": "Pune"
    },
    {
      "City": "Shivdaspur",
      "State": "Uttar Pradesh",
      "District": "Varanasi"
    },
    {
      "City": "Shivli",
      "State": "Uttar Pradesh",
      "District": "Kanpur Dehat"
    },
    {
      "City": "Shivpuri",
      "State": "Madhya Pradesh",
      "District": "Shivpuri"
    },
    {
      "City": "Shivrajpur",
      "State": "Uttar Pradesh",
      "District": "Kanpur Nagar"
    },
    {
      "City": "Shivrinarayan",
      "State": "Chhattisgarh",
      "District": "Janjgir-Champa"
    },
    {
      "City": "Shohratgarh",
      "State": "Uttar Pradesh",
      "District": "Siddharthnagar"
    },
    {
      "City": "Sholavandan",
      "State": "Tamil Nadu",
      "District": "Madurai"
    },
    {
      "City": "Sholinganallur",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Sholingur",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Sholur",
      "State": "Tamil Nadu",
      "District": "The Nilgiris"
    },
    {
      "City": "Shoranur",
      "State": "Kerala",
      "District": "Palakkad"
    },
    {
      "City": "Shorapur",
      "State": "Karnataka",
      "District": "Gulbarga"
    },
    {
      "City": "Shrigonda",
      "State": "Maharashtra",
      "District": "Ahmadnagar"
    },
    {
      "City": "Shrirampur",
      "State": "Maharashtra",
      "District": "Ahmadnagar"
    },
    {
      "City": "Shrirampur(Rural)",
      "State": "Maharashtra",
      "District": "Ahmadnagar"
    },
    {
      "City": "Shrirangapattana",
      "State": "Karnataka",
      "District": "Mandya"
    },
    {
      "City": "Shrivardhan",
      "State": "Maharashtra",
      "District": "Raigarh"
    },
    {
      "City": "Shujalpur",
      "State": "Madhya Pradesh",
      "District": "Shajapur"
    },
    {
      "City": "Shupiyan",
      "State": "Jammu & Kashmir",
      "District": "Pulwama"
    },
    {
      "City": "Siana",
      "State": "Uttar Pradesh",
      "District": "Bulandshahr"
    },
    {
      "City": "Sibsagar",
      "State": "Assam",
      "District": "Sibsagar"
    },
    {
      "City": "Siddapur",
      "State": "Karnataka",
      "District": "Uttara Kannada"
    },
    {
      "City": "Siddhaur",
      "State": "Uttar Pradesh",
      "District": "Barabanki"
    },
    {
      "City": "Siddipet",
      "State": "Andhra Pradesh",
      "District": "Medak"
    },
    {
      "City": "Sidhauli",
      "State": "Uttar Pradesh",
      "District": "Sitapur"
    },
    {
      "City": "Sidhi",
      "State": "Madhya Pradesh",
      "District": "Sidhi"
    },
    {
      "City": "Sidhpur",
      "State": "Gujarat",
      "District": "Patan"
    },
    {
      "City": "Sidhpura",
      "State": "Uttar Pradesh",
      "District": "Etah"
    },
    {
      "City": "Sidlaghatta",
      "State": "Karnataka",
      "District": "Kolar"
    },
    {
      "City": "Siduli",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Sihor",
      "State": "Gujarat",
      "District": "Bhavnagar"
    },
    {
      "City": "Sihora",
      "State": "Madhya Pradesh",
      "District": "Jabalpur"
    },
    {
      "City": "Sijhua",
      "State": "Jharkhand",
      "District": "Bokaro"
    },
    {
      "City": "Sijua",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Sikanderpur",
      "State": "Uttar Pradesh",
      "District": "Kannauj"
    },
    {
      "City": "Sikanderpur",
      "State": "Uttar Pradesh",
      "District": "Ballia"
    },
    {
      "City": "Sikandra",
      "State": "Uttar Pradesh",
      "District": "Kanpur Dehat"
    },
    {
      "City": "Sikandra Rao",
      "State": "Uttar Pradesh",
      "District": "Hathras"
    },
    {
      "City": "Sikandrabad",
      "State": "Uttar Pradesh",
      "District": "Bulandshahr"
    },
    {
      "City": "Sikar",
      "State": "Rajasthan",
      "District": "Sikar"
    },
    {
      "City": "Sikhong Sekmai",
      "State": "Manipur",
      "District": "Thoubal"
    },
    {
      "City": "Sikka",
      "State": "Gujarat",
      "District": "Jamnagar"
    },
    {
      "City": "Sikkarayapuram",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Silao",
      "State": "Bihar",
      "District": "Nalanda"
    },
    {
      "City": "Silapathar",
      "State": "Assam",
      "District": "Dhemaji"
    },
    {
      "City": "Silchar",
      "State": "Assam",
      "District": "Cachar"
    },
    {
      "City": "Silchar Part-X",
      "State": "Assam",
      "District": "Cachar"
    },
    {
      "City": "Siliguri",
      "State": "West Bengal",
      "District": "Darjiling and Jalpaiguri"
    },
    {
      "City": "Sillewada",
      "State": "Maharashtra",
      "District": "Nagpur"
    },
    {
      "City": "Sillod",
      "State": "Maharashtra",
      "District": "Aurangabad"
    },
    {
      "City": "Silvassa",
      "State": "Dadra & Nagar Haveli *",
      "District": "Dadra & Nagar Haveli"
    },
    {
      "City": "Simdega",
      "State": "Jharkhand",
      "District": "Gumla"
    },
    {
      "City": "Simga",
      "State": "Chhattisgarh",
      "District": "Raipur"
    },
    {
      "City": "Simla",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "Sindgi",
      "State": "Karnataka",
      "District": "Bijapur"
    },
    {
      "City": "Sindhnur",
      "State": "Karnataka",
      "District": "Raichur"
    },
    {
      "City": "Sindi",
      "State": "Maharashtra",
      "District": "Wardha"
    },
    {
      "City": "Sindi Turf Hindnagar",
      "State": "Maharashtra",
      "District": "Wardha"
    },
    {
      "City": "Sindkhed Raja",
      "State": "Maharashtra",
      "District": "Buldana"
    },
    {
      "City": "Sindri",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Sinduria",
      "State": "Jharkhand",
      "District": "Garhwa"
    },
    {
      "City": "Singahi Bhiraura",
      "State": "Uttar Pradesh",
      "District": "Kheri"
    },
    {
      "City": "Singampuneri",
      "State": "Tamil Nadu",
      "District": "Sivaganga"
    },
    {
      "City": "Singaperumalkoil",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Singapur",
      "State": "Andhra Pradesh",
      "District": "Adilabad"
    },
    {
      "City": "Singarayakonda",
      "State": "Andhra Pradesh",
      "District": "Prakasam"
    },
    {
      "City": "Singarva",
      "State": "Gujarat",
      "District": "Ahmadabad"
    },
    {
      "City": "Singnapur",
      "State": "Maharashtra",
      "District": "Ahmadnagar"
    },
    {
      "City": "Singoli",
      "State": "Madhya Pradesh",
      "District": "Neemuch"
    },
    {
      "City": "Singrauli",
      "State": "Madhya Pradesh",
      "District": "Sidhi"
    },
    {
      "City": "Singtam",
      "State": "Sikkim",
      "District": "East"
    },
    {
      "City": "Singur",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "Sinhasa",
      "State": "Madhya Pradesh",
      "District": "Indore"
    },
    {
      "City": "Sini",
      "State": "Jharkhand",
      "District": "Pashchimi Singhbhum"
    },
    {
      "City": "Sinnar",
      "State": "Maharashtra",
      "District": "Nashik"
    },
    {
      "City": "Siolim",
      "State": "Goa",
      "District": "North Goa"
    },
    {
      "City": "Sira",
      "State": "Karnataka",
      "District": "Tumkur"
    },
    {
      "City": "Siralkoppa",
      "State": "Karnataka",
      "District": "Shimoga"
    },
    {
      "City": "Siras Pur",
      "State": "Delhi *",
      "District": "North West"
    },
    {
      "City": "Sirathu",
      "State": "Uttar Pradesh",
      "District": "Kaushambi"
    },
    {
      "City": "Sirauli",
      "State": "Uttar Pradesh",
      "District": "Bareilly"
    },
    {
      "City": "Sirgiti",
      "State": "Chhattisgarh",
      "District": "Bilaspur"
    },
    {
      "City": "Sirgora",
      "State": "Madhya Pradesh",
      "District": "Chhindwara"
    },
    {
      "City": "Sirhind -Fategarh",
      "State": "Punjab",
      "District": "Fatehgarh Sahib"
    },
    {
      "City": "Sirka",
      "State": "Jharkhand",
      "District": "Hazaribag"
    },
    {
      "City": "Sirkali",
      "State": "Tamil Nadu",
      "District": "Nagapattinam"
    },
    {
      "City": "Sirmaur",
      "State": "Madhya Pradesh",
      "District": "Rewa"
    },
    {
      "City": "Sirohi",
      "State": "Rajasthan",
      "District": "Sirohi"
    },
    {
      "City": "Sironj",
      "State": "Madhya Pradesh",
      "District": "Vidisha"
    },
    {
      "City": "Sirsa",
      "State": "Haryana",
      "District": "Sirsa"
    },
    {
      "City": "Sirsa",
      "State": "Uttar Pradesh",
      "District": "Allahabad"
    },
    {
      "City": "Sirsaganj",
      "State": "Uttar Pradesh",
      "District": "Firozabad"
    },
    {
      "City": "Sirsha",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Sirsi",
      "State": "Uttar Pradesh",
      "District": "Moradabad"
    },
    {
      "City": "Sirsi",
      "State": "Karnataka",
      "District": "Uttara Kannada"
    },
    {
      "City": "Sirsilla",
      "State": "Andhra Pradesh",
      "District": "Karimnagar"
    },
    {
      "City": "Sirugamani",
      "State": "Tamil Nadu",
      "District": "Tiruchirappalli"
    },
    {
      "City": "Siruguppa",
      "State": "Karnataka",
      "District": "Bellary"
    },
    {
      "City": "Sirumugai",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Sisauli",
      "State": "Uttar Pradesh",
      "District": "Muzaffarnagar"
    },
    {
      "City": "Siswa Bazar",
      "State": "Uttar Pradesh",
      "District": "Maharajganj"
    },
    {
      "City": "Sitamarhi",
      "State": "Bihar",
      "District": "Sitamarhi"
    },
    {
      "City": "Sitamau",
      "State": "Madhya Pradesh",
      "District": "Mandsaur"
    },
    {
      "City": "Sitapur",
      "State": "Uttar Pradesh",
      "District": "Sitapur"
    },
    {
      "City": "Sitarganj",
      "State": "Uttaranchal",
      "District": "Udham Singh Nagar"
    },
    {
      "City": "Sithayankottai",
      "State": "Tamil Nadu",
      "District": "Dindigul"
    },
    {
      "City": "Sithurajapuram",
      "State": "Tamil Nadu",
      "District": "Virudhunagar"
    },
    {
      "City": "Siuliban",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Sivaganga",
      "State": "Tamil Nadu",
      "District": "Sivaganga"
    },
    {
      "City": "Sivagiri",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Sivagiri",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Sivakasi",
      "State": "Tamil Nadu",
      "District": "Virudhunagar"
    },
    {
      "City": "Sivanthipuram",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Siwan",
      "State": "Bihar",
      "District": "Siwan"
    },
    {
      "City": "Siwani",
      "State": "Haryana",
      "District": "Bhiwani"
    },
    {
      "City": "Sobhaganj",
      "State": "West Bengal",
      "District": "Jalpaiguri"
    },
    {
      "City": "Socorro (Serula)",
      "State": "Goa",
      "District": "North Goa"
    },
    {
      "City": "Sogariya",
      "State": "Rajasthan",
      "District": "Kota"
    },
    {
      "City": "Sohagpur",
      "State": "Madhya Pradesh",
      "District": "Hoshangabad"
    },
    {
      "City": "Sohna",
      "State": "Haryana",
      "District": "Gurgaon"
    },
    {
      "City": "Sojat",
      "State": "Rajasthan",
      "District": "Pali"
    },
    {
      "City": "Sojat Road",
      "State": "Rajasthan",
      "District": "Pali"
    },
    {
      "City": "Solan",
      "State": "Himachal Pradesh",
      "District": "Solan"
    },
    {
      "City": "Solapur",
      "State": "Maharashtra",
      "District": "Solapur"
    },
    {
      "City": "Som",
      "State": "Uttar Pradesh",
      "District": "Hardoi"
    },
    {
      "City": "Someshwar",
      "State": "Karnataka",
      "District": "Dakshina Kannada"
    },
    {
      "City": "Sompeta",
      "State": "Andhra Pradesh",
      "District": "Srikakulam"
    },
    {
      "City": "Somvarpet",
      "State": "Karnataka",
      "District": "Kodagu"
    },
    {
      "City": "Sonamukhi",
      "State": "West Bengal",
      "District": "Bankura"
    },
    {
      "City": "Sonamura",
      "State": "Tripura",
      "District": "West Tripura"
    },
    {
      "City": "Sonapur",
      "State": "Orissa",
      "District": "Sonapur"
    },
    {
      "City": "Sonari",
      "State": "Assam",
      "District": "Sibsagar"
    },
    {
      "City": "Sonatikiri",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Sonegaon (Nipani)",
      "State": "Maharashtra",
      "District": "Nagpur"
    },
    {
      "City": "Sonepur",
      "State": "Bihar",
      "District": "Saran"
    },
    {
      "City": "Songadh",
      "State": "Gujarat",
      "District": "Surat"
    },
    {
      "City": "Sonipat",
      "State": "Haryana",
      "District": "Sonipat"
    },
    {
      "City": "Sonkatch",
      "State": "Madhya Pradesh",
      "District": "Dewas"
    },
    {
      "City": "Sonpeth",
      "State": "Maharashtra",
      "District": "Parbhani"
    },
    {
      "City": "Sopore",
      "State": "Jammu & Kashmir",
      "District": "Baramula"
    },
    {
      "City": "Sorab",
      "State": "Karnataka",
      "District": "Shimoga"
    },
    {
      "City": "Soro",
      "State": "Orissa",
      "District": "Baleshwar"
    },
    {
      "City": "Soron",
      "State": "Uttar Pradesh",
      "District": "Etah"
    },
    {
      "City": "South Dumdum",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Soyagaon",
      "State": "Maharashtra",
      "District": "Nashik"
    },
    {
      "City": "Soyatkalan",
      "State": "Madhya Pradesh",
      "District": "Shajapur"
    },
    {
      "City": "Sri Hargobindpur",
      "State": "Punjab",
      "District": "Gurdaspur"
    },
    {
      "City": "Sri Madhopur",
      "State": "Rajasthan",
      "District": "Sikar"
    },
    {
      "City": "Srikakulam",
      "State": "Andhra Pradesh",
      "District": "Srikakulam"
    },
    {
      "City": "Srikalahasti",
      "State": "Andhra Pradesh",
      "District": "Chittoor"
    },
    {
      "City": "Srikantabati",
      "State": "West Bengal",
      "District": "Murshidabad"
    },
    {
      "City": "Srimushnam",
      "State": "Tamil Nadu",
      "District": "Cuddalore"
    },
    {
      "City": "Srinagar",
      "State": "Jammu & Kashmir",
      "District": "Srinagar"
    },
    {
      "City": "Srinagar",
      "State": "Uttaranchal",
      "District": "Garhwal"
    },
    {
      "City": "Sringeri",
      "State": "Karnataka",
      "District": "Chikmagalur"
    },
    {
      "City": "Srinivaspur",
      "State": "Karnataka",
      "District": "Kolar"
    },
    {
      "City": "Sriperumbudur",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Sriramapuram",
      "State": "Tamil Nadu",
      "District": "Dindigul"
    },
    {
      "City": "Sriramnagar",
      "State": "Andhra Pradesh",
      "District": "Vizianagaram"
    },
    {
      "City": "Srirampur",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Srisailam Project (RFC) Township",
      "State": "Andhra Pradesh",
      "District": "Kurnool"
    },
    {
      "City": "Srisailamgudem Devasthanam",
      "State": "Andhra Pradesh",
      "District": "Kurnool"
    },
    {
      "City": "Srivaikuntam",
      "State": "Tamil Nadu",
      "District": "Toothukudi"
    },
    {
      "City": "Srivilliputhur",
      "State": "Tamil Nadu",
      "District": "Virudhunagar"
    },
    {
      "City": "St.Thomas Mount-cum-Pallavaram",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Sualkuchi",
      "State": "Assam",
      "District": "Kamrup"
    },
    {
      "City": "Suar",
      "State": "Uttar Pradesh",
      "District": "Rampur"
    },
    {
      "City": "Suchindram",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Sugauli",
      "State": "Bihar",
      "District": "Purba Champaran"
    },
    {
      "City": "Sugnu",
      "State": "Manipur",
      "District": "Thoubal"
    },
    {
      "City": "Suhagi",
      "State": "Madhya Pradesh",
      "District": "Jabalpur"
    },
    {
      "City": "Sujangarh",
      "State": "Rajasthan",
      "District": "Churu"
    },
    {
      "City": "Sujanpur",
      "State": "Punjab",
      "District": "Gurdaspur"
    },
    {
      "City": "Sukdal",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Suket",
      "State": "Rajasthan",
      "District": "Kota"
    },
    {
      "City": "Sukhmalpur Nizamabad",
      "State": "Uttar Pradesh",
      "District": "Firozabad"
    },
    {
      "City": "Sukhrali",
      "State": "Haryana",
      "District": "Gurgaon"
    },
    {
      "City": "Suleeswaranpatti",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Sultan Pur",
      "State": "Delhi *",
      "District": "South"
    },
    {
      "City": "Sultan Pur Majra",
      "State": "Delhi *",
      "District": "North West"
    },
    {
      "City": "Sultanganj",
      "State": "Bihar",
      "District": "Bhagalpur"
    },
    {
      "City": "Sultanpur",
      "State": "Uttaranchal",
      "District": "Udham Singh Nagar"
    },
    {
      "City": "Sultanpur",
      "State": "Madhya Pradesh",
      "District": "Raisen"
    },
    {
      "City": "Sultanpur",
      "State": "Uttar Pradesh",
      "District": "Sultanpur"
    },
    {
      "City": "Sultanpur Lodhi",
      "State": "Punjab",
      "District": "Kapurthala"
    },
    {
      "City": "Sulur",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Sulya",
      "State": "Karnataka",
      "District": "Dakshina Kannada"
    },
    {
      "City": "Sumbal",
      "State": "Jammu & Kashmir",
      "District": "Baramula"
    },
    {
      "City": "Sumerpur",
      "State": "Rajasthan",
      "District": "Pali"
    },
    {
      "City": "Sumerpur",
      "State": "Uttar Pradesh",
      "District": "Hamirpur"
    },
    {
      "City": "Sunabeda",
      "State": "Orissa",
      "District": "Koraput"
    },
    {
      "City": "Sunam",
      "State": "Punjab",
      "District": "Sangrur"
    },
    {
      "City": "Sundarapandiam",
      "State": "Tamil Nadu",
      "District": "Virudhunagar"
    },
    {
      "City": "Sundarapandiapuram",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Sundargarh",
      "State": "Orissa",
      "District": "Sundargarh"
    },
    {
      "City": "Sundarnagar",
      "State": "Himachal Pradesh",
      "District": "Mandi"
    },
    {
      "City": "Sunderbani",
      "State": "Jammu & Kashmir",
      "District": "Rajauri"
    },
    {
      "City": "Supaul",
      "State": "Bihar",
      "District": "Supaul"
    },
    {
      "City": "Surada",
      "State": "Orissa",
      "District": "Ganjam"
    },
    {
      "City": "Surajgarh",
      "State": "Rajasthan",
      "District": "Jhunjhunun"
    },
    {
      "City": "Surajkaradi",
      "State": "Gujarat",
      "District": "Jamnagar"
    },
    {
      "City": "Surajpur",
      "State": "Chhattisgarh",
      "District": "Surguja"
    },
    {
      "City": "Surampatti",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Surandai",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Surat",
      "State": "Gujarat",
      "District": "Surat"
    },
    {
      "City": "Suratgarh",
      "State": "Rajasthan",
      "District": "Ganganagar"
    },
    {
      "City": "Surendranagar Dudhrej",
      "State": "Gujarat",
      "District": "Surendranagar"
    },
    {
      "City": "Surgana",
      "State": "Maharashtra",
      "District": "Nashik"
    },
    {
      "City": "Suri",
      "State": "West Bengal",
      "District": "Birbhum"
    },
    {
      "City": "Suriyampalayam",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Suriyawan",
      "State": "Uttar Pradesh",
      "District": "Sant Ravidas Nagar"
    },
    {
      "City": "Suryapet",
      "State": "Andhra Pradesh",
      "District": "Nalgonda"
    },
    {
      "City": "Suryaraopeta",
      "State": "Andhra Pradesh",
      "District": "East Godavari"
    },
    {
      "City": "Susner",
      "State": "Madhya Pradesh",
      "District": "Shajapur"
    },
    {
      "City": "Suthaliya",
      "State": "Madhya Pradesh",
      "District": "Rajgarh"
    },
    {
      "City": "Swamibagh",
      "State": "Uttar Pradesh",
      "District": "Agra"
    },
    {
      "City": "Swamimalai",
      "State": "Tamil Nadu",
      "District": "Thanjavur"
    },
    {
      "City": "T.Kallupatti",
      "State": "Tamil Nadu",
      "District": "Madurai"
    },
    {
      "City": "Tadepalligudem",
      "State": "Andhra Pradesh",
      "District": "West Godavari"
    },
    {
      "City": "Tadpatri",
      "State": "Andhra Pradesh",
      "District": "Anantapur"
    },
    {
      "City": "Taherpur",
      "State": "West Bengal",
      "District": "Nadia"
    },
    {
      "City": "Taj Pul",
      "State": "Delhi *",
      "District": "South"
    },
    {
      "City": "Takhatgarh",
      "State": "Rajasthan",
      "District": "Pali"
    },
    {
      "City": "Takhatpur",
      "State": "Chhattisgarh",
      "District": "Bilaspur"
    },
    {
      "City": "Taki",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Tal",
      "State": "Madhya Pradesh",
      "District": "Ratlam"
    },
    {
      "City": "Talai",
      "State": "Himachal Pradesh",
      "District": "Bilaspur"
    },
    {
      "City": "Talaja",
      "State": "Gujarat",
      "District": "Bhavnagar"
    },
    {
      "City": "Talbandha",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Talbehat",
      "State": "Uttar Pradesh",
      "District": "Lalitpur"
    },
    {
      "City": "Talcher",
      "State": "Orissa",
      "District": "Anugul"
    },
    {
      "City": "Talcher Thermal Power Station Township",
      "State": "Orissa",
      "District": "Anugul"
    },
    {
      "City": "Talegaon Dabhade",
      "State": "Maharashtra",
      "District": "Pune"
    },
    {
      "City": "Talen",
      "State": "Madhya Pradesh",
      "District": "Rajgarh"
    },
    {
      "City": "Talgram",
      "State": "Uttar Pradesh",
      "District": "Kannauj"
    },
    {
      "City": "Talikota",
      "State": "Karnataka",
      "District": "Bijapur"
    },
    {
      "City": "Taliparamba",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Tallapalle",
      "State": "Andhra Pradesh",
      "District": "Adilabad"
    },
    {
      "City": "Talod",
      "State": "Gujarat",
      "District": "Sabar Kantha"
    },
    {
      "City": "Talode",
      "State": "Maharashtra",
      "District": "Nandurbar"
    },
    {
      "City": "Taloje Panchnad",
      "State": "Maharashtra",
      "District": "Raigarh"
    },
    {
      "City": "Talwandi Bhai",
      "State": "Punjab",
      "District": "Firozpur"
    },
    {
      "City": "Talwara",
      "State": "Punjab",
      "District": "Hoshiarpur"
    },
    {
      "City": "Talwara",
      "State": "Jammu & Kashmir",
      "District": "Udhampur"
    },
    {
      "City": "Tambaram",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Tambaur-cum-Ahmadabad",
      "State": "Uttar Pradesh",
      "District": "Sitapur"
    },
    {
      "City": "Tamluk",
      "State": "West Bengal",
      "District": "Medinipur"
    },
    {
      "City": "Tanakpur",
      "State": "Uttaranchal",
      "District": "Champawat"
    },
    {
      "City": "Tanda",
      "State": "Uttar Pradesh",
      "District": "Rampur"
    },
    {
      "City": "Tanda",
      "State": "Uttar Pradesh",
      "District": "Ambedaker Nagar"
    },
    {
      "City": "Tandur",
      "State": "Andhra Pradesh",
      "District": "Rangareddi"
    },
    {
      "City": "Tangla",
      "State": "Assam",
      "District": "Darrang"
    },
    {
      "City": "Tanuku",
      "State": "Andhra Pradesh",
      "District": "West Godavari"
    },
    {
      "City": "Taoru",
      "State": "Haryana",
      "District": "Gurgaon"
    },
    {
      "City": "Tappa",
      "State": "Punjab",
      "District": "Sangrur"
    },
    {
      "City": "Tarakeswar",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "Tarana",
      "State": "Madhya Pradesh",
      "District": "Ujjain"
    },
    {
      "City": "Taranagar",
      "State": "Rajasthan",
      "District": "Churu"
    },
    {
      "City": "Taraori",
      "State": "Haryana",
      "District": "Karnal"
    },
    {
      "City": "Tarapur",
      "State": "Maharashtra",
      "District": "Thane"
    },
    {
      "City": "Tarbha",
      "State": "Orissa",
      "District": "Sonapur"
    },
    {
      "City": "Taricharkalan",
      "State": "Madhya Pradesh",
      "District": "Tikamgarh"
    },
    {
      "City": "Tarikere",
      "State": "Karnataka",
      "District": "Chikmagalur"
    },
    {
      "City": "Tarn Taran",
      "State": "Punjab",
      "District": "Amritsar"
    },
    {
      "City": "Tarsali",
      "State": "Gujarat",
      "District": "Vadodara"
    },
    {
      "City": "Tasgaon",
      "State": "Maharashtra",
      "District": "Sangli"
    },
    {
      "City": "Tatarpur Lallu",
      "State": "Uttar Pradesh",
      "District": "Bijnor"
    },
    {
      "City": "Tathavade",
      "State": "Maharashtra",
      "District": "Pune"
    },
    {
      "City": "Tati",
      "State": "Jharkhand",
      "District": "Ranchi"
    },
    {
      "City": "Tawang",
      "State": "Arunachal Pradesh",
      "District": "Tawang"
    },
    {
      "City": "Tayilupatti",
      "State": "Tamil Nadu",
      "District": "Virudhunagar"
    },
    {
      "City": "Teegalapahad",
      "State": "Andhra Pradesh",
      "District": "Adilabad"
    },
    {
      "City": "Tehri",
      "State": "Uttaranchal",
      "District": "Tehri Garhwal"
    },
    {
      "City": "Tekadi",
      "State": "Maharashtra",
      "District": "Nagpur"
    },
    {
      "City": "Tekanpur",
      "State": "Madhya Pradesh",
      "District": "Gwalior"
    },
    {
      "City": "Tekari",
      "State": "Bihar",
      "District": "Gaya"
    },
    {
      "City": "Tekkalakota",
      "State": "Karnataka",
      "District": "Bellary"
    },
    {
      "City": "Telgaon",
      "State": "Chhattisgarh",
      "District": "Surguja"
    },
    {
      "City": "Telhara",
      "State": "Maharashtra",
      "District": "Akola"
    },
    {
      "City": "Teliamura",
      "State": "Tripura",
      "District": "West Tripura"
    },
    {
      "City": "Tenali",
      "State": "Andhra Pradesh",
      "District": "Guntur"
    },
    {
      "City": "Tendu Kheda",
      "State": "Madhya Pradesh",
      "District": "Damoh"
    },
    {
      "City": "Tenkasi",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Tensa",
      "State": "Orissa",
      "District": "Sundargarh"
    },
    {
      "City": "Tentulkuli",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Tenu Dam-cum- Kathhara",
      "State": "Jharkhand",
      "District": "Bokaro"
    },
    {
      "City": "Teonthar",
      "State": "Madhya Pradesh",
      "District": "Rewa"
    },
    {
      "City": "Terdal",
      "State": "Karnataka",
      "District": "Bagalkot"
    },
    {
      "City": "Tetri Bazar",
      "State": "Uttar Pradesh",
      "District": "Siddharthnagar"
    },
    {
      "City": "Tezpur",
      "State": "Assam",
      "District": "Sonitpur"
    },
    {
      "City": "Tezu",
      "State": "Arunachal Pradesh",
      "District": "Lohit"
    },
    {
      "City": "Thadikombu",
      "State": "Tamil Nadu",
      "District": "Dindigul"
    },
    {
      "City": "Thaikkad",
      "State": "Kerala",
      "District": "Thrissur"
    },
    {
      "City": "Thakkolam",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Thakurdwara",
      "State": "Uttar Pradesh",
      "District": "Moradabad"
    },
    {
      "City": "Thakurganj",
      "State": "Bihar",
      "District": "Kishanganj"
    },
    {
      "City": "Thalainayar",
      "State": "Tamil Nadu",
      "District": "Nagapattinam"
    },
    {
      "City": "Thalakudi",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Thalassery",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Thaltej",
      "State": "Gujarat",
      "District": "Ahmadabad"
    },
    {
      "City": "Thamaraikulam",
      "State": "Tamil Nadu",
      "District": "Theni"
    },
    {
      "City": "Thammampatti",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Thana Bhawan",
      "State": "Uttar Pradesh",
      "District": "Muzaffarnagar"
    },
    {
      "City": "Thanamandi",
      "State": "Jammu & Kashmir",
      "District": "Rajauri"
    },
    {
      "City": "Thandla",
      "State": "Madhya Pradesh",
      "District": "Jhabua"
    },
    {
      "City": "Thane",
      "State": "Maharashtra",
      "District": "Thane"
    },
    {
      "City": "Thanesar",
      "State": "Haryana",
      "District": "Kurukshetra"
    },
    {
      "City": "Thangadh",
      "State": "Gujarat",
      "District": "Surendranagar"
    },
    {
      "City": "Thanjavur",
      "State": "Tamil Nadu",
      "District": "Thanjavur"
    },
    {
      "City": "Thanthoni",
      "State": "Tamil Nadu",
      "District": "Kapur"
    },
    {
      "City": "Tharad",
      "State": "Gujarat",
      "District": "Banas Kantha"
    },
    {
      "City": "Tharamangalam",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Tharangambadi",
      "State": "Tamil Nadu",
      "District": "Nagapattinam"
    },
    {
      "City": "Thathaiyangarpet",
      "State": "Tamil Nadu",
      "District": "Tiruchirappalli"
    },
    {
      "City": "Thedavur",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Thenambakkam",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Thengampudur",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Theni Allinagaram",
      "State": "Tamil Nadu",
      "District": "Theni"
    },
    {
      "City": "Thenkarai",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Thenkarai",
      "State": "Tamil Nadu",
      "District": "Theni"
    },
    {
      "City": "Thenthamaraikulam",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Thenthiruperai",
      "State": "Tamil Nadu",
      "District": "Toothukudi"
    },
    {
      "City": "Thenzawl",
      "State": "Mizoram",
      "District": "Serchhip"
    },
    {
      "City": "Theog",
      "State": "Himachal Pradesh",
      "District": "Shimla"
    },
    {
      "City": "Thesur",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Thevaram",
      "State": "Tamil Nadu",
      "District": "Theni"
    },
    {
      "City": "Thevur",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Thiagadurgam",
      "State": "Tamil Nadu",
      "District": "Viluppuram"
    },
    {
      "City": "Thingalnagar",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Thiriya Nizamat Khan",
      "State": "Uttar Pradesh",
      "District": "Bareilly"
    },
    {
      "City": "Thirukarungudi",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Thirukattupalli",
      "State": "Tamil Nadu",
      "District": "Thanjavur"
    },
    {
      "City": "Thirumalayampalayam",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Thirumangalam",
      "State": "Tamil Nadu",
      "District": "Madurai"
    },
    {
      "City": "Thirumazhisai",
      "State": "Tamil Nadu",
      "District": "Thiruvallur"
    },
    {
      "City": "Thirunagar",
      "State": "Tamil Nadu",
      "District": "Madurai"
    },
    {
      "City": "Thirunageswaram",
      "State": "Tamil Nadu",
      "District": "Thanjavur"
    },
    {
      "City": "Thiruneermalai",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Thirunindravur",
      "State": "Tamil Nadu",
      "District": "Thiruvallur"
    },
    {
      "City": "Thiruparankundram",
      "State": "Tamil Nadu",
      "District": "Madurai"
    },
    {
      "City": "Thiruparappu",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Thiruporur",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Thiruppanandal",
      "State": "Tamil Nadu",
      "District": "Thanjavur"
    },
    {
      "City": "Thirupuvanam",
      "State": "Tamil Nadu",
      "District": "Thanjavur"
    },
    {
      "City": "Thirupuvanam",
      "State": "Tamil Nadu",
      "District": "Sivaganga"
    },
    {
      "City": "Thiruthangal",
      "State": "Tamil Nadu",
      "District": "Virudhunagar"
    },
    {
      "City": "Thiruthuraipoondi",
      "State": "Tamil Nadu",
      "District": "Thiruvarur"
    },
    {
      "City": "Thiruvaiyaru",
      "State": "Tamil Nadu",
      "District": "Thanjavur"
    },
    {
      "City": "Thiruvalam",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Thiruvalla",
      "State": "Kerala",
      "District": "Pathanamthitta"
    },
    {
      "City": "Thiruvallur",
      "State": "Tamil Nadu",
      "District": "Thiruvallur"
    },
    {
      "City": "Thiruvankulam",
      "State": "Kerala",
      "District": "Ernakulam"
    },
    {
      "City": "Thiruvarur",
      "State": "Tamil Nadu",
      "District": "Thiruvarur"
    },
    {
      "City": "Thiruvattaru",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Thiruvenkatam",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Thiruvennainallur",
      "State": "Tamil Nadu",
      "District": "Viluppuram"
    },
    {
      "City": "Thiruverumbur",
      "State": "Tamil Nadu",
      "District": "Tiruchirappalli"
    },
    {
      "City": "Thiruvidaimarudur",
      "State": "Tamil Nadu",
      "District": "Thanjavur"
    },
    {
      "City": "Thiruvithankodu",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Thisayanvilai",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Thittacheri",
      "State": "Tamil Nadu",
      "District": "Nagapattinam"
    },
    {
      "City": "Thodupuzha",
      "State": "Kerala",
      "District": "Idukki"
    },
    {
      "City": "Thokur-62",
      "State": "Karnataka",
      "District": "Dakshina Kannada"
    },
    {
      "City": "Thondamuthur",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Thondi",
      "State": "Tamil Nadu",
      "District": "Ramanathapuram"
    },
    {
      "City": "Thongkhong Laxmi Bazar",
      "State": "Manipur",
      "District": "Imphal West"
    },
    {
      "City": "Thoothukkudi",
      "State": "Tamil Nadu",
      "District": "Toothukudi"
    },
    {
      "City": "Thorapadi",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Thorapadi",
      "State": "Tamil Nadu",
      "District": "Cuddalore"
    },
    {
      "City": "Thottada",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Thottipalayam",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Thottiyam",
      "State": "Tamil Nadu",
      "District": "Tiruchirappalli"
    },
    {
      "City": "Thoubal",
      "State": "Manipur",
      "District": "Thoubal"
    },
    {
      "City": "Thrippunithura",
      "State": "Kerala",
      "District": "Ernakulam"
    },
    {
      "City": "Thrissur",
      "State": "Kerala",
      "District": "Thrissur"
    },
    {
      "City": "Thudiyalur",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Thumbe",
      "State": "Karnataka",
      "District": "Dakshina Kannada"
    },
    {
      "City": "Thuraiyur",
      "State": "Tamil Nadu",
      "District": "Tiruchirappalli"
    },
    {
      "City": "Thuthipattu",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Thuvakudi",
      "State": "Tamil Nadu",
      "District": "Tiruchirappalli"
    },
    {
      "City": "Tigri",
      "State": "Delhi *",
      "District": "South"
    },
    {
      "City": "Tihu",
      "State": "Assam",
      "District": "Nalbari"
    },
    {
      "City": "Tijara",
      "State": "Rajasthan",
      "District": "Alwar"
    },
    {
      "City": "Tikait Nagar",
      "State": "Uttar Pradesh",
      "District": "Barabanki"
    },
    {
      "City": "Tikamgarh",
      "State": "Madhya Pradesh",
      "District": "Tikamgarh"
    },
    {
      "City": "Tikri",
      "State": "Uttar Pradesh",
      "District": "Baghpat"
    },
    {
      "City": "Tilda Newra",
      "State": "Chhattisgarh",
      "District": "Raipur"
    },
    {
      "City": "Tilhar",
      "State": "Uttar Pradesh",
      "District": "Shahjahanpur"
    },
    {
      "City": "Tilpat",
      "State": "Haryana",
      "District": "Faridabad"
    },
    {
      "City": "Timarni",
      "State": "Madhya Pradesh",
      "District": "Harda"
    },
    {
      "City": "Timiri",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Tindivanam",
      "State": "Tamil Nadu",
      "District": "Viluppuram"
    },
    {
      "City": "Tindwari",
      "State": "Uttar Pradesh",
      "District": "Banda"
    },
    {
      "City": "Tinsukia",
      "State": "Assam",
      "District": "Tinsukia"
    },
    {
      "City": "Tiptur",
      "State": "Karnataka",
      "District": "Tumkur"
    },
    {
      "City": "Tira Sujanpur",
      "State": "Himachal Pradesh",
      "District": "Hamirpur"
    },
    {
      "City": "Tirodi",
      "State": "Madhya Pradesh",
      "District": "Balaghat"
    },
    {
      "City": "Tirora",
      "State": "Maharashtra",
      "District": "Gondiya"
    },
    {
      "City": "Tirthahalli",
      "State": "Karnataka",
      "District": "Shimoga"
    },
    {
      "City": "Tiruchanur",
      "State": "Andhra Pradesh",
      "District": "Chittoor"
    },
    {
      "City": "Tiruchendur",
      "State": "Tamil Nadu",
      "District": "Toothukudi"
    },
    {
      "City": "Tiruchengode",
      "State": "Tamil Nadu",
      "District": "Namakkal"
    },
    {
      "City": "Tiruchirappalli",
      "State": "Tamil Nadu",
      "District": "Tiruchirappalli"
    },
    {
      "City": "Tirukalukundram",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Tirukkoyilur",
      "State": "Tamil Nadu",
      "District": "Viluppuram"
    },
    {
      "City": "Tirumakudal-Narsipur",
      "State": "Karnataka",
      "District": "Mysore"
    },
    {
      "City": "Tirumala",
      "State": "Andhra Pradesh",
      "District": "Chittoor"
    },
    {
      "City": "Tirunelveli",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Tirupathur",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Tirupathur",
      "State": "Tamil Nadu",
      "District": "Sivaganga"
    },
    {
      "City": "Tirupati",
      "State": "Andhra Pradesh",
      "District": "Chittoor"
    },
    {
      "City": "Tirupati (NMA)",
      "State": "Andhra Pradesh",
      "District": "Chittoor"
    },
    {
      "City": "Tiruppur",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Tirur",
      "State": "Kerala",
      "District": "Malappuram"
    },
    {
      "City": "Tirusulam",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Tiruttani",
      "State": "Tamil Nadu",
      "District": "Thiruvallur"
    },
    {
      "City": "Tiruvannamalai",
      "State": "Tamil Nadu",
      "District": "Tiruvanamalai"
    },
    {
      "City": "Tiruverkadu",
      "State": "Tamil Nadu",
      "District": "Thiruvallur"
    },
    {
      "City": "Tiruvethipuram",
      "State": "Tamil Nadu",
      "District": "Tiruvanamalai"
    },
    {
      "City": "Tiruvottiyur",
      "State": "Tamil Nadu",
      "District": "Thiruvallur"
    },
    {
      "City": "Tirwaganj",
      "State": "Uttar Pradesh",
      "District": "Kannauj"
    },
    {
      "City": "Tisra",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Titabor Town",
      "State": "Assam",
      "District": "Jorhat"
    },
    {
      "City": "Titagarh",
      "State": "West Bengal",
      "District": "North Twentyfour Parganas"
    },
    {
      "City": "Titlagarh",
      "State": "Orissa",
      "District": "Balangir"
    },
    {
      "City": "Titron",
      "State": "Uttar Pradesh",
      "District": "Saharanpur"
    },
    {
      "City": "Tittakudi",
      "State": "Tamil Nadu",
      "District": "Cuddalore"
    },
    {
      "City": "Tlabung",
      "State": "Mizoram",
      "District": "Lunglei"
    },
    {
      "City": "TNPL Pugalur",
      "State": "Tamil Nadu",
      "District": "Kapur"
    },
    {
      "City": "Todabhim",
      "State": "Rajasthan",
      "District": "Karauli"
    },
    {
      "City": "Todaraisingh",
      "State": "Rajasthan",
      "District": "Tonk"
    },
    {
      "City": "Todra",
      "State": "Rajasthan",
      "District": "Sawai Madhopur"
    },
    {
      "City": "Tohana",
      "State": "Haryana",
      "District": "Fatehabad"
    },
    {
      "City": "Tondi Fatehpur",
      "State": "Uttar Pradesh",
      "District": "Jhansi"
    },
    {
      "City": "Tonk",
      "State": "Rajasthan",
      "District": "Tonk"
    },
    {
      "City": "Topa",
      "State": "Jharkhand",
      "District": "Hazaribag"
    },
    {
      "City": "Topchanchi",
      "State": "Jharkhand",
      "District": "Dhanbad"
    },
    {
      "City": "Torban (Khetri Leikai)",
      "State": "Manipur",
      "District": "Imphal East"
    },
    {
      "City": "Tosham",
      "State": "Haryana",
      "District": "Bhiwani"
    },
    {
      "City": "Totaladoh",
      "State": "Maharashtra",
      "District": "Nagpur"
    },
    {
      "City": "Tral",
      "State": "Jammu & Kashmir",
      "District": "Pulwama"
    },
    {
      "City": "Trimbak",
      "State": "Maharashtra",
      "District": "Nashik"
    },
    {
      "City": "Trivandrum",
      "State": "Kerala",
      "District": "Thiruvananthapuram"
    },
    {
      "City": "Tuensang",
      "State": "Nagaland",
      "District": "Tuensang"
    },
    {
      "City": "Tufanganj",
      "State": "West Bengal",
      "District": "Koch Bihar"
    },
    {
      "City": "Tuljapur",
      "State": "Maharashtra",
      "District": "Osmanabad"
    },
    {
      "City": "Tulsipur",
      "State": "Uttar Pradesh",
      "District": "Balrampur"
    },
    {
      "City": "Tumkur",
      "State": "Karnataka",
      "District": "Tumkur"
    },
    {
      "City": "Tumsar",
      "State": "Maharashtra",
      "District": "Bhandara"
    },
    {
      "City": "Tundla",
      "State": "Uttar Pradesh",
      "District": "Firozabad"
    },
    {
      "City": "Tundla Kham",
      "State": "Uttar Pradesh",
      "District": "Firozabad"
    },
    {
      "City": "Tundla Rly. Colony",
      "State": "Uttar Pradesh",
      "District": "Firozabad"
    },
    {
      "City": "Tuni",
      "State": "Andhra Pradesh",
      "District": "East Godavari"
    },
    {
      "City": "Tura",
      "State": "Meghalaya",
      "District": "West Garo Hills"
    },
    {
      "City": "Turuvekere",
      "State": "Karnataka",
      "District": "Tumkur"
    },
    {
      "City": "Uchana",
      "State": "Haryana",
      "District": "Jind"
    },
    {
      "City": "Uchgaon",
      "State": "Maharashtra",
      "District": "Kolhapur"
    },
    {
      "City": "Udaipur",
      "State": "Tripura",
      "District": "South Tripura"
    },
    {
      "City": "Udaipur",
      "State": "Rajasthan",
      "District": "Udaipur"
    },
    {
      "City": "Udaipura",
      "State": "Madhya Pradesh",
      "District": "Raisen"
    },
    {
      "City": "Udaipurwati",
      "State": "Rajasthan",
      "District": "Jhunjhunun"
    },
    {
      "City": "Udala",
      "State": "Orissa",
      "District": "Mayurbhanj"
    },
    {
      "City": "Udalguri",
      "State": "Assam",
      "District": "Darrang"
    },
    {
      "City": "Udangudi",
      "State": "Tamil Nadu",
      "District": "Toothukudi"
    },
    {
      "City": "Udayarpalayam",
      "State": "Tamil Nadu",
      "District": "Ariyalur"
    },
    {
      "City": "Udgir",
      "State": "Maharashtra",
      "District": "Latur"
    },
    {
      "City": "Udhagamandalam",
      "State": "Tamil Nadu",
      "District": "The Nilgiris"
    },
    {
      "City": "Udhampur",
      "State": "Jammu & Kashmir",
      "District": "Udhampur"
    },
    {
      "City": "Udma",
      "State": "Kerala",
      "District": "Kasaragod"
    },
    {
      "City": "Udpura",
      "State": "Rajasthan",
      "District": "Kota"
    },
    {
      "City": "Udumalaipettai",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Udupi",
      "State": "Karnataka",
      "District": "Udupi"
    },
    {
      "City": "Ugu",
      "State": "Uttar Pradesh",
      "District": "Unnao"
    },
    {
      "City": "Ujhani",
      "State": "Uttar Pradesh",
      "District": "Budaun"
    },
    {
      "City": "Ujhari",
      "State": "Uttar Pradesh",
      "District": "Jyotiba Phule Nagar"
    },
    {
      "City": "Ujjain",
      "State": "Madhya Pradesh",
      "District": "Ujjain"
    },
    {
      "City": "Ukai",
      "State": "Gujarat",
      "District": "Surat"
    },
    {
      "City": "Ukhra",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Uklanamandi",
      "State": "Haryana",
      "District": "Hisar"
    },
    {
      "City": "Ukwa",
      "State": "Madhya Pradesh",
      "District": "Balaghat"
    },
    {
      "City": "Ulhasnagar",
      "State": "Maharashtra",
      "District": "Thane"
    },
    {
      "City": "Ullal",
      "State": "Karnataka",
      "District": "Dakshina Kannada"
    },
    {
      "City": "Ullur",
      "State": "Tamil Nadu",
      "District": "Thanjavur"
    },
    {
      "City": "Uluberia",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Ulundurpettai",
      "State": "Tamil Nadu",
      "District": "Viluppuram"
    },
    {
      "City": "Umarga",
      "State": "Maharashtra",
      "District": "Osmanabad"
    },
    {
      "City": "Umaria",
      "State": "Madhya Pradesh",
      "District": "Umaria"
    },
    {
      "City": "Umarkhed",
      "State": "Maharashtra",
      "District": "Yavatmal"
    },
    {
      "City": "Umarkote",
      "State": "Orissa",
      "District": "Nabarangapur"
    },
    {
      "City": "Umarsara",
      "State": "Maharashtra",
      "District": "Yavatmal"
    },
    {
      "City": "Umbar Pada Nandade",
      "State": "Maharashtra",
      "District": "Thane"
    },
    {
      "City": "Umbergaon",
      "State": "Gujarat",
      "District": "Valsad"
    },
    {
      "City": "Umbergaon INA",
      "State": "Gujarat",
      "District": "Valsad"
    },
    {
      "City": "Umrangso",
      "State": "Assam",
      "District": "North Cachar Hills"
    },
    {
      "City": "Umred",
      "State": "Maharashtra",
      "District": "Nagpur"
    },
    {
      "City": "Umreth",
      "State": "Gujarat",
      "District": "Anand"
    },
    {
      "City": "Umri",
      "State": "Uttar Pradesh",
      "District": "Jalaun"
    },
    {
      "City": "Umri Kalan",
      "State": "Uttar Pradesh",
      "District": "Moradabad"
    },
    {
      "City": "Umri Pragane Balapur",
      "State": "Maharashtra",
      "District": "Akola"
    },
    {
      "City": "Un",
      "State": "Uttar Pradesh",
      "District": "Muzaffarnagar"
    },
    {
      "City": "Un",
      "State": "Gujarat",
      "District": "Surat"
    },
    {
      "City": "Una",
      "State": "Himachal Pradesh",
      "District": "Una"
    },
    {
      "City": "Una",
      "State": "Gujarat",
      "District": "Junagadh"
    },
    {
      "City": "Uncha Siwana",
      "State": "Haryana",
      "District": "Karnal"
    },
    {
      "City": "Unchahar",
      "State": "Uttar Pradesh",
      "District": "Rae Bareli"
    },
    {
      "City": "Unchehara",
      "State": "Madhya Pradesh",
      "District": "Satna"
    },
    {
      "City": "Unhel",
      "State": "Madhya Pradesh",
      "District": "Ujjain"
    },
    {
      "City": "Uniara",
      "State": "Rajasthan",
      "District": "Tonk"
    },
    {
      "City": "Unjalaur",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Unjha",
      "State": "Gujarat",
      "District": "Mahesana"
    },
    {
      "City": "Unnamalaikadai",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Unnao",
      "State": "Uttar Pradesh",
      "District": "Unnao"
    },
    {
      "City": "Upleta",
      "State": "Gujarat",
      "District": "Rajkot"
    },
    {
      "City": "Uppal Kalan",
      "State": "Andhra Pradesh",
      "District": "Rangareddi"
    },
    {
      "City": "Upper Sileru Project Site Camp",
      "State": "Andhra Pradesh",
      "District": "Visakhapatnam"
    },
    {
      "City": "Upper Tadong",
      "State": "Sikkim",
      "District": "East"
    },
    {
      "City": "Uppidamangalam",
      "State": "Tamil Nadu",
      "District": "Kapur"
    },
    {
      "City": "Uppiliapuram",
      "State": "Tamil Nadu",
      "District": "Tiruchirappalli"
    },
    {
      "City": "Uran",
      "State": "Maharashtra",
      "District": "Raigarh"
    },
    {
      "City": "Uran Islampur",
      "State": "Maharashtra",
      "District": "Sangli"
    },
    {
      "City": "Urapakkam",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Uravakonda",
      "State": "Andhra Pradesh",
      "District": "Anantapur"
    },
    {
      "City": "Uri",
      "State": "Jammu & Kashmir",
      "District": "Baramula"
    },
    {
      "City": "Urla",
      "State": "Chhattisgarh",
      "District": "Raipur"
    },
    {
      "City": "Urmar Tanda",
      "State": "Punjab",
      "District": "Hoshiarpur"
    },
    {
      "City": "Usawan",
      "State": "Uttar Pradesh",
      "District": "Budaun"
    },
    {
      "City": "Usehat",
      "State": "Uttar Pradesh",
      "District": "Budaun"
    },
    {
      "City": "Usilampatti",
      "State": "Tamil Nadu",
      "District": "Madurai"
    },
    {
      "City": "Utekhol",
      "State": "Maharashtra",
      "District": "Raigarh"
    },
    {
      "City": "Uthamapalayam",
      "State": "Tamil Nadu",
      "District": "Theni"
    },
    {
      "City": "Uthangarai",
      "State": "Tamil Nadu",
      "District": "Dharmapuri"
    },
    {
      "City": "Uthayendram",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Uthiramerur",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Uthukkottai",
      "State": "Tamil Nadu",
      "District": "Thiruvallur"
    },
    {
      "City": "Uthukuli",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Utran",
      "State": "Gujarat",
      "District": "Surat"
    },
    {
      "City": "Utraula",
      "State": "Uttar Pradesh",
      "District": "Balrampur"
    },
    {
      "City": "Uttar Bagdogra",
      "State": "West Bengal",
      "District": "Darjiling"
    },
    {
      "City": "Uttar Durgapur",
      "State": "West Bengal",
      "District": "South Twentyfour Parganas"
    },
    {
      "City": "Uttar Goara",
      "State": "West Bengal",
      "District": "Barddhaman"
    },
    {
      "City": "Uttar Kalas",
      "State": "West Bengal",
      "District": "South Twentyfour Parganas"
    },
    {
      "City": "Uttar Kamakhyaguri",
      "State": "West Bengal",
      "District": "Jalpaiguri"
    },
    {
      "City": "Uttar Krishnapur Part-I",
      "State": "Assam",
      "District": "Cachar"
    },
    {
      "City": "Uttar Latabari",
      "State": "West Bengal",
      "District": "Jalpaiguri"
    },
    {
      "City": "Uttar Mahammadpur",
      "State": "West Bengal",
      "District": "Murshidabad"
    },
    {
      "City": "Uttar Pirpur",
      "State": "West Bengal",
      "District": "Haora"
    },
    {
      "City": "Uttar Raypur",
      "State": "West Bengal",
      "District": "South Twentyfour Parganas"
    },
    {
      "City": "Uttarahalli",
      "State": "Karnataka",
      "District": "Bangalore"
    },
    {
      "City": "Uttarkashi",
      "State": "Uttaranchal",
      "District": "Uttarkashi"
    },
    {
      "City": "Uttarpara Kotrung",
      "State": "West Bengal",
      "District": "Hugli"
    },
    {
      "City": "V. Pudur",
      "State": "Tamil Nadu",
      "District": "Toothukudi"
    },
    {
      "City": "Vada",
      "State": "Maharashtra",
      "District": "Thane"
    },
    {
      "City": "Vadakara",
      "State": "Kerala",
      "District": "Kozhikode"
    },
    {
      "City": "Vadakarai Keezhpadugai",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Vadakkanandal",
      "State": "Tamil Nadu",
      "District": "Viluppuram"
    },
    {
      "City": "Vadakkuvalliyur",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Vadalur",
      "State": "Tamil Nadu",
      "District": "Cuddalore"
    },
    {
      "City": "Vadamadurai",
      "State": "Tamil Nadu",
      "District": "Dindigul"
    },
    {
      "City": "Vadavalli",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Vadgaon",
      "State": "Maharashtra",
      "District": "Pune"
    },
    {
      "City": "Vadgaon Kasba",
      "State": "Maharashtra",
      "District": "Kolhapur"
    },
    {
      "City": "Vadia",
      "State": "Gujarat",
      "District": "Narmada"
    },
    {
      "City": "Vadipatti",
      "State": "Tamil Nadu",
      "District": "Madurai"
    },
    {
      "City": "Vadnagar",
      "State": "Gujarat",
      "District": "Mahesana"
    },
    {
      "City": "Vadodara",
      "State": "Gujarat",
      "District": "Vadodara"
    },
    {
      "City": "Vadugapatti",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Vadugapatti",
      "State": "Tamil Nadu",
      "District": "Theni"
    },
    {
      "City": "Vaghodia INA",
      "State": "Gujarat",
      "District": "Vadodara"
    },
    {
      "City": "Vaijapur",
      "State": "Maharashtra",
      "District": "Aurangabad"
    },
    {
      "City": "Vaikom",
      "State": "Kerala",
      "District": "Kottayam"
    },
    {
      "City": "Vairengte",
      "State": "Mizoram",
      "District": "Kolasib"
    },
    {
      "City": "Vaitheeswarankoil",
      "State": "Tamil Nadu",
      "District": "Nagapattinam"
    },
    {
      "City": "Valangaiman",
      "State": "Tamil Nadu",
      "District": "Thiruvarur"
    },
    {
      "City": "Valapattanam",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Valasaravakkam",
      "State": "Tamil Nadu",
      "District": "Thiruvallur"
    },
    {
      "City": "Valavanur",
      "State": "Tamil Nadu",
      "District": "Viluppuram"
    },
    {
      "City": "Vallabh Vidhyanagar",
      "State": "Gujarat",
      "District": "Anand"
    },
    {
      "City": "Vallachira",
      "State": "Kerala",
      "District": "Thrissur"
    },
    {
      "City": "Vallam",
      "State": "Tamil Nadu",
      "District": "Thanjavur"
    },
    {
      "City": "Valparai",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Valpoi",
      "State": "Goa",
      "District": "North Goa"
    },
    {
      "City": "Valsad",
      "State": "Gujarat",
      "District": "Valsad"
    },
    {
      "City": "Valsad INA",
      "State": "Gujarat",
      "District": "Valsad"
    },
    {
      "City": "Valvaithankoshtam",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Vanasthali",
      "State": "Rajasthan",
      "District": "Tonk"
    },
    {
      "City": "Vanavasi",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Vandalur",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Vandavasi",
      "State": "Tamil Nadu",
      "District": "Tiruvanamalai"
    },
    {
      "City": "Vandiyur",
      "State": "Tamil Nadu",
      "District": "Madurai"
    },
    {
      "City": "Vaniputhur",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Vaniyambadi",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Vanthali",
      "State": "Gujarat",
      "District": "Junagadh"
    },
    {
      "City": "Vanvadi (Sadashivgad)",
      "State": "Maharashtra",
      "District": "Satara"
    },
    {
      "City": "Vaparala",
      "State": "Andhra Pradesh",
      "District": "Cuddapah"
    },
    {
      "City": "Vapi",
      "State": "Gujarat",
      "District": "Valsad"
    },
    {
      "City": "Vapi INA",
      "State": "Gujarat",
      "District": "Valsad"
    },
    {
      "City": "Varadarajanpettai",
      "State": "Tamil Nadu",
      "District": "Ariyalur"
    },
    {
      "City": "Varam",
      "State": "Kerala",
      "District": "Kannur"
    },
    {
      "City": "Varanasi",
      "State": "Uttar Pradesh",
      "District": "Varanasi"
    },
    {
      "City": "Varanasi",
      "State": "Uttar Pradesh",
      "District": "Varanasi"
    },
    {
      "City": "Varappuzha",
      "State": "Kerala",
      "District": "Ernakulam"
    },
    {
      "City": "Varca",
      "State": "Goa",
      "District": "South Goa"
    },
    {
      "City": "Varkala",
      "State": "Kerala",
      "District": "Thiruvananthapuram"
    },
    {
      "City": "Vartej",
      "State": "Gujarat",
      "District": "Bhavnagar"
    },
    {
      "City": "Vasai",
      "State": "Maharashtra",
      "District": "Thane"
    },
    {
      "City": "Vasantnagar",
      "State": "Maharashtra",
      "District": "Yavatmal"
    },
    {
      "City": "Vashind",
      "State": "Maharashtra",
      "District": "Thane"
    },
    {
      "City": "Vasna Borsad INA",
      "State": "Gujarat",
      "District": "Anand"
    },
    {
      "City": "Vastral",
      "State": "Gujarat",
      "District": "Ahmadabad"
    },
    {
      "City": "Vastrapur",
      "State": "Gujarat",
      "District": "Ahmadabad"
    },
    {
      "City": "Vasudevanallur",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Vathirairuppu",
      "State": "Tamil Nadu",
      "District": "Virudhunagar"
    },
    {
      "City": "Vazhakkala",
      "State": "Kerala",
      "District": "Ernakulam"
    },
    {
      "City": "Vazhapadi",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Vedapatti",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Vedaranyam",
      "State": "Tamil Nadu",
      "District": "Nagapattinam"
    },
    {
      "City": "Vedasandur",
      "State": "Tamil Nadu",
      "District": "Dindigul"
    },
    {
      "City": "Veeraganur",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Veerakeralam",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Veerakkalpudur",
      "State": "Tamil Nadu",
      "District": "Salem"
    },
    {
      "City": "Veerapandi",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Veerapandi",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Veerapandi",
      "State": "Tamil Nadu",
      "District": "Theni"
    },
    {
      "City": "Veerappanchatram",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Veeravanallur",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Veerbhadra",
      "State": "Uttaranchal",
      "District": "Dehradun"
    },
    {
      "City": "Vehicle Fac. Jabalpur",
      "State": "Madhya Pradesh",
      "District": "Jabalpur"
    },
    {
      "City": "Vejalpur",
      "State": "Gujarat",
      "District": "Ahmadabad"
    },
    {
      "City": "Velampalayam",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Velankanni",
      "State": "Tamil Nadu",
      "District": "Nagapattinam"
    },
    {
      "City": "Vellakinar",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Vellakoil",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Vellalur",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Vellimalai",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Vellore",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Vellottamparappu",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Velur",
      "State": "Tamil Nadu",
      "District": "Namakkal"
    },
    {
      "City": "Vengampudur",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Vengathur",
      "State": "Tamil Nadu",
      "District": "Thiruvallur"
    },
    {
      "City": "Vengurla",
      "State": "Maharashtra",
      "District": "Sindhudurg"
    },
    {
      "City": "Venkarai",
      "State": "Tamil Nadu",
      "District": "Namakkal"
    },
    {
      "City": "Venkatagiri",
      "State": "Andhra Pradesh",
      "District": "Nellore"
    },
    {
      "City": "Venkatapura",
      "State": "Karnataka",
      "District": "Uttara Kannada"
    },
    {
      "City": "Venmanad",
      "State": "Kerala",
      "District": "Thrissur"
    },
    {
      "City": "Vennanthur",
      "State": "Tamil Nadu",
      "District": "Namakkal"
    },
    {
      "City": "Vepagunta",
      "State": "Andhra Pradesh",
      "District": "Visakhapatnam"
    },
    {
      "City": "Veppathur",
      "State": "Tamil Nadu",
      "District": "Thanjavur"
    },
    {
      "City": "Veraval",
      "State": "Gujarat",
      "District": "Junagadh"
    },
    {
      "City": "Verkilambi",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Vetapalem",
      "State": "Andhra Pradesh",
      "District": "Prakasam"
    },
    {
      "City": "Vettaikaranpudur",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Vettavalam",
      "State": "Tamil Nadu",
      "District": "Tiruvanamalai"
    },
    {
      "City": "Vicarabad",
      "State": "Andhra Pradesh",
      "District": "Rangareddi"
    },
    {
      "City": "Vidisha",
      "State": "Madhya Pradesh",
      "District": "Vidisha"
    },
    {
      "City": "Vidyavihar",
      "State": "Rajasthan",
      "District": "Jhunjhunun"
    },
    {
      "City": "Vijaigarh",
      "State": "Uttar Pradesh",
      "District": "Aligarh"
    },
    {
      "City": "Vijainagar",
      "State": "Rajasthan",
      "District": "Ganganagar"
    },
    {
      "City": "Vijainagar",
      "State": "Rajasthan",
      "District": "Ajmer"
    },
    {
      "City": "Vijalpor",
      "State": "Gujarat",
      "District": "Navsari"
    },
    {
      "City": "Vijapur",
      "State": "Gujarat",
      "District": "Mahesana"
    },
    {
      "City": "Vijay Pur",
      "State": "Jammu & Kashmir",
      "District": "Jammu"
    },
    {
      "City": "Vijayapura",
      "State": "Karnataka",
      "District": "Bangalore Rural"
    },
    {
      "City": "Vijayapuri",
      "State": "Tamil Nadu",
      "District": "Erode"
    },
    {
      "City": "Vijayapuri (North)",
      "State": "Andhra Pradesh",
      "District": "Nalgonda"
    },
    {
      "City": "Vijayawada",
      "State": "Andhra Pradesh",
      "District": "Krishna"
    },
    {
      "City": "Vijayraghavgarh",
      "State": "Madhya Pradesh",
      "District": "Katni"
    },
    {
      "City": "Vikasnagar",
      "State": "Uttaranchal",
      "District": "Dehradun"
    },
    {
      "City": "Vikramasingapuram",
      "State": "Tamil Nadu",
      "District": "Tirunelveli"
    },
    {
      "City": "Vikravandi",
      "State": "Tamil Nadu",
      "District": "Viluppuram"
    },
    {
      "City": "Vilangudi",
      "State": "Tamil Nadu",
      "District": "Madurai"
    },
    {
      "City": "Vilankurichi",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Vilapakkam",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Vilathikulam",
      "State": "Tamil Nadu",
      "District": "Toothukudi"
    },
    {
      "City": "Vilavur",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Villiappally",
      "State": "Kerala",
      "District": "Kozhikode"
    },
    {
      "City": "Villukuri",
      "State": "Tamil Nadu",
      "District": "Kanniyakumari"
    },
    {
      "City": "Viluppuram",
      "State": "Tamil Nadu",
      "District": "Viluppuram"
    },
    {
      "City": "Vinukonda",
      "State": "Andhra Pradesh",
      "District": "Guntur"
    },
    {
      "City": "Virajpet",
      "State": "Karnataka",
      "District": "Kodagu"
    },
    {
      "City": "Viramgam",
      "State": "Gujarat",
      "District": "Ahmadabad"
    },
    {
      "City": "Virar",
      "State": "Maharashtra",
      "District": "Thane"
    },
    {
      "City": "Viratnagar",
      "State": "Rajasthan",
      "District": "Jaipur"
    },
    {
      "City": "Virudhachalam",
      "State": "Tamil Nadu",
      "District": "Cuddalore"
    },
    {
      "City": "Virudhunagar",
      "State": "Tamil Nadu",
      "District": "Virudhunagar"
    },
    {
      "City": "Virupakshipuram",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Visakhapatnam",
      "State": "Andhra Pradesh",
      "District": "Visakhapatnam"
    },
    {
      "City": "Visavadar",
      "State": "Gujarat",
      "District": "Junagadh"
    },
    {
      "City": "Vishrampur",
      "State": "Chhattisgarh",
      "District": "Surguja"
    },
    {
      "City": "Visnagar",
      "State": "Gujarat",
      "District": "Mahesana"
    },
    {
      "City": "Viswanatham",
      "State": "Tamil Nadu",
      "District": "Virudhunagar"
    },
    {
      "City": "Vita",
      "State": "Maharashtra",
      "District": "Sangli"
    },
    {
      "City": "Vitthal Udyognagar INA",
      "State": "Gujarat",
      "District": "Anand"
    },
    {
      "City": "Vizianagaram",
      "State": "Andhra Pradesh",
      "District": "Vizianagaram"
    },
    {
      "City": "Vrindavan",
      "State": "Uttar Pradesh",
      "District": "Mathura"
    },
    {
      "City": "Vyara",
      "State": "Gujarat",
      "District": "Surat"
    },
    {
      "City": "Wadgaon Road",
      "State": "Maharashtra",
      "District": "Yavatmal"
    },
    {
      "City": "Wadhwan",
      "State": "Gujarat",
      "District": "Surendranagar"
    },
    {
      "City": "Wadi",
      "State": "Karnataka",
      "District": "Gulbarga"
    },
    {
      "City": "Wadi",
      "State": "Maharashtra",
      "District": "Nagpur"
    },
    {
      "City": "Wadi ACC",
      "State": "Karnataka",
      "District": "Gulbarga"
    },
    {
      "City": "Waghapur",
      "State": "Maharashtra",
      "District": "Yavatmal"
    },
    {
      "City": "Wai",
      "State": "Maharashtra",
      "District": "Satara"
    },
    {
      "City": "Wajegaon",
      "State": "Maharashtra",
      "District": "Nanded"
    },
    {
      "City": "Walajabad",
      "State": "Tamil Nadu",
      "District": "Kancheepuram"
    },
    {
      "City": "Walajapet",
      "State": "Tamil Nadu",
      "District": "Vellore"
    },
    {
      "City": "Walani",
      "State": "Maharashtra",
      "District": "Nagpur"
    },
    {
      "City": "Waliv",
      "State": "Maharashtra",
      "District": "Thane"
    },
    {
      "City": "Wanadongri",
      "State": "Maharashtra",
      "District": "Nagpur"
    },
    {
      "City": "Wanaparthi",
      "State": "Andhra Pradesh",
      "District": "Mahbubnagar"
    },
    {
      "City": "Wangjing",
      "State": "Manipur",
      "District": "Thoubal"
    },
    {
      "City": "Wangoi",
      "State": "Manipur",
      "District": "Imphal West"
    },
    {
      "City": "Wani",
      "State": "Maharashtra",
      "District": "Yavatmal"
    },
    {
      "City": "Wankaner",
      "State": "Gujarat",
      "District": "Rajkot"
    },
    {
      "City": "Wara Seoni",
      "State": "Madhya Pradesh",
      "District": "Balaghat"
    },
    {
      "City": "Warangal",
      "State": "Andhra Pradesh",
      "District": "Warangal"
    },
    {
      "City": "Wardha",
      "State": "Maharashtra",
      "District": "Wardha"
    },
    {
      "City": "Warhapur",
      "State": "Uttar Pradesh",
      "District": "Bijnor"
    },
    {
      "City": "Warisaliganj",
      "State": "Bihar",
      "District": "Nawada"
    },
    {
      "City": "Warora",
      "State": "Maharashtra",
      "District": "Chandrapur"
    },
    {
      "City": "Warud",
      "State": "Maharashtra",
      "District": "Amravati"
    },
    {
      "City": "Washim",
      "State": "Maharashtra",
      "District": "Washim"
    },
    {
      "City": "Wazirganj",
      "State": "Uttar Pradesh",
      "District": "Budaun"
    },
    {
      "City": "Weir",
      "State": "Rajasthan",
      "District": "Bharatpur"
    },
    {
      "City": "Wellington",
      "State": "Tamil Nadu",
      "District": "The Nilgiris"
    },
    {
      "City": "Williamnagar",
      "State": "Meghalaya",
      "District": "East Garo Hills"
    },
    {
      "City": "Wokha",
      "State": "Nagaland",
      "District": "Wokha"
    },
    {
      "City": "Yadagirigutta",
      "State": "Andhra Pradesh",
      "District": "Nalgonda"
    },
    {
      "City": "Yadgir",
      "State": "Karnataka",
      "District": "Gulbarga"
    },
    {
      "City": "Yairipok",
      "State": "Manipur",
      "District": "Thoubal"
    },
    {
      "City": "Yamunanagar",
      "State": "Haryana",
      "District": "Yamunanagar"
    },
    {
      "City": "Yanam",
      "State": "Pondicherry *",
      "District": "Yanam"
    },
    {
      "City": "Yavatmal",
      "State": "Maharashtra",
      "District": "Yavatmal"
    },
    {
      "City": "Yawal",
      "State": "Maharashtra",
      "District": "Jalgaon"
    },
    {
      "City": "Yelahanka",
      "State": "Karnataka",
      "District": "Bangalore"
    },
    {
      "City": "Yelandur",
      "State": "Karnataka",
      "District": "Chamarajanagar"
    },
    {
      "City": "Yelbarga",
      "State": "Karnataka",
      "District": "Koppal"
    },
    {
      "City": "Yellandu",
      "State": "Andhra Pradesh",
      "District": "Khammam"
    },
    {
      "City": "Yellapur",
      "State": "Karnataka",
      "District": "Uttara Kannada"
    },
    {
      "City": "Yemmiganur",
      "State": "Andhra Pradesh",
      "District": "Kurnool"
    },
    {
      "City": "Yenagudde",
      "State": "Karnataka",
      "District": "Udupi"
    },
    {
      "City": "Yerkheda",
      "State": "Maharashtra",
      "District": "Nagpur"
    },
    {
      "City": "Yerraguntla",
      "State": "Andhra Pradesh",
      "District": "Cuddapah"
    },
    {
      "City": "Yevla",
      "State": "Maharashtra",
      "District": "Nashik"
    },
    {
      "City": "Yol",
      "State": "Himachal Pradesh",
      "District": "Kangra"
    },
    {
      "City": "Zahirabad",
      "State": "Andhra Pradesh",
      "District": "Medak"
    },
    {
      "City": "Zaidpur",
      "State": "Uttar Pradesh",
      "District": "Barabanki"
    },
    {
      "City": "Zalod",
      "State": "Gujarat",
      "District": "Dohad"
    },
    {
      "City": "Zamania",
      "State": "Uttar Pradesh",
      "District": "Ghazipur"
    },
    {
      "City": "Zamin Uthukuli",
      "State": "Tamil Nadu",
      "District": "Coimbatore"
    },
    {
      "City": "Zawlnuam",
      "State": "Mizoram",
      "District": "Mamit"
    },
    {
      "City": "Ziauddin Pur",
      "State": "Delhi *",
      "District": "North East"
    },
    {
      "City": "Zira",
      "State": "Punjab",
      "District": "Firozpur"
    },
    {
      "City": "Zirakpur",
      "State": "Punjab",
      "District": "Patiala"
    },
    {
      "City": "Ziro",
      "State": "Arunachal Pradesh",
      "District": "Lower Subansiri"
    },
    {
      "City": "Zunheboto",
      "State": "Nagaland",
      "District": "Zunheboto"
    }
  ]
  constructor (public service:WeatherFetchService, private http: Http){
    // console.log(service.summary);
    // console.log("appts")
  }
  // days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  // location = 'Indira Nagar, Gachibowli, Hyderabad, Telangana';
  
  
  // status;
  // cityName = '';
  data;
  selectedIndex;
  ngOnInit(){
  var locacc = confirm('Allow location access')
 if(locacc){
  const url = `http://ip-api.com/json`;
  this.service.noload=true;
    this. http.get(url)
    .subscribe(res => {
       this.data = res.json();
       this.service.noload=true;
      console.log(this.data);
      this.selectedCityId=this.data.city;
      this.service.getCityDetails(this.data.city)
  });
 }
  
  // console.log("sungraph",this.service.sunx,this.service.suny)
}
citypass() {
  console.log("city",this.selectedCityId)
  if(this.selectedCityId!=''&&this.selectedCityId!=null)
  this.service.getCityDetails(this.selectedCityId);
 
  
}  
updategraph(dayNum){
  
  // console.log(this.dayTileInfo.dayNum)
  this.selectedIndex = dayNum;
  console.log("dayNum",dayNum)
  this.service.updateGraphDetails(dayNum);
  this.service.updateSummary(dayNum);
}
}
