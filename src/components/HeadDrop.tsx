import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Button } from "@/components/ui/button"
  


// Define the type for each item in the array
interface DataItem {
  id: string;
  title: string;
}

// Define the props type for the HeadDrop component
interface HeadDropProps {
  dataArray: DataItem[]; // Array of objects with id and name
  setId: (id: string) => void; // Function to handle selection

  id: string; // String for the name
}

const HeadDrop: React.FC<HeadDropProps> = ({ dataArray, setId,  id}) => {
    const heading = dataArray.find((item) => item.id === id)?.title
  return (
    <DropdownMenu>
  <DropdownMenuTrigger className='w-fit'>
  <Button variant="outline" className='text-green-5 border-2 border-green-5'>{heading} <FontAwesomeIcon size='sm' className='ms-2 w-[10px]' icon={faCaretDown} /></Button>
    </DropdownMenuTrigger>
  <DropdownMenuContent className='max-h-[300px]  overflow-auto'>
    <DropdownMenuLabel>Select Option</DropdownMenuLabel>
    <DropdownMenuSeparator />
    {dataArray.map((item) => (
      <DropdownMenuItem
        key={item.title}
        onClick={() => {
        
          setId(item.id);
        }}
      >
        {item.title}
      </DropdownMenuItem>
    ))}
    
  </DropdownMenuContent>
</DropdownMenu>

  );
}

export default HeadDrop;
