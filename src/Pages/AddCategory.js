import React from 'react'

const AddCategory = () => {
  return (
   <>
   <div className='container shadow'>
    <h2 className='text-center my-3'>Add a new category</h2>
    <div className='col-md-12 my-3 d-flex items-center justify-content-center'>
        <div className='row'>
            <form>
                <div className='mb-3'>
                    <label htmlFor="formGroupExampleInput" className='form-label'>
                        Title
                    </label>
                    <input
                    type="text"
                    name="title"
                    className='form-control'
                    id="formGroupExampleInput"
                    placeholder='enter title'
                    />
                </div>
                <div className='mb-3'>
                    <button type="submit" className='btn btn-primary btn-block'>
                        Add Category 
                    </button>
                </div>
            </form>
        </div>
    </div>
   </div>
   </>
  )
}

export default AddCategory;