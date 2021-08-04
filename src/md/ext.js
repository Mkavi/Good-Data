import {
  modifyMeasure,
  newArithmeticMeasure,
  newMeasure,
  modifySimpleMeasure,
  modifyAttribute,
  newAttribute
} from "@gooddata/sdk-model";
import { workspace } from "../constants";
import * as Ldm from "./full";

export const franchiseSalesLocalId = "franchiseSales";
export const LocationNameLocalId = "locationName";

export const productIdAttributeIdentifier = "attr.products.productid";
export const customerIdAttributeIdentifier = "attr.customers.customerid";
export const orderIdAttributeIdentifier = "attr.orderlines.orderid";
export const productCategoryIdentifier = "attr.products.product_category";
export const customerRegionIdentifier = "attr.customers.customer_region";

export const LocationName = modifyAttribute(Ldm.ProductName, a =>
  a.localId(LocationNameLocalId)
);
export const FranchisedSales = modifyMeasure(Ldm.NrOrders, m =>
  m
    .format("#,##0")
    .title("Franchise Sales")
    .localId(franchiseSalesLocalId)
);
