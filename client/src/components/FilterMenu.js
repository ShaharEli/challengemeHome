import React, { useEffect, useState } from 'react';
import ChooseLabels from './ChooseLabels'
import ChooseTime from './ChooseTime'
import ChooseCategory from './ChooseCategory'
import './FilterMenu.css'
import './FilterMenuDark.css'
import { Button } from '@material-ui/core';

import ThemeApi from "../services/Theme"


const FilterMenu =( {formerSelection,updateFilters}) => {
  //filters must have a value that's either a number/string or an array of such
  const {labels:formerLabels,time:formerTime} = formerSelection
  const [labels,setLabels]  =useState(formerLabels||[])
  const [time,setTime]  = useState(formerTime||100)
  const [open,setOpen]  = useState(false)
  
  const darkMode = React.useContext(ThemeApi).darkTheme
  
  const submit= () => {
    updateFilters({labels,time})
    setOpen(false);
  }
  const clear= () => {
    updateFilters({labels:[],time:100})
    setOpen(false);
  }
  const close= () => {
    setOpen(false);
  }
  
  const toggleOpenClick = () => {
    if(open){
      close()
    }else{
      setOpen(true)
    }
    
  }

  const menuClass = open?'open filters':'filters'
  const darkClass = darkMode?'filterMenu dark':'filterMenu'
  
  return (
    <div className={darkClass}>
      <div className={menuClass}>
      <h3>
      FILTERS
      </h3>

      <div>
        <div className='buttons'>

          <Button 
            className='filterSubmit' 
            variant={darkMode?'outlined':'contained'}
            color='primary'
            onClick={submit} >
            submit
          </Button>
          
          <Button 
            className='filterClear' 
            variant={darkMode?'outlined':'contained'}
            color='secondary'
            onClick={clear} >
            clear
          </Button>
          
          <Button 
            className='filterCancel' 
            variant={darkMode?'outlined':'contained'}
            color='default'
            onClick={close} >
            cancel
          </Button>
          
        </div>
        <ChooseLabels submitFilter={setLabels} />
        <ChooseTime submitFilter={setTime} />
      
      </div>
      </div>
      <div className='toggleOpen' 
      onClick={toggleOpenClick} />
    </div>
    );
}
export default FilterMenu 