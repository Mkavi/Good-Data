/* eslint-disable */

/* THIS FILE WAS AUTO-GENERATED USING CATALOG EXPORTER; YOU SHOULD NOT EDIT THIS FILE; GENERATE TIME: 2021-06-14T15:55:11.043Z; */
// @ts-ignore ignore unused imports here if they happen (e.g. when there is no measure in the workspace)
import { newAttribute, newMeasure, idRef } from "@gooddata/sdk-model";
/**
 * Attribute Title: Customer City
 * Attribute ID: attr.customers.customer_city
 */

export const CustomerCity = newAttribute("label.customers.customer_city");
/**
 * Attribute Title: Customer Id
 * Attribute ID: attr.customers.customerid
 */

export const CustomerId = newAttribute("label.customers.customerid");
/**
 * Attribute Title: Customer Name
 * Attribute ID: attr.customers.customer_name
 */

export const CustomerName = newAttribute("label.customers.customer_name");
/**
 * Attribute Title: Customer Region
 * Attribute ID: attr.customers.customer_region
 */

export const CustomerRegion = newAttribute("label.customers.customer_region");
/**
 * Attribute Title: Customer State
 * Attribute ID: attr.customers.customer_state
 */

export const CustomerState = newAttribute("label.customers.customer_state");
/**
 * Attribute Title: Order Id
 * Attribute ID: attr.orderlines.orderid
 */

export const OrderId = newAttribute("label.orderlines.orderid");
/**
 * Attribute Title: Order Status
 * Attribute ID: attr.orderlines.order_status
 */

export const OrderStatus = newAttribute("label.orderlines.order_status");
/**
 * Attribute Title: Product Category
 * Attribute ID: attr.products.product_category
 */

export const ProductCategory = newAttribute("label.products.product_category");
/**
 * Attribute Title: Product Id
 * Attribute ID: attr.products.productid
 */

export const ProductId = newAttribute("label.products.productid");
/**
 * Attribute Title: Product Name
 * Attribute ID: attr.products.product_name
 */

export const ProductName = newAttribute("label.products.product_name");
/**
 * Metric Title: # Orders
 * Metric ID: abitUNiGeSYG
 * Metric Type: MAQL Metric
 */

export const NrOrders = newMeasure(idRef("abitUNiGeSYG", "measure"));
/**
 * Metric Title: Cancelled
 * Metric ID: abLtUXDqbMZN
 * Metric Type: MAQL Metric
 */

export const Cancelled = newMeasure(idRef("abLtUXDqbMZN", "measure"));
/**
 * Metric Title: Delivered
 * Metric ID: ac6tLxDmebO7
 * Metric Type: MAQL Metric
 */

export const Delivered = newMeasure(idRef("ac6tLxDmebO7", "measure"));
/**
 * Metric Title: month/year
 * Metric ID: abemTcNMcpgI
 * Metric Type: MAQL Metric
 */

export const MonthYear = newMeasure(idRef("abemTcNMcpgI", "measure"));
/**
 * Metric Title: PREVIOUS
 * Metric ID: abXmyqO4aS4g
 * Metric Type: MAQL Metric
 */

export const PREVIOUS = newMeasure(idRef("abXmyqO4aS4g", "measure"));
/**
 * Metric Title: Returned
 * Metric ID: acltRLTPbQaV
 * Metric Type: MAQL Metric
 */

export const Returned = newMeasure(idRef("acltRLTPbQaV", "measure"));
/**
 * Fact Title: Amount
 * Fact ID: fact.orderlines.amount
 */

