import * as yup from "yup";

const searchSchema = yup.object({
    search: yup.string().test('len', 'Search for anything use use product name or number', val => {if(val) return val.toString().length === 20}),
});

const loginSchema = yup.object({
    phone: yup.number().required("Phone Number is required").test('len', 'Phone Number should be valid begining with country code e.g (234)', val => {if(val) return val.toString().length === 13}),
    password: yup.number().required("Pin is required")

});

const changePinSchema = yup.object({
    current_password: yup.number().required("Current Pin is required").test('len', 'Pin should be exactly 4 digits and must be your current password', val => {if(val) return val.toString().length === 4}),
    new_password: yup.number().required("Pin is required").test('len', 'Pin should be exactly 4 digits', val => {if(val) return val.toString().length === 4}),
    retype_password: yup.number().required("Pin is required").oneOf([yup.ref('new_password'), null], 'Pins must match'),
});

const registerSchema = yup.object({
    phone: yup.number().required("Phone Number is required").test('len', 'Phone Number should be valid begining with country code e.g (234)', val => {if(val) return val.toString().length === 13}),
    business_name: yup.string().required("Business Name is required").test('len', 'Business name should be detailed not Abbreviation', val => {if(val) return val.toString().length >= 13}),
    password: yup.number().required("Pin is required"),
    retype_password: yup.number().required("Pin is required").oneOf([yup.ref('password'), null], 'Pins must match'),
     // firstname: yup.string().required("First Name is required").trim(),
    // surname: yup.string().required("Surname is required"),
    // email: yup.string().required("Email is required").email(),
    

});

const profileSchema = yup.object({
   username: yup.string().required("username is required"),
   phone: yup.number().required("Phone Number is required").test('len', 'Phone Number should be valid begining with country code e.g (234)', val => {if(val) return val.toString().length === 13}),
   business_name: yup.string().required("Business name is required").trim().min(10, "Business name should be without abbreviation"),
   business_address: yup.string().required("Business Address is required").trim().min(10, "Business Address should be detailed"),
});

const addBusinessSchema = yup.object({
    business_name: yup.string().required("business name is required"),
    business_rc: yup.string().required("Business Registration number is required").trim().min(6, "Business RC should be valid"),
    business_address: yup.string().required("Business address is required").trim().min(10, "Business address should be detailed"),
    start_date: yup.string().required("Business start date is required")
 });

const addStoreSchema = yup.object({
    name:yup.string().required("Store name is required"),
    address: yup.string().required("Store Address is required").trim().min(10, "Store Address must be at least 10 characters"),
    state_id: yup.string().required("State is required"),
    lga_id: yup.string().required("LGA is required"),
    images: yup.array().required("License Image is required").min(1, "License Image is required"),
    images2: yup.array().min(1, "Store Image is required").required("Store Image is required")
});

const addStoreSchema2 = yup.object({
    store_name:yup.string().required("Store name is required"),
    address: yup.string().required("Store Address is required").trim().min(10, "Store Address must be at least 10 characters"),
    state_id: yup.string().required("State is required"),
    lga_id: yup.string().required("LGA is required")
});

const addStoreSchemaImg = yup.object({
    images: yup.array(),
    images2: yup.array()
});

const productSchema = yup.object({
    description: yup.string().required("Field is required").trim().min(8, "Minimum of eight (8) characters"),
});


export {searchSchema,addBusinessSchema, loginSchema, changePinSchema, registerSchema, profileSchema, addStoreSchema, addStoreSchema2, addStoreSchemaImg, productSchema}