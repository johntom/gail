export class ApplicationService {
  tabs = [];
  dataFormOneToOneTabs = [
    // {
    //   name: "ConsignedFrom",
    //   viewModel: "./one-to-one/consigned",
    //   isSelected: false
    // },
     
    // {
    //   name: "Purchased",
    //   viewModel: "./one-to-one/purchased",
    //   isSelected: false
    // },
    // {
    //   name: "Consignedto",
    //   viewModel: "./one-to-one/consigned",
    //   isSelected: false
    // },

    //  {
    //   name: "Keywords",
    //   viewModel: "./one-to-one/keywords",
    //   isSelected: false
    // },
    // {
    //   name: "Insurance/Vat",
    //   viewModel: "./one-to-one/insurance",
    //   isSelected: false
    // },
    // {
    //   name: "Editions",
    //   viewModel: "./one-to-one/editions",
    //   isSelected: false
    // },
  
    // {
    //   name: "Soldto",
    //   viewModel: "./one-to-one/soldto",
    //   isSelected: false
    // },
    // {
    //   name: "Editions",
    //   viewModel: "./one-to-one/editions",
    //   isSelected: false
    // }
  ];

  dataFormOneToManyTabsX = [
    {
      name: "Notes",
      viewModel: "./one-to-many/adjusternotes",
      isSelected: false
    },
    {
      name: "Exhibition",
      viewModel: "./one-to-many/exhibition",
      isSelected: false
    },
    {
      name: "Provenance",
      viewModel: "./one-to-many/provenance",
      isSelected: false
    },
    {
      name: "Reproduction",
      viewModel: "./one-to-many/reproduction",
      isSelected: false
    },
    {
      name: "Transport",
      viewModel: "./one-to-many/transport",
      isSelected: false
    },
    {
      name: "Docs",
      viewModel: "./one-to-many/docs",
      isSelected: false
    },
    {
      name: "Consignedto",
      viewModel: "./one-to-many/consignedto",
      isSelected: false
    },
    {
      name: "Conservation",
      viewModel: "./one-to-many/conservation",
      isSelected: false
    },

    {
      name: "Museumloan",
      viewModel: "./one-to-many/museumloan",
      isSelected: false
    },
    //   {"offerings"
    //   name: "terms",
    //   viewModel: "./one-to-many/terms",
    //   isSelected: false
    // },
    {
      name: "photo",
      viewModel: "./one-to-many/photo",
      isSelected: false
    },
    {
      name: "imagetrack",
      viewModel: "./one-to-many/imagetrack",
      isSelected: false
    },
    {
      name: "condition",
      viewModel: "./one-to-many/condition",
      isSelected: false
    },
    {
      name: "rtf",
      viewModel: "./one-to-many/rtf",
      isSelected: false
    },
      {
      name: "Purchased",
      viewModel: "./one-to-one/purchased",
      isSelected: false
    },
    {
      name: "Consignedto",
      viewModel: "./one-to-one/consigned",
      isSelected: false
    },
    {
      name: "Insurance/Vat",
      viewModel: "./one-to-one/insurance",
      isSelected: false
    },
    {
      name: "Editions",
      viewModel: "./one-to-one/editions",
      isSelected: false
    },
  ];

  dataFormOneToOneTabs2 = [
    {
      name: "Consignedfrom",
      viewModel: "./one-to-one/consigned",
      isSelected: false
    },
    {
      name: "Purchasedfrom",
      viewModel: "./one-to-one/purchased",
      isSelected: false
    },
    {
      name: "Soldto",
      viewModel: "./one-to-one/sold",
      isSelected: false
    },
    {
      name: "Vat",
      viewModel: "./one-to-one/vat",
      isSelected: false
    },
    {
      name: "Edition",
      viewModel: "./one-to-one/editions",
      isSelected: false
    },
    {
      name: "Insurance",
      viewModel: "./one-to-one/insurance",
      isSelected: false
    }
  ];
  dataFormOneToManyTabs2 = [
    {
      name: "Exhibition",
      viewModel: "./one-to-many/exhibition",
      isSelected: false
    },
    {
      name: "Provenance",
      viewModel: "./one-to-many/provenance",
      isSelected: false
    },
    {
      name: "Reproduction",
      viewModel: "./one-to-many/reproduction",
      isSelected: false
    },
    {
      name: "Terms",
      viewModel: "./one-to-many/terms",
      isSelected: false
    },
    {
      name: "Docs",
      viewModel: "./one-to-many/docs",
      isSelected: false
    },
    {
      name: "Consignedto",
      viewModel: "./one-to-many/consignedto",
      isSelected: false
    },
    {
      name: "Conservation",
      viewModel: "./one-to-many/conservation",
      isSelected: false
    },
    {
      name: "Edition",
      viewModel: "./one-to-many/edition",
      isSelected: false
    },
    {
      name: "Publication",
      viewModel: "./one-to-many/publication",
      isSelected: false
    },
    {
      name: "Photo",
      viewModel: "./one-to-many/photo",
      isSelected: false
    },
    {
      name: "Museumloan",
      viewModel: "./one-to-many/museumloan",
      isSelected: false
    }
  ];


  // currentRecord = null;
  currentRecord = 0;//null;
  testrec = 0;
  LookupDataLoaded = false;
  searchDataLoaded = false;
  curentInventory;
  genderList = [];
  stateList = [];
  artistList = [];
  codesList = [];


  codesInventoryLocation = []//1,
  codesInventoryType = []//2,
  codesGenre = []//3,
  codesOwnership = []//4,
  codesFormat = []//5
  codesPaymentMethod = []//6
  codesYesNoUnknown = []//7
  codesPublicationType = []//8
  codesReproductionType = []//9
  codesView = []//  1 0
  codesCountry = []//11
  codesContactType = []//13
  codesProvenanceLocation = []//14
  codesConditon = []//15
  codesMailingType = []//16
  codesListLocation = [];//17
  codesSalutation = []//18
  codesPeriod = []//19
  codesPhoneType = []//20
  codesTitle = []//21
  codesDepartment = []//22
  codesCity = []//23
  codesTermsType = []//24
  codesFraction = []//25
  codesOrganizationStatus = []//26
  codesArtist = []//27
  codesTermsInvoice = []//28
  codesExpense = []//29
  codesBin = []//30
  codesCoverType = []//31
  codesPaymentType = []//32
  codesOrderType = []//33
  codesShipType = []//34
  codesReceivedType = []//35
  codesWarehouselocation = []//36
  codesCatalogSendType = []//37
  codesPhotoFormat = []//38
  codesPhotographers = []//39
  codesSuffix = []//40,
  codesAdmin = []//41,
  //49,Knoedler- Rosales Customer=[]
  // 50,"Newtown, MA"=[]
  orgsList = []
  searchList = [];
  currentSearch;
  // important to set
  originalrec = 0;
  testrec = 0;
  currentItem = 0;
}

