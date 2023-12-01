import React, {useState} from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Checkbox, Label, Select, TextInput, Textarea} from 'flowbite-react';

function Edit() {
    const {id} = useParams(); 
    const {bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL} = useLoaderData();
   
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

    const handleBookUpdate = (event) => {
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

        
        // Send data to the database
        // Update this book
        fetch(`http://localhost:5000/book/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bookObject)
        }).then(res => res.json()).then(data => {
            alert("Book has been updated successfully!");
        })
    }


  return (
    <div className='px-4 my-12'>
        <h2 className='mb-8 text-3xl font-bold'>Update Book Data</h2>
        
        <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4" onSubmit={handleBookUpdate}>
            
            <div className='flex gap-8'>
                
                {/* Name of the Book */}
                <div className="lg:w-1/2">
                    <div className='mb-2 block'>
                        <Label htmlFor="bookTitle" value="Book Title" />
                    </div>
                    <TextInput id="bookTitle" type="text" placeholder="Book Title" name="bookTitle" required defaultValue={bookTitle} />                
                </div>

                
                <div className="lg:w-1/2">
                    <div className='mb-2 block'>
                        <Label htmlFor="authorName" value="Author Name" />
                    </div>
                    <TextInput id="authorName" type="text" placeholder="Author name" name="authorName" required defaultValue={authorName} />                
                </div>
            </div>

            <div className='flex gap-8'>
                <div className="lg:w-1/2">
                    <div className='mb-2 block'>
                        <Label htmlFor="ImageURL" value="ImageURL" />
                    </div>
                    <TextInput id="imageURL" type="text" placeholder="Image URL" name="imageURL" required defaultValue={imageURL} />                
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
                    defaultValue={bookDescription}
                />
            </div>

            {/* Book PDF */}
            <div>
                <div className="mb-2 block">
                <Label htmlFor="bookPDFURL" value="Book PDF URL" />
                </div>
                <TextInput id="bookPDFURL" name="bookPDFURL" type="text" placeholder="bookPDFURL" required defaultValue={bookPDFURL} /> 
            </div>
        
            <Button type="submit" className='mt-5'>Update this Book</Button>
        </form>
    </div>
  )
}

export default Edit