export const Amount = {
  /**
   * Fact Title: Amount
   * Fact ID: fact.orderlines.amount
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("fact.orderlines.amount", "fact"), m => m.aggregation("sum"))
  /**
   * Fact Title: Amount
   * Fact ID: fact.orderlines.amount
   * Fact Aggregation: count
   */
  ,
  Count: newMeasure(idRef("fact.orderlines.amount", "fact"), m => m.aggregation("count"))
  /**
   * Fact Title: Amount
   * Fact ID: fact.orderlines.amount
   * Fact Aggregation: avg
   */
  ,
  Avg: newMeasure(idRef("fact.orderlines.amount", "fact"), m => m.aggregation("avg"))
  /**
   * Fact Title: Amount
   * Fact ID: fact.orderlines.amount
   * Fact Aggregation: min
   */
  ,
  Min: newMeasure(idRef("fact.orderlines.amount", "fact"), m => m.aggregation("min"))
  /**
   * Fact Title: Amount
   * Fact ID: fact.orderlines.amount
   * Fact Aggregation: max
   */
  ,
  Max: newMeasure(idRef("fact.orderlines.amount", "fact"), m => m.aggregation("max"))
  /**
   * Fact Title: Amount
   * Fact ID: fact.orderlines.amount
   * Fact Aggregation: median
   */
  ,
  Median: newMeasure(idRef("fact.orderlines.amount", "fact"), m => m.aggregation("median"))
  /**
   * Fact Title: Amount
   * Fact ID: fact.orderlines.amount
   * Fact Aggregation: runsum
   */
  ,
  Runsum: newMeasure(idRef("fact.orderlines.amount", "fact"), m => m.aggregation("runsum"))
};
/**
 * Fact Title: Price
 * Fact ID: fact.orderlines.price
 */

export const Price = {
  /**
   * Fact Title: Price
   * Fact ID: fact.orderlines.price
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("fact.orderlines.price", "fact"), m => m.aggregation("sum"))
  /**
   * Fact Title: Price
   * Fact ID: fact.orderlines.price
   * Fact Aggregation: count
   */
  ,
  Count: newMeasure(idRef("fact.orderlines.price", "fact"), m => m.aggregation("count"))
  /**
   * Fact Title: Price
   * Fact ID: fact.orderlines.price
   * Fact Aggregation: avg
   */
  ,
  Avg: newMeasure(idRef("fact.orderlines.price", "fact"), m => m.aggregation("avg"))
  /**
   * Fact Title: Price
   * Fact ID: fact.orderlines.price
   * Fact Aggregation: min
   */
  ,
  Min: newMeasure(idRef("fact.orderlines.price", "fact"), m => m.aggregation("min"))
  /**
   * Fact Title: Price
   * Fact ID: fact.orderlines.price
   * Fact Aggregation: max
   */
  ,
  Max: newMeasure(idRef("fact.orderlines.price", "fact"), m => m.aggregation("max"))
  /**
   * Fact Title: Price
   * Fact ID: fact.orderlines.price
   * Fact Aggregation: median
   */
  ,
  Median: newMeasure(idRef("fact.orderlines.price", "fact"), m => m.aggregation("median"))
  /**
   * Fact Title: Price
   * Fact ID: fact.orderlines.price
   * Fact Aggregation: runsum
   */
  ,
  Runsum: newMeasure(idRef("fact.orderlines.price", "fact"), m => m.aggregation("runsum"))
};
/**
 * Fact Title: Quantity
 * Fact ID: fact.orderlines.quantity
 */

