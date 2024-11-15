import { Form, Formik, useFormik } from "formik";

import { useState } from "react";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Axios } from "../utils/fetchApi";

const InvoicesForm = () => {
  const [type, setType] = useState(0);
  // const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log("🚀 ~ Form3 ~ state:", state);

  let validationSchema = Yup.object().shape({});

  const initialValues = {
    profileID: "reporting:1.0",
    id: "SME00023",
    uuid: "8d487816-70b8-4ade-a618-9d620b73814a",
    issueDate: "2022-09-07",
    issueTime: "12:21:28",
    invoiceTypeCode: {
      name: "0100000",
      value: "388",
    },
    documentCurrencyCode: "SAR",
    taxCurrencyCode: "SAR",

    accountingSupplierParty: {
      partyIdentification: {
        id: "1010010000",
        schemeID: "CRN",
      },
      postalAddress: {
        streetName: "الامير سلطان",
        buildingNumber: "2322",
        plotIdentification: "2223",
        citySubdivisionName: "الرياض",
        cityName: "الرياض | Riyadh",
        postalZone: "23333",
        country: {
          identificationCode: "SA",
        },
      },
      partyTaxScheme: {
        companyID: "399999999900003",
        taxScheme: {
          id: "VAT",
        },
      },
      partyLegalEntity: {
        registrationName:
          "شركة توريد التكنولوجيا بأقصى سرعة المحدودة | Maximum Speed Tech Supply LTD",
      },
    },
    accountingCustomerParty: {
      partyIdentification: {
        id: "311111111111113",
        schemeID: "NAT",
      },
      postalAddress: {
        streetName: "الرياض",
        buildingNumber: "1111",
        plotIdentification: "2223",
        citySubdivisionName: "الرياض",
        cityName: "الدمام | Dammam",
        postalZone: "12222",
        country: {
          identificationCode: "SA",
        },
      },
      partyTaxScheme: {
        companyID: "399999999800003",
        taxScheme: {
          id: "VAT",
        },
      },
      partyLegalEntity: {
        registrationName: "شركة نماذج فاتورة المحدودة | Fatoora Samples LTD",
      },
    },
    delivery: {
      actualDeliveryDate: "2022-09-07",
    },
    paymentMeans: {
      paymentMeansCode: "10",
    },
    allowanceCharge: {
      chargeIndicator: "false",
      allowanceChargeReason: "discount",
      amount: "0.00",
      currencyID: "SAR",
      taxCategory: {
        id: "S",
        percent: "15",
        taxScheme: {
          id: "VAT",
        },
      },
    },
    taxTotal: {
      taxAmount: "0.6",
      currencyID: "SAR",
      taxSubtotal: {
        taxableAmount: "4.00",
        taxAmount: "0.60",
        taxCategory: {
          id: "S",
          percent: "15.00",
          taxScheme: {
            id: "VAT",
          },
        },
      },
    },
    legalMonetaryTotal: {
      lineExtensionAmount: "4.00",
      taxExclusiveAmount: "4.00",
      taxInclusiveAmount: "4.60",
      allowanceTotalAmount: "0.00",
      prepaidAmount: "0.00",
      payableAmount: "4.60",
    },
    invoiceLine: [
      {
        id: "1",
        invoicedQuantity: {
          unitCode: "PCE",
          value: "2.000000",
        },
        lineExtensionAmount: "4.00",
        taxTotal: {
          taxAmount: "0.60",
          roundingAmount: "4.60",
        },
        item: {
          name: "قلم رصاص",
          classifiedTaxCategory: {
            id: "S",
            percent: "15.00",
            taxScheme: {
              id: "VAT",
            },
          },
        },
        price: {
          priceAmount: "2.00",
          allowanceCharge: {
            chargeIndicator: "true",
            allowanceChargeReason: "discount",
            amount: "0.00",
            currencyID: "SAR",
          },
        },
      },
    ],
    user_name: state.user_name,
    password: state.password,
    common_name: localStorage.getItem("common_name"),
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      Axios.post("/reportInvoice", values).then(({ data }) => {
        console.log("🚀 ~ .then ~ data:", data);
        navigate("/invoices", { state: data });
      });
    },
  });

  const invoices = [
    { key: "profileID", name: "profileID" },
    { key: "id", name: "id" },
    { key: "uuid", name: "uuid" },
    { key: "issueDate", name: "issueDate" },
    { key: "issueTime", name: "issueTime" },
    { key: "invoiceTypeCode[name]", name: "invoiceTypeCode Name" },
    { key: "invoiceTypeCode[value]", name: "invoice TypeC ode Value" },
    { key: "documentCurrencyCode", name: "document Currency Code" },
    { key: "taxCurrencyCode", name: "tax Currency Code" },

    {
      key: "accountingSupplierParty[partyIdentification][id]",
      name: "partyIdentification id",
    },
    {
      key: "accountingSupplierParty[partyIdentification][schemeID]",
      name: "partyIdentification schemeID",
    },
    {
      key: "accountingSupplierParty[postalAddress][streetName]",
      name: "postalAddress streetName",
    },
    {
      key: "accountingSupplierParty[postalAddress][buildingNumber]",
      name: "postalAddress buildingNumber",
    },
    {
      key: "accountingSupplierParty[postalAddress][plotIdentification]",
      name: "postalAddress plotIdentification",
    },
    {
      key: "accountingSupplierParty[postalAddress][citySubdivisionName]",
      name: "postalAddress citySubdivisionName",
    },
    {
      key: "accountingSupplierParty[postalAddress][cityName]",
      name: "postalAddress cityName",
    },
    {
      key: "accountingSupplierParty[postalAddress][postalZone]",
      name: "postalAddress postalZone",
    },
    {
      key: "accountingSupplierParty[postalAddress][country][identificationCode]",
      name: "country identificationCode",
    },
    {
      key: "accountingSupplierParty[partyTaxScheme][companyID]",
      name: "partyTaxScheme companyID",
    },
    {
      key: "accountingSupplierParty[partyTaxScheme][taxScheme][id]",
      name: "taxScheme id",
    },
    {
      key: "accountingSupplierParty[partyLegalEntity][registrationName]",
      name: "partyLegalEntity registrationName",
    },
    {
      key: "accountingCustomerParty[partyIdentification][id]",
      name: "partyIdentification id",
    },
    {
      key: "accountingCustomerParty[partyIdentification][schemeID]",
      name: "partyIdentification schemeID",
    },
    {
      key: "accountingCustomerParty[postalAddress][streetName]",
      name: "postalAddress streetName",
    },
    {
      key: "accountingCustomerParty[postalAddress][buildingNumber]",
      name: "postalAddress buildingNumber",
    },
    {
      key: "accountingCustomerParty[postalAddress][plotIdentification]",
      name: "postalAddress plotIdentification",
    },
    {
      key: "accountingCustomerParty[postalAddress][citySubdivisionName]",
      name: "postalAddress citySubdivisionName",
    },
    {
      key: "accountingCustomerParty[postalAddress][cityName]",
      name: "postalAddress cityName",
    },
    {
      key: "accountingCustomerParty[postalAddress][postalZone]",
      name: "postalAddress postalZone",
    },
    {
      key: "accountingCustomerParty[postalAddress][country][identificationCode]",
      name: "country identificationCode",
    },
    {
      key: "accountingCustomerParty[partyTaxScheme][companyID]",
      name: "partyTaxScheme companyID",
    },
    {
      key: "accountingCustomerParty[partyTaxScheme][taxScheme][id]",
      name: "taxScheme id",
    },
    {
      key: "accountingCustomerParty[partyLegalEntity][registrationName]",
      name: "",
    },
    { key: "delivery[actualDeliveryDate]", name: "actualDeliveryDate" },
    { key: "paymentMeans[paymentMeansCode]", name: "paymentMeansCode" },
    { key: "allowanceCharge[chargeIndicator]", name: "chargeIndicator" },
    {
      key: "allowanceCharge[allowanceChargeReason]",
      name: "allowanceChargeReason",
    },
    { key: "allowanceCharge[amount]", name: "amount" },
    { key: "allowanceCharge[currencyID]", name: "currencyID" },
    { key: "allowanceCharge[taxCategory][id]", name: "taxCategory id" },
    {
      key: "allowanceCharge[taxCategory][percent]",
      name: "taxCategory percent",
    },
    {
      key: "allowanceCharge[taxCategory][taxScheme][id]",
      name: "taxScheme id",
    },
    { key: "taxTotal[taxAmount]", name: "taxAmount" },
    { key: "taxTotal[currencyID]", name: "currencyID" },
    {
      key: "taxTotal[taxSubtotal][taxableAmount]",
      name: "taxSubtotal taxableAmount",
    },
    { key: "taxTotal[taxSubtotal][taxAmount]", name: "taxSubtotal taxAmount" },
    { key: "taxTotal[taxSubtotal][taxCategory][id]", name: "taxCategory id" },
    {
      key: "taxTotal[taxSubtotal][taxCategory][percent]",
      name: "taxCategory percent",
    },
    {
      key: "taxTotal[taxSubtotal][taxCategory][taxScheme][id]",
      name: "taxScheme id",
    },
    { key: "legalMonetaryTotal[lineExtensionAmount]", name: "" },
    { key: "legalMonetaryTotal[taxExclusiveAmount]", name: "" },
    { key: "legalMonetaryTotal[taxInclusiveAmount]", name: "" },
    { key: "legalMonetaryTotal[allowanceTotalAmount]", name: "" },
    { key: "legalMonetaryTotal[prepaidAmount]", name: "" },
    { key: "legalMonetaryTotal[payableAmount]", name: "" },
    { key: "invoiceLine[0][id]", name: "" },
    { key: "invoiceLine[0][invoicedQuantity][unitCode]", name: "" },
    { key: "invoiceLine[0][invoicedQuantity][value]", name: "" },
    { key: "invoiceLine[0][lineExtensionAmount]", name: "" },
    { key: "invoiceLine[0][taxTotal][taxAmount]", name: "" },
    { key: "invoiceLine[0][taxTotal][roundingAmount]", name: "" },
    { key: "invoiceLine[0][item][name]", name: "" },
    { key: "invoiceLine[0][item][classifiedTaxCategory][id]", name: "" },
    { key: "invoiceLine[0][item][classifiedTaxCategory][percent]", name: "" },
    {
      key: "invoiceLine[0][item][classifiedTaxCategory][taxScheme][id]",
      name: "",
    },
    { key: "invoiceLine[0][price][priceAmount]", name: "" },
    {
      key: "invoiceLine[0][price][allowanceCharge][chargeIndicator]",
      name: "",
    },
    {
      key: "invoiceLine[0][price][allowanceCharge][allowanceChargeReason]",
      name: "",
    },
    { key: "invoiceLine[0][price][allowanceCharge][amount]", name: "" },
    { key: "invoiceLine[0][price][allowanceCharge][currencyID]", name: "" },
    { key: "user_name", name: "" },
    { key: "password", name: "" },
    { key: "common_name", name: "" },
  ];

  // error("ddddd");

  //   const handleSubmit = () => {
  //     Post.mutate("/user/register", {});
  //   };

  return (
    <div>
      {/* <!--==============================
  Donation Details 02  
  ==============================--> */}
      <div className="donation-details-area space-top space-extra-bottom overflow-hidden pt-0">
        <div className="container">
          <div className="row gx-40 justify-content-center ">
            <div className="col-lg-12 col-xl-12">
              <div className="donation-page-single">
                <div className="project-page-single">
                  <div className="page-content justify-content-center">
                    <div className="donation-form">
                      <div className="row">
                        <div className="col-12">
                          <h2>Invoices</h2>
                          <form
                            className="needs-validation"
                            onSubmit={formik.handleSubmit}
                          >
                            <div className="row mt-4">
                              {invoices.map((invoice, id) => {
                                return (
                                  <div className="col-lg-4" key={id}>
                                    <div className="form-group">
                                      <label>{invoice.key} *</label>
                                      <input
                                        type="text"
                                        className={`form-control style-border ${
                                          formik.touched[invoice.key] &&
                                          formik.errors[invoice.key] &&
                                          "is-invalid"
                                        }`}
                                        name={invoice.key}
                                        id="email1"
                                        placeholder="request_id"
                                        {...formik.getFieldProps(invoice.key)}
                                      />
                                      <div className="invalid-feedback">
                                        {formik.touched[invoice.key] &&
                                          formik.errors[invoice.key]}
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>

                            <div className="btn-wrap justify-content-start mt-20">
                              <button type="submit" className="btn style4">
                                next
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicesForm;
