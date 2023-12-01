import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput, Textarea} from 'flowbite-react';

export default function UploadBook() {
    const bookCategories = [
        "Fiction",
        "Non-Fiction",
        "Mystery",
        "Progressive",
        "Science Fiction",
        "Fantasy",
        "Horror",
        "Bibliography",
        "Autobiography",
        "History",
        "Self-Help",
        "Memoir",
        "Business",
        "Children Books", 
        "Travel",
        "Religion",
        "Art and Design"
    ]

    const [selectBookCategory, setSelectedBookCategory] = useState(bookCategories[0])

    const handleChangeSelectedValue = (event) => {
        console.log(event.target.value)
        setSelectedBookCategory(event.target.value)

    }

    const handleBookSubmit = (event) => {
        event.preventDefault();
        // const [bookTitle, setBookTItle] = useState('');
        // const [authorName, setAuthorName] = useState('');
        // const [imageURL, setImageURL] = useState('');
        // const [category, setCategory] = useState('');
        // const [bookDescription, setBookDescription] = useState('');
        // const [bookPDFURL, setBookPDFURL] = useState('');
        const form = event.target;
        const bookTitle = form.bookTitle.value;
        const authorName = form.authorName.value;
        const imageURL = form.imageURL.value;
        const category = form.categoryName.value;
        const bookDescription = form.bookDescription.value;
        const bookPDFURL = form.bookPDFURL.value;
        
        const bookObject = {
            bookTitle,authorName,imageURL,category,bookDescription, bookPDFURL
        }

        console.log(bookObject)

        // Send data to the database
        fetch("http://localhost:5000/upload-book", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(bookObject)
        }).then(res => res.json()).then(data => {
            console.log(data)
            alert("Book uploaded successfully!!!")
            form.reset();
        })

        
    }


  return (
    <div className='px-4 my-12'>
        <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>
        
        <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4" onSubmit={handleBookSubmit}>
            
            <div className='flex gap-8'>
                
                {/* Name of the Book */}
                <div className="lg:w-1/2">
                    <div className='mb-2 block'>
                        <Label htmlFor="bookTitle" value="Book Title" />
                    </div>
                    <TextInput id="bookTitle" type="text" placeholder="Book Title" name="bookTitle" required />                
                </div>

                
                <div className="lg:w-1/2">
                    <div className='mb-2 block'>
                        <Label htmlFor="authorName" value="Author Name" />
                    </div>
                    <TextInput id="authorName" type="text" placeholder="Author name" name="authorName" required />                
                </div>
            </div>

            <div className='flex gap-8'>
                <div className="lg:w-1/2">
                    <div className='mb-2 block'>
                        <Label htmlFor="ImageURL" value="ImageURL" />
                    </div>
                    <TextInput id="imageURL" type="text" placeholder="Image URL" name="imageURL" required />                
                </div>

                <div className="lg:w-1/2">
                    <div className='mb-2 block'>
                        <Label htmlFor="bookCategory" value="Category" />
                    </div>
                    <Select id="inputState" name="categoryName" className='w-full rounded' value={setSelectedBookCategory} onChange={handleChangeSelectedValue}>
                        {
                            bookCategories.map((options) => <option key={options} >{options}</option>)
                        }
                    </Select>           
                </div>
            </div>  
            
            {/* Book Description */}
            <div>
                <div className="mb-2 block">
                <Label htmlFor="bookDescription" value="Book Description" />
                </div>
                <Textarea 
                    id="bookdescription"
                    placeholder="Book Description..."
                    required
                    rows={5}
                    className='w-full'
                    name="bookDescription"
                />
            </div>

            {/* Book PDF */}
            <div>
                <div className="mb-2 block">
                <Label htmlFor="bookPDFURL" value="Book PDF URL" />
                </div>
                <TextInput id="bookPDFURL" name="bookPDFURL" type="text" placeholder="bookPDFURL" required /> 
            </div>
        
            <Button type="submit" className='mt-5'>Upload Book</Button>
        </form>
    </div>
  )
}