export const Quantity = {
  /**
   * Fact Title: Quantity
   * Fact ID: fact.orderlines.quantity
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("fact.orderlines.quantity", "fact"), m => m.aggregation("sum"))
  /**
   * Fact Title: Quantity
   * Fact ID: fact.orderlines.quantity
   * Fact Aggregation: count
   */
  ,
  Count: newMeasure(idRef("fact.orderlines.quantity", "fact"), m => m.aggregation("count"))
  /**
   * Fact Title: Quantity
   * Fact ID: fact.orderlines.quantity
   * Fact Aggregation: avg
   */
  ,
  Avg: newMeasure(idRef("fact.orderlines.quantity", "fact"), m => m.aggregation("avg"))
  /**
   * Fact Title: Quantity
   * Fact ID: fact.orderlines.quantity
   * Fact Aggregation: min
   */
  ,
  Min: newMeasure(idRef("fact.orderlines.quantity", "fact"), m => m.aggregation("min"))
  /**
   * Fact Title: Quantity
   * Fact ID: fact.orderlines.quantity
   * Fact Aggregation: max
   */
  ,
  Max: newMeasure(idRef("fact.orderlines.quantity", "fact"), m => m.aggregation("max"))
  /**
   * Fact Title: Quantity
   * Fact ID: fact.orderlines.quantity
   * Fact Aggregation: median
   */
  ,
  Median: newMeasure(idRef("fact.orderlines.quantity", "fact"), m => m.aggregation("median"))
  /**
   * Fact Title: Quantity
   * Fact ID: fact.orderlines.quantity
   * Fact Aggregation: runsum
   */
  ,
  Runsum: newMeasure(idRef("fact.orderlines.quantity", "fact"), m => m.aggregation("runsum"))
};
/**
 * Attribute Title: Year (Date)
 * Attribute ID: date.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateYear = newAttribute("date.year.default");
/**
 * Attribute Title: Quarter (Date)
 * Attribute ID: date.quarter.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateQuarter = newAttribute("date.quarter.in.year.default");
/**
 * Attribute Title: Week (Sun-Sat)/Year (Date)
 * Attribute ID: date.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateWeekSunSatYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (Date)
   * Display Form ID: date.week.wk_year
   */
  WeekNrYear: newAttribute("date.week.wk_year")
  /**
   * Display Form Title: Week Starting (Date)
   * Display Form ID: date.week.starting
   */
  ,
  WeekStarting: newAttribute("date.week.starting")
  /**
   * Display Form Title: From - To (Date)
   * Display Form ID: date.week.from_to
   */
  ,
  FromTo: newAttribute("date.week.from_to")
  /**
   * Display Form Title: Week #/Year (Cont.) (Date)
   * Display Form ID: date.week.wk_year_cont
   */
  ,
  WeekNrYear_1: newAttribute("date.week.wk_year_cont")
  /**
   * Display Form Title: Wk/Qtr/Year (Cont.) (Date)
   * Display Form ID: date.week.wk_qtr_year_cont
   */
  ,
  WkQtrYear: newAttribute("date.week.wk_qtr_year_cont")
  /**
   * Display Form Title: Wk/Qtr/Year (Date)
   * Display Form ID: date.week.wk_qtr_year
   */
  ,
  WkQtrYear_1: newAttribute("date.week.wk_qtr_year")
};
/**
 * Attribute Title: Week (Sun-Sat) (Date)
 * Attribute ID: date.week.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateWeekSunSat = newAttribute("date.week.in.year.number_us");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Date)
 * Attribute ID: date.week.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateWeekSunSatOfQtr = newAttribute("date.week.in.quarter.number_us");
/**
 * Attribute Title: Week (Mon-Sun)/Year (Date)
 * Attribute ID: date.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateWeekMonSunYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (Date)
   * Display Form ID: date.euweek.wk_year
   */
  WeekNrYear: newAttribute("date.euweek.wk_year")
  /**
   * Display Form Title: Week Starting (Date)
   * Display Form ID: date.euweek.starting
   */
  ,
  WeekStarting: newAttribute("date.euweek.starting")
  /**
   * Display Form Title: From - To (Date)
   * Display Form ID: date.euweek.from_to
   */
  ,
  FromTo: newAttribute("date.euweek.from_to")
};
/**
 * Attribute Title: Week (Mon-Sun) (Date)
 * Attribute ID: date.euweek.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateWeekMonSun = newAttribute("date.euweek.in.year.number_eu");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Date)
 * Attribute ID: date.euweek.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateWeekMonSunOfQtr = newAttribute("date.euweek.in.quarter.number_eu");
/**
 * Attribute Title: Month (Date)
 * Attribute ID: date.month.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateMonth = {
  /**
   * Display Form Title: Short (Jan) (Date)
   * Display Form ID: date.month.in.year.short
   */
  Short: newAttribute("date.month.in.year.short")
  /**
   * Display Form Title: Long (January) (Date)
   * Display Form ID: date.month.in.year.long
   */
  ,
  Long: newAttribute("date.month.in.year.long")
  /**
   * Display Form Title: Number (M1) (Date)
   * Display Form ID: date.month.in.year.number
   */
  ,
  Number: newAttribute("date.month.in.year.number")
  /**
   * Display Form Title: M/Q (M1/Q1) (Date)
   * Display Form ID: date.month.in.year.m_q
   */
  ,
  MQ: newAttribute("date.month.in.year.m_q")
};
/**
 * Attribute Title: Month of Quarter (Date)
 * Attribute ID: date.month.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateMonthOfQuarter = newAttribute("date.month.in.quarter.number");
/**
 * Attribute Title: Day of Year (Date)
 * Attribute ID: date.day.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateDayOfYear = newAttribute("date.day.in.year.default");
/**
 * Attribute Title: Day of Week (Sun-Sat) (Date)
 * Attribute ID: date.day.in.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateDayOfWeekSunSat = {
  /**
   * Display Form Title: Short (Sun) (Date)
   * Display Form ID: date.day.in.week.short
   */
  Short: newAttribute("date.day.in.week.short")
  /**
   * Display Form Title: Long (Sunday) (Date)
   * Display Form ID: date.day.in.week.long
   */
  ,
  Long: newAttribute("date.day.in.week.long")
  /**
   * Display Form Title: Number (1=Sunday) (Date)
   * Display Form ID: date.day.in.week.number
   */
  ,
  Number: newAttribute("date.day.in.week.number")
};
/**
 * Attribute Title: Day of Week (Mon-Sun) (Date)
 * Attribute ID: date.day.in.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateDayOfWeekMonSun = {
  /**
   * Display Form Title: Short (Mon) (Date)
   * Display Form ID: date.day.in.euweek.short
   */
  Short: newAttribute("date.day.in.euweek.short")
  /**
   * Display Form Title: Long (Monday) (Date)
   * Display Form ID: date.day.in.euweek.long
   */
  ,
  Long: newAttribute("date.day.in.euweek.long")
  /**
   * Display Form Title: Number (1=Monday) (Date)
   * Display Form ID: date.day.in.euweek.number
   */
  ,
  Number: newAttribute("date.day.in.euweek.number")
};
/**
 * Attribute Title: Day of Quarter (Date)
 * Attribute ID: date.day.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateDayOfQuarter = newAttribute("date.day.in.quarter.default");
/**
 * Attribute Title: Day of Month (Date)
 * Attribute ID: date.day.in.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateDayOfMonth = newAttribute("date.day.in.month.default");
/**
 * Attribute Title: Quarter/Year (Date)
 * Attribute ID: date.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateQuarterYear = newAttribute("date.quarter.short_us");
/**
 * Attribute Title: Month/Year (Date)
 * Attribute ID: date.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateMonthYear = {
  /**
   * Display Form Title: Short (Jan 2010) (Date)
   * Display Form ID: date.month.short
   */
  Short: newAttribute("date.month.short")
  /**
   * Display Form Title: Long (January 2010) (Date)
   * Display Form ID: date.month.long
   */
  ,
  Long: newAttribute("date.month.long")
  /**
   * Display Form Title: Number (1/2010) (Date)
   * Display Form ID: date.month.number
   */
  ,
  Number: newAttribute("date.month.number")
};
/**
 * Attribute Title: Date (Date)
 * Attribute ID: date.date
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateDate = {
  /**
   * Display Form Title: mm/dd/yyyy (Date)
   * Display Form ID: date.date.day.us.mm_dd_yyyy
   */
  MmDdYyyy: newAttribute("date.date.day.us.mm_dd_yyyy")
  /**
   * Display Form Title: yyyy-mm-dd (Date)
   * Display Form ID: date.date.day.yyyy_mm_dd
   */
  ,
  YyyyMmDd: newAttribute("date.date.day.yyyy_mm_dd")
  /**
   * Display Form Title: m/d/yy (no leading zeroes) (Date)
   * Display Form ID: date.date.day.us.m_d_yy
   */
  ,
  MDYy: newAttribute("date.date.day.us.m_d_yy")
  /**
   * Display Form Title: Long (Mon, Jan 1, 2010) (Date)
   * Display Form ID: date.date.day.us.long
   */
  ,
  Long: newAttribute("date.date.day.us.long")
  /**
   * Display Form Title: dd/mm/yyyy (Date)
   * Display Form ID: date.date.day.uk.dd_mm_yyyy
   */
  ,
  DdMmYyyy: newAttribute("date.date.day.uk.dd_mm_yyyy")
  /**
   * Display Form Title: dd-mm-yyyy (Date)
   * Display Form ID: date.date.day.eu.dd_mm_yyyy
   */
  ,
  DdMmYyyy_1: newAttribute("date.date.day.eu.dd_mm_yyyy")
};
/**
 * Attribute Title: US Week Year (Date)
 * Attribute ID: date.year.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateUSWeekYear = newAttribute("date.year.for.week.number");
/**
 * Attribute Title: EU Week Year (Date)
 * Attribute ID: date.year.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateEUWeekYear = newAttribute("date.year.for.euweek.number");
/**
 * Attribute Title: US Week Quarter (Date)
 * Attribute ID: date.quarter.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateUSWeekQuarter = newAttribute("date.quarter.for.week.number");
/**
 * Attribute Title: EU Week Quarter (Date)
 * Attribute ID: date.quarter.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateEUWeekQuarter = newAttribute("date.quarter.for.euweek.number");
/** Available Date Data Sets */

