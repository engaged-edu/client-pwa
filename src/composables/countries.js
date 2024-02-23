const countries = [
	{
		name: 'Afghanistan (‫افغانستان‬‎)',
		code: 'AF',
		dial: '93'
	},
	{
		name: 'Albania (Shqipëri)',
		code: 'AL',
		dial: '355'
	},
	{
		name: 'Algeria (‫الجزائر‬‎)',
		code: 'DZ',
		dial: '213'
	},
	{
		name: 'American Samoa',
		code: 'AS',
		dial: '1684'
	},
	{
		name: 'Andorra',
		code: 'AD',
		dial: '376'
	},
	{
		name: 'Angola',
		code: 'AO',
		dial: '244'
	},
	{
		name: 'Anguilla',
		code: 'AI',
		dial: '1264'
	},
	{
		name: 'Antigua and Barbuda',
		code: 'AG',
		dial: '1268'
	},
	{
		name: 'Argentina',
		code: 'AR',
		dial: '54'
	},
	{
		name: 'Armenia (Հայաստան)',
		code: 'AM',
		dial: '374'
	},
	{
		name: 'Aruba',
		code: 'AW',
		dial: '297'
	},
	{
		name: 'Australia',
		code: 'AU',
		dial: '61'
	},
	{
		name: 'Austria (Österreich)',
		code: 'AT',
		dial: '43'
	},
	{
		name: 'Azerbaijan (Azərbaycan)',
		code: 'AZ',
		dial: '994'
	},
	{
		name: 'Bahamas',
		code: 'BS',
		dial: '1242'
	},
	{
		name: 'Bahrain (‫البحرين‬‎)',
		code: 'BH',
		dial: '973'
	},
	{
		name: 'Bangladesh (বাংলাদেশ)',
		code: 'BD',
		dial: '880'
	},
	{
		name: 'Barbados',
		code: 'BB',
		dial: '1246'
	},
	{
		name: 'Belarus (Беларусь)',
		code: 'BY',
		dial: '375'
	},
	{
		name: 'Belgium (België)',
		code: 'BE',
		dial: '32'
	},
	{
		name: 'Belize',
		code: 'BZ',
		dial: '501'
	},
	{
		name: 'Benin (Bénin)',
		code: 'BJ',
		dial: '229'
	},
	{
		name: 'Bermuda',
		code: 'BM',
		dial: '1441'
	},
	{
		name: 'Bhutan (འབྲུག)',
		code: 'BT',
		dial: '975'
	},
	{
		name: 'Bolivia',
		code: 'BO',
		dial: '591'
	},
	{
		name: 'Bosnia and Herzegovina (Босна и Херцеговина)',
		code: 'BA',
		dial: '387'
	},
	{
		name: 'Botswana',
		code: 'BW',
		dial: '267'
	},
	{
		name: 'Brazil (Brasil)',
		code: 'BR',
		dial: '55'
	},
	{
		name: 'British Indian Ocean Territory',
		code: 'IO',
		dial: '246'
	},
	{
		name: 'British Virgin Islands',
		code: 'VG',
		dial: '1284'
	},
	{
		name: 'Brunei',
		code: 'BN',
		dial: '673'
	},
	{
		name: 'Bulgaria (България)',
		code: 'BG',
		dial: '359'
	},
	{
		name: 'Burkina Faso',
		code: 'BF',
		dial: '226'
	},
	{
		name: 'Burundi (Uburundi)',
		code: 'BI',
		dial: '257'
	},
	{
		name: 'Cambodia (កម្ពុជា)',
		code: 'KH',
		dial: '855'
	},
	{
		name: 'Cameroon (Cameroun)',
		code: 'CM',
		dial: '237'
	},
	{
		name: 'Canada',
		code: 'CA',
		dial: '1'
	},
	{
		name: 'Cape Verde (Kabu Verdi)',
		code: 'CV',
		dial: '238'
	},
	{
		name: 'Caribbean Netherlands',
		code: 'BQ',
		dial: '599'
	},
	{
		name: 'Cayman Islands',
		code: 'KY',
		dial: '1345'
	},
	{
		name: 'Central African Republic (République centrafricaine)',
		code: 'CF',
		dial: '236'
	},
	{
		name: 'Chad (Tchad)',
		code: 'TD',
		dial: '235'
	},
	{
		name: 'Chile',
		code: 'CL',
		dial: '56'
	},
	{
		name: 'China (中国)',
		code: 'CN',
		dial: '86'
	},
	{
		name: 'Christmas Island',
		code: 'CX',
		dial: '61'
	},
	{
		name: 'Cocos (Keeling) Islands',
		code: 'CC',
		dial: '61'
	},
	{
		name: 'Colombia',
		code: 'CO',
		dial: '57'
	},
	{
		name: 'Comoros (‫جزر القمر‬‎)',
		code: 'KM',
		dial: '269'
	},
	{
		name: 'Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)',
		code: 'CD',
		dial: '243'
	},
	{
		name: 'Congo (Republic) (Congo-Brazzaville)',
		code: 'CG',
		dial: '242'
	},
	{
		name: 'Cook Islands',
		code: 'CK',
		dial: '682'
	},
	{
		name: 'Costa Rica',
		code: 'CR',
		dial: '506'
	},
	{
		name: 'Côte d’Ivoire',
		code: 'CI',
		dial: '225'
	},
	{
		name: 'Croatia (Hrvatska)',
		code: 'HR',
		dial: '385'
	},
	{
		name: 'Cuba',
		code: 'CU',
		dial: '53'
	},
	{
		name: 'Curaçao',
		code: 'CW',
		dial: '599'
	},
	{
		name: 'Cyprus (Κύπρος)',
		code: 'CY',
		dial: '357'
	},
	{
		name: 'Czech Republic (Česká republika)',
		code: 'CZ',
		dial: '420'
	},
	{
		name: 'Denmark (Danmark)',
		code: 'DK',
		dial: '45'
	},
	{
		name: 'Djibouti',
		code: 'DJ',
		dial: '253'
	},
	{
		name: 'Dominica',
		code: 'DM',
		dial: '1767'
	},
	{
		name: 'Dominican Republic (República Dominicana)',
		code: 'DO',
		dial: '1'
	},
	{
		name: 'Ecuador',
		code: 'EC',
		dial: '593'
	},
	{
		name: 'Egypt (‫مصر‬‎)',
		code: 'EG',
		dial: '20'
	},
	{
		name: 'El Salvador',
		code: 'SV',
		dial: '503'
	},
	{
		name: 'Equatorial Guinea (Guinea Ecuatorial)',
		code: 'GQ',
		dial: '240'
	},
	{
		name: 'Eritrea',
		code: 'ER',
		dial: '291'
	},
	{
		name: 'Estonia (Eesti)',
		code: 'EE',
		dial: '372'
	},
	{
		name: 'Ethiopia',
		code: 'ET',
		dial: '251'
	},
	{
		name: 'Falkland Islands (Islas Malvinas)',
		code: 'FK',
		dial: '500'
	},
	{
		name: 'Faroe Islands (Føroyar)',
		code: 'FO',
		dial: '298'
	},
	{
		name: 'Fiji',
		code: 'FJ',
		dial: '679'
	},
	{
		name: 'Finland (Suomi)',
		code: 'FI',
		dial: '358'
	},
	{
		name: 'France',
		code: 'FR',
		dial: '33'
	},
	{
		name: 'French Guiana (Guyane française)',
		code: 'GF',
		dial: '594'
	},
	{
		name: 'French Polynesia (Polynésie française)',
		code: 'PF',
		dial: '689'
	},
	{
		name: 'Gabon',
		code: 'GA',
		dial: '241'
	},
	{
		name: 'Gambia',
		code: 'GM',
		dial: '220'
	},
	{
		name: 'Georgia (საქართველო)',
		code: 'GE',
		dial: '995'
	},
	{
		name: 'Germany (Deutschland)',
		code: 'DE',
		dial: '49'
	},
	{
		name: 'Ghana (Gaana)',
		code: 'GH',
		dial: '233'
	},
	{
		name: 'Gibraltar',
		code: 'GI',
		dial: '350'
	},
	{
		name: 'Greece (Ελλάδα)',
		code: 'GR',
		dial: '30'
	},
	{
		name: 'Greenland (Kalaallit Nunaat)',
		code: 'GL',
		dial: '299'
	},
	{
		name: 'Grenada',
		code: 'GD',
		dial: '1473'
	},
	{
		name: 'Guadeloupe',
		code: 'GP',
		dial: '590'
	},
	{
		name: 'Guam',
		code: 'GU',
		dial: '1671'
	},
	{
		name: 'Guatemala',
		code: 'GT',
		dial: '502'
	},
	{
		name: 'Guernsey',
		code: 'GG',
		dial: '44'
	},
	{
		name: 'Guinea (Guinée)',
		code: 'GN',
		dial: '224'
	},
	{
		name: 'Guinea-Bissau (Guiné Bissau)',
		code: 'GW',
		dial: '245'
	},
	{
		name: 'Guyana',
		code: 'GY',
		dial: '592'
	},
	{
		name: 'Haiti',
		code: 'HT',
		dial: '509'
	},
	{
		name: 'Honduras',
		code: 'HN',
		dial: '504'
	},
	{
		name: 'Hong Kong (香港)',
		code: 'HK',
		dial: '852'
	},
	{
		name: 'Hungary (Magyarország)',
		code: 'HU',
		dial: '36'
	},
	{
		name: 'Iceland (Ísland)',
		code: 'IS',
		dial: '354'
	},
	{
		name: 'India (भारत)',
		code: 'IN',
		dial: '91'
	},
	{
		name: 'Indonesia',
		code: 'ID',
		dial: '62'
	},
	{
		name: 'Iran (‫ایران‬‎)',
		code: 'IR',
		dial: '98'
	},
	{
		name: 'Iraq (‫العراق‬‎)',
		code: 'IQ',
		dial: '964'
	},
	{
		name: 'Ireland',
		code: 'IE',
		dial: '353'
	},
	{
		name: 'Isle of Man',
		code: 'IM',
		dial: '44'
	},
	{
		name: 'Israel (‫ישראל‬‎)',
		code: 'IL',
		dial: '972'
	},
	{
		name: 'Italy (Italia)',
		code: 'IT',
		dial: '39'
	},
	{
		name: 'Jamaica',
		code: 'JM',
		dial: '1876'
	},
	{
		name: 'Japan (日本)',
		code: 'JP',
		dial: '81'
	},
	{
		name: 'Jersey',
		code: 'JE',
		dial: '44'
	},
	{
		name: 'Jordan (‫الأردن‬‎)',
		code: 'JO',
		dial: '962'
	},
	{
		name: 'Kazakhstan (Казахстан)',
		code: 'KZ',
		dial: '7'
	},
	{
		name: 'Kenya',
		code: 'KE',
		dial: '254'
	},
	{
		name: 'Kiribati',
		code: 'KI',
		dial: '686'
	},
	{
		name: 'Kosovo',
		code: 'XK',
		dial: '383'
	},
	{
		name: 'Kuwait (‫الكويت‬‎)',
		code: 'KW',
		dial: '965'
	},
	{
		name: 'Kyrgyzstan (Кыргызстан)',
		code: 'KG',
		dial: '996'
	},
	{
		name: 'Laos (ລາວ)',
		code: 'LA',
		dial: '856'
	},
	{
		name: 'Latvia (Latvija)',
		code: 'LV',
		dial: '371'
	},
	{
		name: 'Lebanon (‫لبنان‬‎)',
		code: 'LB',
		dial: '961'
	},
	{
		name: 'Lesotho',
		code: 'LS',
		dial: '266'
	},
	{
		name: 'Liberia',
		code: 'LR',
		dial: '231'
	},
	{
		name: 'Libya (‫ليبيا‬‎)',
		code: 'LY',
		dial: '218'
	},
	{
		name: 'Liechtenstein',
		code: 'LI',
		dial: '423'
	},
	{
		name: 'Lithuania (Lietuva)',
		code: 'LT',
		dial: '370'
	},
	{
		name: 'Luxembourg',
		code: 'LU',
		dial: '352'
	},
	{
		name: 'Macau (澳門)',
		code: 'MO',
		dial: '853'
	},
	{
		name: 'Macedonia (FYROM) (Македонија)',
		code: 'MK',
		dial: '389'
	},
	{
		name: 'Madagascar (Madagasikara)',
		code: 'MG',
		dial: '261'
	},
	{
		name: 'Malawi',
		code: 'MW',
		dial: '265'
	},
	{
		name: 'Malaysia',
		code: 'MY',
		dial: '60'
	},
	{
		name: 'Maldives',
		code: 'MV',
		dial: '960'
	},
	{
		name: 'Mali',
		code: 'ML',
		dial: '223'
	},
	{
		name: 'Malta',
		code: 'MT',
		dial: '356'
	},
	{
		name: 'Marshall Islands',
		code: 'MH',
		dial: '692'
	},
	{
		name: 'Martinique',
		code: 'MQ',
		dial: '596'
	},
	{
		name: 'Mauritania (‫موريتانيا‬‎)',
		code: 'MR',
		dial: '222'
	},
	{
		name: 'Mauritius (Moris)',
		code: 'MU',
		dial: '230'
	},
	{
		name: 'Mayotte',
		code: 'YT',
		dial: '262'
	},
	{
		name: 'Mexico (México)',
		code: 'MX',
		dial: '52'
	},
	{
		name: 'Micronesia',
		code: 'FM',
		dial: '691'
	},
	{
		name: 'Moldova (Republica Moldova)',
		code: 'MD',
		dial: '373'
	},
	{
		name: 'Monaco',
		code: 'MC',
		dial: '377'
	},
	{
		name: 'Mongolia (Монгол)',
		code: 'MN',
		dial: '976'
	},
	{
		name: 'Montenegro (Crna Gora)',
		code: 'ME',
		dial: '382'
	},
	{
		name: 'Montserrat',
		code: 'MS',
		dial: '1664'
	},
	{
		name: 'Morocco (‫المغرب‬‎)',
		code: 'MA',
		dial: '212'
	},
	{
		name: 'Mozambique (Moçambique)',
		code: 'MZ',
		dial: '258'
	},
	{
		name: 'Myanmar (Burma) (မြန်မာ)',
		code: 'MM',
		dial: '95'
	},
	{
		name: 'Namibia (Namibië)',
		code: 'NA',
		dial: '264'
	},
	{
		name: 'Nauru',
		code: 'NR',
		dial: '674'
	},
	{
		name: 'Nepal (नेपाल)',
		code: 'NP',
		dial: '977'
	},
	{
		name: 'Netherlands (Nederland)',
		code: 'NL',
		dial: '31'
	},
	{
		name: 'New Caledonia (Nouvelle-Calédonie)',
		code: 'NC',
		dial: '687'
	},
	{
		name: 'New Zealand',
		code: 'NZ',
		dial: '64'
	},
	{
		name: 'Nicaragua',
		code: 'NI',
		dial: '505'
	},
	{
		name: 'Niger (Nijar)',
		code: 'NE',
		dial: '227'
	},
	{
		name: 'Nigeria',
		code: 'NG',
		dial: '234'
	},
	{
		name: 'Niue',
		code: 'NU',
		dial: '683'
	},
	{
		name: 'Norfolk Island',
		code: 'NF',
		dial: '672'
	},
	{
		name: 'North Korea (조선 민주주의 인민 공화국)',
		code: 'KP',
		dial: '850'
	},
	{
		name: 'Northern Mariana Islands',
		code: 'MP',
		dial: '1670'
	},
	{
		name: 'Norway (Norge)',
		code: 'NO',
		dial: '47'
	},
	{
		name: 'Oman (‫عُمان‬‎)',
		code: 'OM',
		dial: '968'
	},
	{
		name: 'Pakistan (‫پاکستان‬‎)',
		code: 'PK',
		dial: '92'
	},
	{
		name: 'Palau',
		code: 'PW',
		dial: '680'
	},
	{
		name: 'Palestine (‫فلسطين‬‎)',
		code: 'PS',
		dial: '970'
	},
	{
		name: 'Panama (Panamá)',
		code: 'PA',
		dial: '507'
	},
	{
		name: 'Papua New Guinea',
		code: 'PG',
		dial: '675'
	},
	{
		name: 'Paraguay',
		code: 'PY',
		dial: '595'
	},
	{
		name: 'Peru (Perú)',
		code: 'PE',
		dial: '51'
	},
	{
		name: 'Philippines',
		code: 'PH',
		dial: '63'
	},
	{
		name: 'Poland (Polska)',
		code: 'PL',
		dial: '48'
	},
	{
		name: 'Portugal',
		code: 'PT',
		dial: '351'
	},
	{
		name: 'Puerto Rico',
		code: 'PR',
		dial: '1'
	},
	{
		name: 'Qatar (‫قطر‬‎)',
		code: 'QA',
		dial: '974'
	},
	{
		name: 'Réunion (La Réunion)',
		code: 'RE',
		dial: '262'
	},
	{
		name: 'Romania (România)',
		code: 'RO',
		dial: '40'
	},
	{
		name: 'Russia (Россия)',
		code: 'RU',
		dial: '7'
	},
	{
		name: 'Rwanda',
		code: 'RW',
		dial: '250'
	},
	{
		name: 'Saint Barthélemy',
		code: 'BL',
		dial: '590'
	},
	{
		name: 'Saint Helena',
		code: 'SH',
		dial: '290'
	},
	{
		name: 'Saint Kitts and Nevis',
		code: 'KN',
		dial: '1869'
	},
	{
		name: 'Saint Lucia',
		code: 'LC',
		dial: '1758'
	},
	{
		name: 'Saint Martin (Saint-Martin (partie française))',
		code: 'MF',
		dial: '590'
	},
	{
		name: 'Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)',
		code: 'PM',
		dial: '508'
	},
	{
		name: 'Saint Vincent and the Grenadines',
		code: 'VC',
		dial: '1784'
	},
	{
		name: 'Samoa',
		code: 'WS',
		dial: '685'
	},
	{
		name: 'San Marino',
		code: 'SM',
		dial: '378'
	},
	{
		name: 'São Tomé and Príncipe (São Tomé e Príncipe)',
		code: 'ST',
		dial: '239'
	},
	{
		name: 'Saudi Arabia (‫المملكة العربية السعودية‬‎)',
		code: 'SA',
		dial: '966'
	},
	{
		name: 'Senegal (Sénégal)',
		code: 'SN',
		dial: '221'
	},
	{
		name: 'Serbia (Србија)',
		code: 'RS',
		dial: '381'
	},
	{
		name: 'Seychelles',
		code: 'SC',
		dial: '248'
	},
	{
		name: 'Sierra Leone',
		code: 'SL',
		dial: '232'
	},
	{
		name: 'Singapore',
		code: 'SG',
		dial: '65'
	},
	{
		name: 'Sint Maarten',
		code: 'SX',
		dial: '1721'
	},
	{
		name: 'Slovakia (Slovensko)',
		code: 'SK',
		dial: '421'
	},
	{
		name: 'Slovenia (Slovenija)',
		code: 'SI',
		dial: '386'
	},
	{
		name: 'Solomon Islands',
		code: 'SB',
		dial: '677'
	},
	{
		name: 'Somalia (Soomaaliya)',
		code: 'SO',
		dial: '252'
	},
	{
		name: 'South Africa',
		code: 'ZA',
		dial: '27'
	},
	{
		name: 'South Korea (대한민국)',
		code: 'KR',
		dial: '82'
	},
	{
		name: 'South Sudan (‫جنوب السودان‬‎)',
		code: 'SS',
		dial: '211'
	},
	{
		name: 'Spain (España)',
		code: 'ES',
		dial: '34'
	},
	{
		name: 'Sri Lanka (ශ්‍රී ලංකාව)',
		code: 'LK',
		dial: '94'
	},
	{
		name: 'Sudan (‫السودان‬‎)',
		code: 'SD',
		dial: '249'
	},
	{
		name: 'Suriname',
		code: 'SR',
		dial: '597'
	},
	{
		name: 'Svalbard and Jan Mayen',
		code: 'SJ',
		dial: '47'
	},
	{
		name: 'Swaziland',
		code: 'SZ',
		dial: '268'
	},
	{
		name: 'Sweden (Sverige)',
		code: 'SE',
		dial: '46'
	},
	{
		name: 'Switzerland (Schweiz)',
		code: 'CH',
		dial: '41'
	},
	{
		name: 'Syria (‫سوريا‬‎)',
		code: 'SY',
		dial: '963'
	},
	{
		name: 'Taiwan (台灣)',
		code: 'TW',
		dial: '886'
	},
	{
		name: 'Tajikistan',
		code: 'TJ',
		dial: '992'
	},
	{
		name: 'Tanzania',
		code: 'TZ',
		dial: '255'
	},
	{
		name: 'Thailand (ไทย)',
		code: 'TH',
		dial: '66'
	},
	{
		name: 'Timor-Leste',
		code: 'TL',
		dial: '670'
	},
	{
		name: 'Togo',
		code: 'TG',
		dial: '228'
	},
	{
		name: 'Tokelau',
		code: 'TK',
		dial: '690'
	},
	{
		name: 'Tonga',
		code: 'TO',
		dial: '676'
	},
	{
		name: 'Trinidad and Tobago',
		code: 'TT',
		dial: '1868'
	},
	{
		name: 'Tunisia (‫تونس‬‎)',
		code: 'TN',
		dial: '216'
	},
	{
		name: 'Turkey (Türkiye)',
		code: 'TR',
		dial: '90'
	},
	{
		name: 'Turkmenistan',
		code: 'TM',
		dial: '993'
	},
	{
		name: 'Turks and Caicos Islands',
		code: 'TC',
		dial: '1649'
	},
	{
		name: 'Tuvalu',
		code: 'TV',
		dial: '688'
	},
	{
		name: 'U.S. Virgin Islands',
		code: 'VI',
		dial: '1340'
	},
	{
		name: 'Uganda',
		code: 'UG',
		dial: '256'
	},
	{
		name: 'Ukraine (Україна)',
		code: 'UA',
		dial: '380'
	},
	{
		name: 'United Arab Emirates (‫الإمارات العربية المتحدة‬‎)',
		code: 'AE',
		dial: '971'
	},
	{
		name: 'United Kingdom',
		code: 'GB',
		dial: '44'
	},
	{
		name: 'United States',
		code: 'US',
		dial: '1'
	},
	{
		name: 'Uruguay',
		code: 'UY',
		dial: '598'
	},
	{
		name: 'Uzbekistan (Oʻzbekiston)',
		code: 'UZ',
		dial: '998'
	},
	{
		name: 'Vanuatu',
		code: 'VU',
		dial: '678'
	},
	{
		name: 'Vatican City (Città del Vaticano)',
		code: 'VA',
		dial: '39'
	},
	{
		name: 'Venezuela',
		code: 'VE',
		dial: '58'
	},
	{
		name: 'Vietnam (Việt Nam)',
		code: 'VN',
		dial: '84'
	},
	{
		name: 'Wallis and Futuna (Wallis-et-Futuna)',
		code: 'WF',
		dial: '681'
	},
	{
		name: 'Western Sahara (‫الصحراء الغربية‬‎)',
		code: 'EH',
		dial: '212'
	},
	{
		name: 'Yemen (‫اليمن‬‎)',
		code: 'YE',
		dial: '967'
	},
	{
		name: 'Zambia',
		code: 'ZM',
		dial: '260'
	},
	{
		name: 'Zimbabwe',
		code: 'ZW',
		dial: '263'
	},
	{
		name: 'Åland Islands',
		code: 'AX',
		dial: '358'
	}
];

export function useCountries() {
	return { countries };
}
