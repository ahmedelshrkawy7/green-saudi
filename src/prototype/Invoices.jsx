import React from "react";
import { useLocation } from "react-router-dom";

const Invoices = () => {
  const {
    state: { data },
  } = useLocation();

  console.log("🚀 ~ data:", data);
  const { accountingCustomerParty, accountingSupplierParty, invoiceLine } =
    data;
  console.log("🚀 ~ Invoices ~ invoiceLine:", invoiceLine);
  console.log(
    "🚀 ~ Invoices ~ accountingSupplierParty:",
    accountingSupplierParty
  );
  console.log(
    "🚀 ~ Invoices ~ accountingCustomerParty:",
    accountingCustomerParty
  );

  const seller = {
    name: accountingSupplierParty.partyLegalEntity.registrationName,
    building: accountingSupplierParty.postalAddress.buildingNumber,
    streetName: accountingSupplierParty.postalAddress.streetName,
    city: accountingSupplierParty.postalAddress.cityName,
    country: accountingSupplierParty.postalAddress.country.identificationCode,
    Zip: accountingSupplierParty.postalAddress.postalZone,
  };
  const buyer = {
    name: accountingSupplierParty.partyLegalEntity.registrationName,
    building: accountingSupplierParty.postalAddress.buildingNumber,
    streetName: accountingSupplierParty.postalAddress.streetName,
    city: accountingSupplierParty.postalAddress.cityName,
    country: accountingSupplierParty.postalAddress.country.identificationCode,
    Zip: accountingSupplierParty.postalAddress.postalZone,
  };
  return (
    <div className="container invoices my-5">
      <div className="invoice-header text-center">
        <div className="row">
          <div className="col-6 text-left">
            <h3>{accountingSupplierParty.partyLegalEntity.registrationName}</h3>
            <p>
              {/* B-33, 4th Floor, Sandhiyav Building, Nr. M.J. Library, */}
              {accountingSupplierParty.postalAddress.streetName}

              {accountingSupplierParty.postalAddress.buildingNumber}

              <br />
              {accountingSupplierParty.postalAddress.cityName}
            </p>
          </div>
          <div className="col-6 text-right mb-3">
            <img src={data.qr} alt="Company Logo" height="50" />
          </div>
        </div>
      </div>
      <div className="invoice-section">
        <div className="row">
          <div className="col-6">
            <h5 className="p-2">Seller / البائع</h5>

            {Object.keys(seller).map((d, id) => {
              return (
                <div
                  className="row justify-content-start "
                  style={{ height: "30px" }}
                  key={id}
                >
                  <p className="col-3 "> {d} </p>
                  <p className="col-9 text-nowrap">{seller[d]}</p>
                </div>
              );
            })}
            {/* <p>
              Building No / رقم المبنى: 16-18
              <br />
              Street Name / اسم الشارع: -<br />
              City / مدينة: الرفاع الشرقي
              <br />
              Country / بلد: البحرين
              <br />
              Zip Code / الرمز البريدي: 1211
              <br />
              Phone / الهاتف: +1-571-358-1866 56564
              <br />
              Email / بريد الكتروني: jabel509@gmail.com
            </p> */}
          </div>
          <div className="col-6">
            <h5 className="p-2">Buyer / المشتري</h5>

            {Object.keys(buyer).map((d, id) => {
              return (
                <div
                  className="row justify-content-start "
                  style={{ height: "30px" }}
                  key={id}
                >
                  <p className="col-3 "> {d} </p>
                  <p className="col-9 text-nowrap">{seller[d]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="invoice-section">
        <div className="row">
          <div className="col-6">
            <p>
              Invoice Number: INV/2022/00004
              <br />
              Payment Terms: 45 Days
            </p>
          </div>
          <div className="col-6 text-right">
            <p>
              Invoice Date: 2022-02-25
              <br />
              Invoice Due Date: 2022-04-11
            </p>
          </div>
        </div>
      </div>
      <div className="invoice-section">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Seq</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Discount</th>
              <th>rounding Amount</th>
              <th>Tax amount</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {invoiceLine.map((tr, id) => {
              console.log("🚀 ~ {invoiceLine.map ~ tr:", tr);
              return (
                <tr key={id}>
                  <td>{tr.id}</td>
                  <td>{tr.item.name}</td>
                  <td>{tr.lineExtensionAmount}</td>
                  <td>{tr.price.priceAmount}</td>
                  <td>{tr.price.allowanceCharge.amount}</td>
                  <td>{tr.taxTotal.roundingAmount}</td>
                  <td>
                    {tr.taxTotal.taxAmount}{" "}
                    {tr.price.allowanceCharge.currencyID}
                  </td>
                  <td>{tr.price.priceAmount}</td>
                </tr>
              );
            })}
            {/* <tr>
              <td>2</td>
              <td>Product - B</td>
              <td>1.00</td>
              <td>$50.00</td>
              <td>5.00</td>
              <td>5%</td>
              <td>$2.45</td>
              <td>$54.45</td>
            </tr> */}
          </tbody>
        </table>
      </div>
      <div className="invoice-section text-right">
        {Object.keys(data.legalMonetaryTotal).map((el, id) => {
          return (
            <p key={id} style={{ height: "15px" }}>
              {el} : {data.legalMonetaryTotal[el]}
            </p>
          );
        })}
        {/* <p>
          Exclude Discount: $150.00
          <br />
          Discount: $25.00
          <br />
          Untaxed Amount: $147.50
          <br />
          Total Taxable Amount: $147.50
          <br />
          Total Amount: $167.15
          <br />
          Amount Due: $167.15
        </p> */}
        <p className="invoice-summary">
          Invoiced Amount: One Hundred And Sixty-Seven Point One Five
        </p>
      </div>
      <div className="invoice-footer text-center">
        <p>
          Synconics Technologies Pvt. Ltd. | synconics@gmail.com | Tax ID:
          5897696587485452
        </p>
      </div>
    </div>
  );
};

export default Invoices;