export const DateDatasets = {
  /**
   * Date Data Set Title: Date (Date)
   * Date Data Set ID: date.dataset.dt
   */
  Date: {
    ref: idRef("date.dataset.dt", "dataSet"),
    identifier: "date.dataset.dt"
    /**
     * Date Attribute: Year (Date)
     * Date Attribute ID: date.year
     */
    ,
    Year: {
      ref: idRef("date.year", "attribute"),
      identifier: "date.year"
      /**
       * Display Form Title: Year (Date)
       * Display Form ID: date.year.default
       */
      ,
      Default: newAttribute("date.year.default")
    }
    /**
     * Date Attribute: Quarter (Date)
     * Date Attribute ID: date.quarter.in.year
     */
    ,
    Quarter: {
      ref: idRef("date.quarter.in.year", "attribute"),
      identifier: "date.quarter.in.year"
      /**
       * Display Form Title: default (Date)
       * Display Form ID: date.quarter.in.year.default
       */
      ,
      Default: newAttribute("date.quarter.in.year.default")
    }
    /**
     * Date Attribute: Week (Sun-Sat)/Year (Date)
     * Date Attribute ID: date.week
     */
    ,
    WeekSunSatYear: {
      ref: idRef("date.week", "attribute"),
      identifier: "date.week"
      /**
       * Display Form Title: Week #/Year (W1/2010) (Date)
       * Display Form ID: date.week.wk_year
       */
      ,
      WeekNrYear: newAttribute("date.week.wk_year")
      /**
       * Display Form Title: Week Starting (Date)
       * Display Form ID: date.week.starting
       */
      ,
      WeekStarting: newAttribute("date.week.starting")
      /**
       * Display Form Title: From - To (Date)
       * Display Form ID: date.week.from_to
       */
      ,
      FromTo: newAttribute("date.week.from_to")
      /**
       * Display Form Title: Week #/Year (Cont.) (Date)
       * Display Form ID: date.week.wk_year_cont
       */
      ,
      WeekNrYear_1: newAttribute("date.week.wk_year_cont")
      /**
       * Display Form Title: Wk/Qtr/Year (Cont.) (Date)
       * Display Form ID: date.week.wk_qtr_year_cont
       */
      ,
      WkQtrYear: newAttribute("date.week.wk_qtr_year_cont")
      /**
       * Display Form Title: Wk/Qtr/Year (Date)
       * Display Form ID: date.week.wk_qtr_year
       */
      ,
      WkQtrYear_1: newAttribute("date.week.wk_qtr_year")
    }
    /**
     * Date Attribute: Week (Sun-Sat) (Date)
     * Date Attribute ID: date.week.in.year
     */
    ,
    WeekSunSat: {
      ref: idRef("date.week.in.year", "attribute"),
      identifier: "date.week.in.year"
      /**
       * Display Form Title: Number US (Date)
       * Display Form ID: date.week.in.year.number_us
       */
      ,
      NumberUS: newAttribute("date.week.in.year.number_us")
    }
    /**
     * Date Attribute: Week (Sun-Sat) of Qtr (Date)
     * Date Attribute ID: date.week.in.quarter
     */
    ,
    WeekSunSatOfQtr: {
      ref: idRef("date.week.in.quarter", "attribute"),
      identifier: "date.week.in.quarter"
      /**
       * Display Form Title: Number US (Date)
       * Display Form ID: date.week.in.quarter.number_us
       */
      ,
      NumberUS: newAttribute("date.week.in.quarter.number_us")
    }
    /**
     * Date Attribute: Week (Mon-Sun)/Year (Date)
     * Date Attribute ID: date.euweek
     */
    ,
    WeekMonSunYear: {
      ref: idRef("date.euweek", "attribute"),
      identifier: "date.euweek"
      /**
       * Display Form Title: Week #/Year (W1/2010) (Date)
       * Display Form ID: date.euweek.wk_year
       */
      ,
      WeekNrYear: newAttribute("date.euweek.wk_year")
      /**
       * Display Form Title: Week Starting (Date)
       * Display Form ID: date.euweek.starting
       */
      ,
      WeekStarting: newAttribute("date.euweek.starting")
      /**
       * Display Form Title: From - To (Date)
       * Display Form ID: date.euweek.from_to
       */
      ,
      FromTo: newAttribute("date.euweek.from_to")
    }
    /**
     * Date Attribute: Week (Mon-Sun) (Date)
     * Date Attribute ID: date.euweek.in.year
     */
    ,
    WeekMonSun: {
      ref: idRef("date.euweek.in.year", "attribute"),
      identifier: "date.euweek.in.year"
      /**
       * Display Form Title: Number EU (Date)
       * Display Form ID: date.euweek.in.year.number_eu
       */
      ,
      NumberEU: newAttribute("date.euweek.in.year.number_eu")
    }
    /**
     * Date Attribute: Week (Mon-Sun) of Qtr (Date)
     * Date Attribute ID: date.euweek.in.quarter
     */
    ,
    WeekMonSunOfQtr: {
      ref: idRef("date.euweek.in.quarter", "attribute"),
      identifier: "date.euweek.in.quarter"
      /**
       * Display Form Title: Number EU (Date)
       * Display Form ID: date.euweek.in.quarter.number_eu
       */
      ,
      NumberEU: newAttribute("date.euweek.in.quarter.number_eu")
    }
    /**
     * Date Attribute: Month (Date)
     * Date Attribute ID: date.month.in.year
     */
    ,
    Month: {
      ref: idRef("date.month.in.year", "attribute"),
      identifier: "date.month.in.year"
      /**
       * Display Form Title: Short (Jan) (Date)
       * Display Form ID: date.month.in.year.short
       */
      ,
      Short: newAttribute("date.month.in.year.short")
      /**
       * Display Form Title: Long (January) (Date)
       * Display Form ID: date.month.in.year.long
       */
      ,
      Long: newAttribute("date.month.in.year.long")
      /**
       * Display Form Title: Number (M1) (Date)
       * Display Form ID: date.month.in.year.number
       */
      ,
      Number: newAttribute("date.month.in.year.number")
      /**
       * Display Form Title: M/Q (M1/Q1) (Date)
       * Display Form ID: date.month.in.year.m_q
       */
      ,
      MQ: newAttribute("date.month.in.year.m_q")
    }
    /**
     * Date Attribute: Month of Quarter (Date)
     * Date Attribute ID: date.month.in.quarter
     */
    ,
    MonthOfQuarter: {
      ref: idRef("date.month.in.quarter", "attribute"),
      identifier: "date.month.in.quarter"
      /**
       * Display Form Title: Number (Date)
       * Display Form ID: date.month.in.quarter.number
       */
      ,
      Number: newAttribute("date.month.in.quarter.number")
    }
    /**
     * Date Attribute: Day of Year (Date)
     * Date Attribute ID: date.day.in.year
     */
    ,
    DayOfYear: {
      ref: idRef("date.day.in.year", "attribute"),
      identifier: "date.day.in.year"
      /**
       * Display Form Title: default (Date)
       * Display Form ID: date.day.in.year.default
       */
      ,
      Default: newAttribute("date.day.in.year.default")
    }
    /**
     * Date Attribute: Day of Week (Sun-Sat) (Date)
     * Date Attribute ID: date.day.in.week
     */
    ,
    DayOfWeekSunSat: {
      ref: idRef("date.day.in.week", "attribute"),
      identifier: "date.day.in.week"
      /**
       * Display Form Title: Short (Sun) (Date)
       * Display Form ID: date.day.in.week.short
       */
      ,
      Short: newAttribute("date.day.in.week.short")
      /**
       * Display Form Title: Long (Sunday) (Date)
       * Display Form ID: date.day.in.week.long
       */
      ,
      Long: newAttribute("date.day.in.week.long")
      /**
       * Display Form Title: Number (1=Sunday) (Date)
       * Display Form ID: date.day.in.week.number
       */
      ,
      Number: newAttribute("date.day.in.week.number")
    }
    /**
     * Date Attribute: Day of Week (Mon-Sun) (Date)
     * Date Attribute ID: date.day.in.euweek
     */
    ,
    DayOfWeekMonSun: {
      ref: idRef("date.day.in.euweek", "attribute"),
      identifier: "date.day.in.euweek"
      /**
       * Display Form Title: Short (Mon) (Date)
       * Display Form ID: date.day.in.euweek.short
       */
      ,
      Short: newAttribute("date.day.in.euweek.short")
      /**
       * Display Form Title: Long (Monday) (Date)
       * Display Form ID: date.day.in.euweek.long
       */
      ,
      Long: newAttribute("date.day.in.euweek.long")
      /**
       * Display Form Title: Number (1=Monday) (Date)
       * Display Form ID: date.day.in.euweek.number
       */
      ,
      Number: newAttribute("date.day.in.euweek.number")
    }
    /**
     * Date Attribute: Day of Quarter (Date)
     * Date Attribute ID: date.day.in.quarter
     */
    ,
    DayOfQuarter: {
      ref: idRef("date.day.in.quarter", "attribute"),
      identifier: "date.day.in.quarter"
      /**
       * Display Form Title: default (Date)
       * Display Form ID: date.day.in.quarter.default
       */
      ,
      Default: newAttribute("date.day.in.quarter.default")
    }
    /**
     * Date Attribute: Day of Month (Date)
     * Date Attribute ID: date.day.in.month
     */
    ,
    DayOfMonth: {
      ref: idRef("date.day.in.month", "attribute"),
      identifier: "date.day.in.month"
      /**
       * Display Form Title: default (Date)
       * Display Form ID: date.day.in.month.default
       */
      ,
      Default: newAttribute("date.day.in.month.default")
    }
    /**
     * Date Attribute: Quarter/Year (Date)
     * Date Attribute ID: date.quarter
     */
    ,
    QuarterYear: {
      ref: idRef("date.quarter", "attribute"),
      identifier: "date.quarter"
      /**
       * Display Form Title: US Short (Date)
       * Display Form ID: date.quarter.short_us
       */
      ,
      USShort: newAttribute("date.quarter.short_us")
    }
    /**
     * Date Attribute: Month/Year (Date)
     * Date Attribute ID: date.month
     */
    ,
    MonthYear: {
      ref: idRef("date.month", "attribute"),
      identifier: "date.month"
      /**
       * Display Form Title: Short (Jan 2010) (Date)
       * Display Form ID: date.month.short
       */
      ,
      Short: newAttribute("date.month.short")
      /**
       * Display Form Title: Long (January 2010) (Date)
       * Display Form ID: date.month.long
       */
      ,
      Long: newAttribute("date.month.long")
      /**
       * Display Form Title: Number (1/2010) (Date)
       * Display Form ID: date.month.number
       */
      ,
      Number: newAttribute("date.month.number")
    }
    /**
     * Date Attribute: Date (Date)
     * Date Attribute ID: date.date
     */
    ,
    Date: {
      ref: idRef("date.date", "attribute"),
      identifier: "date.date"
      /**
       * Display Form Title: mm/dd/yyyy (Date)
       * Display Form ID: date.date.day.us.mm_dd_yyyy
       */
      ,
      MmDdYyyy: newAttribute("date.date.day.us.mm_dd_yyyy")
      /**
       * Display Form Title: yyyy-mm-dd (Date)
       * Display Form ID: date.date.day.yyyy_mm_dd
       */
      ,
      YyyyMmDd: newAttribute("date.date.day.yyyy_mm_dd")
      /**
       * Display Form Title: m/d/yy (no leading zeroes) (Date)
       * Display Form ID: date.date.day.us.m_d_yy
       */
      ,
      MDYy: newAttribute("date.date.day.us.m_d_yy")
      /**
       * Display Form Title: Long (Mon, Jan 1, 2010) (Date)
       * Display Form ID: date.date.day.us.long
       */
      ,
      Long: newAttribute("date.date.day.us.long")
      /**
       * Display Form Title: dd/mm/yyyy (Date)
       * Display Form ID: date.date.day.uk.dd_mm_yyyy
       */
      ,
      DdMmYyyy: newAttribute("date.date.day.uk.dd_mm_yyyy")
      /**
       * Display Form Title: dd-mm-yyyy (Date)
       * Display Form ID: date.date.day.eu.dd_mm_yyyy
       */
      ,
      DdMmYyyy_1: newAttribute("date.date.day.eu.dd_mm_yyyy")
    }
    /**
     * Date Attribute: US Week Year (Date)
     * Date Attribute ID: date.year.for.week
     */
    ,
    USWeekYear: {
      ref: idRef("date.year.for.week", "attribute"),
      identifier: "date.year.for.week"
      /**
       * Display Form Title: Week Year (Date)
       * Display Form ID: date.year.for.week.number
       */
      ,
      WeekYear: newAttribute("date.year.for.week.number")
    }
    /**
     * Date Attribute: EU Week Year (Date)
     * Date Attribute ID: date.year.for.euweek
     */
    ,
    EUWeekYear: {
      ref: idRef("date.year.for.euweek", "attribute"),
      identifier: "date.year.for.euweek"
      /**
       * Display Form Title: Week Year (Date)
       * Display Form ID: date.year.for.euweek.number
       */
      ,
      WeekYear: newAttribute("date.year.for.euweek.number")
    }
    /**
     * Date Attribute: US Week Quarter (Date)
     * Date Attribute ID: date.quarter.for.week
     */
    ,
    USWeekQuarter: {
      ref: idRef("date.quarter.for.week", "attribute"),
      identifier: "date.quarter.for.week"
      /**
       * Display Form Title: Week Quarter (Date)
       * Display Form ID: date.quarter.for.week.number
       */
      ,
      WeekQuarter: newAttribute("date.quarter.for.week.number")
    }
    /**
     * Date Attribute: EU Week Quarter (Date)
     * Date Attribute ID: date.quarter.for.euweek
     */
    ,
    EUWeekQuarter: {
      ref: idRef("date.quarter.for.euweek", "attribute"),
      identifier: "date.quarter.for.euweek"
      /**
       * Display Form Title: Week Quarter (Date)
       * Display Form ID: date.quarter.for.euweek.number
       */
      ,
      WeekQuarter: newAttribute("date.quarter.for.euweek.number")
    }
  }
};
export const Insights = {
  /**
   * Insight Title: Bucket by Quantity
   * Insight ID: aby4wl6MaOte
   */
  BucketByQuantity: "aby4wl6MaOte"
  /**
   * Insight Title: Bucket by Amount
   * Insight ID: aao4GN5Bf24o
   */
  ,
  BucketByAmount: "aao4GN5Bf24o"
  /**
   * Insight Title: Bucket Analysis by Customer
   * Insight ID: abZ4vj3Dgz5V
   */
  ,
  BucketAnalysisByCustomer: "abZ4vj3Dgz5V"
  /**
   * Insight Title: Top 10 Products by Region
   * Insight ID: abt4T3CjejSr
   */
  ,
  Top10ProductsByRegion: "abt4T3CjejSr"
  /**
   * Insight Title: Product Details
   * Insight ID: abG4RMpBhZyp
   */
  ,
  ProductDetails: "abG4RMpBhZyp"
  /**
   * Insight Title: Order Status
   * Insight ID: ab94Ssflh6Xk
   */
  ,
  OrderStatus_1: "ab94Ssflh6Xk"
  /**
   * Insight Title: Cancelled
   * Insight ID: aag5eRYOa2Ps
   */
  ,
  Cancelled_1: "aag5eRYOa2Ps"
  /**
   * Insight Title: Delivered
   * Insight ID: abo5aPbegxui
   */
  ,
  Delivered_1: "abo5aPbegxui"
  /**
   * Insight Title: Returned
   * Insight ID: abW43txabHfL
   */
  ,
  Returned_1: "abW43txabHfL"
  /**
   * Insight Title: previous
   * Insight ID: ablmTsTqhnNF
   */
  ,
  Previous: "ablmTsTqhnNF"
  /**
   * Insight Title: Barchart
   * Insight ID: abASMn8Zc5GU
   */
  ,
  Barchart: "abASMn8Zc5GU"
  /**
   * Insight Title: Headline
   * Insight ID: abEWHkChd4Bp
   */
  ,
  Headline: "abEWHkChd4Bp"
};
export const Dashboards = {
  /**
   * Dashboard Title: All- Category Analysis
   * Dashboard ID: ach4zem1fMLC
   */
  AllCategoryAnalysis: "ach4zem1fMLC"
  /**
   * Dashboard Title: Orders
   * Dashboard ID: aag5e94nbHf1
   */
  ,
  Orders: "aag5e94nbHf1"
};