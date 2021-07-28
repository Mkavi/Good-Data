import {
    modifyMeasure,
    newArithmeticMeasure,
    newMeasure,
    modifySimpleMeasure,
    modifyAttribute,
    newAttribute,
} from "@gooddata/sdk-model";
import { workspace } from "../constants";
import * as Ldm from "./full";


export const productIdAttributeIdentifier = "attr.products.productid";
export const customerIdAttributeIdentifier = "attr.customers.customerid";
export const productCategoryIdentifier = "attr.products.product_category";
export const customerRegionIdentifier = "attr.customers.customer_region";