// export class ApplicationService {
//   tabs = [];
//   dataFormOneToOneTabs = [

//     {
//       name: "extend",
//       viewModel: "./one-to-one/extend",
//       isSelected: false
//     },
//     {
//       name: "Pdfupload",
//       viewModel: "./one-to-one/pdfupload",
//       isSelected: false
//     }
//   ];
//   dataFormOneToManyTabs = [
//     {
//       name: "Adjusters",
//       viewModel: "./one-to-many/adjusters",
//       isSelected: false
//     }, {
//       name: "Adjusternotes",
//       viewModel: "./one-to-many/adjusternotes",
//       isSelected: false
//     },
//     {
//       name: "Diary",
//       viewModel: "./one-to-many/diary",
//       isSelected: false
//     },
//     {
//       name: "Docs",
//       viewModel: "./one-to-many/docs",
//       isSelected: false
//     },
//     {
//       name: "Carrieremails",
//       viewModel: "./one-to-many/carrieremails",
//       isSelected: false
//     },
//     {
//       name: "Claimemails",
//       viewModel: "./one-to-many/claimemails",
//       isSelected: false
//     }
//   ];

//   dataFormOneToManyTabs2 = [
//     {
//       name: "Addresses",
//       viewModel: "./one-to-many/addresses",
//       isSelected: false
//     }, {
//       name: "Contacts",
//       viewModel: "./one-to-many/adjuster",
//       isSelected: false
//     }]

//   currentRecord = 0;//null;
//   testrec = 0;
//   originalrec = 0;
//   claimLookupDataLoaded = false;
//   searchDataLoaded = false;

//   curentClaim;
//   curentDaily;
//   curentAdjuster;

//   testinscorec = 0;
//   currentInsco;
//   originalinscorec = 0;

//   testinsuredrec = 0;
//   currentInsured;
//   originalinsuredrec = 0;

//   testclaimantrec = 0;
//   currentClaimant;
//   originalclaimant = 0;


//   genderList = [];
//   stateList = [];
//   adjusterList = [];
//   adjusterActiveList = [];
//   claimtypeList = [];
//   dailyList = [];

//   InsurancecompanyList = [];
//   InsurancecompanycontactList = [];

//   insuredList = [];
//   statusList = [];
//   searchList = [];

//   serviceList = [];
//   expenseList = [];
//   claimList = []
//   arprepList = []
//   adjusterprepList = []
//   arpreponeList = []
//   currentSearch // needed to close claim s
// }