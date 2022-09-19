import React from "react";

export const Box = () => {
  return (
    <div>
      <div id="formdata">
        <form action="" id="form">
          <h2>Enter The Details of Car</h2>
          <select name="" id="brand">
            <option value="">Brand of car</option>
            <option value="Mereceds">Mereceds</option>
            <option value="Maruti Suzuki">Maruti Suzuki</option>
            <option value="Hyundai">Hyundai</option>
            <option value="Toyota">Toyota</option>
            <option value="KIA">KIA</option>
            <option value="Mahindra">Mahindra</option>
            <option value="Tata">Tata</option>
            <option value="Bmw">Bmw</option>
            <option value="Jaguar">Jaguar</option>
            <option value="Audi">Audi</option>
          </select>
          <select name="" id="type">
            <option value="">Type</option>
            <option value="Manual">Manual</option>
            <option value="AMT">AMT</option>
          </select>

          <select name="" id="year">
            <option value="">Year</option>
            <option value="2000">2000</option>
            <option value="2001">2001</option>
            <option value="2002">2002</option>
            <option value="2003">2003</option>
            <option value="2004">2004</option>
            <option value="2005">2005</option>
            <option value="2006">2006</option>
            <option value="2007">2007</option>
            <option value="2008">2008</option>
            <option value="2009">2009</option>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>

          <input type="number" placeholder="KM driven" id="kms" />
          <input type="text" placeholder="Description" id="Description" />
          <input type="number" placeholder="Price" id="Price" />

          <input type="submit" id="submit_Form" />
        </form>
      </div>
    </div>
  );
};
