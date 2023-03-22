<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Customer;

class CustomerController extends Controller
{
    /**
     * Display a listing of the customer.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('Customers/Customer');
    }

    /**
     * Show the form for creating a new customer.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created customer in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        Customer::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'service' => $request->service
        ]);

        return redirect('/');
    }

    /**
     * Display the specified customer.
     *
     * @param  \App\Models\Customer  $customer
     */
    public function show(Customer $customer)
    {
        //
    }

    /**
     * Show the form for editing the specified customer.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Inertia\Response
     */
    public function edit()
    {
        //
    }

    /**
     * Update the specified customer in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Customer  $ngo
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request, Customer $customer)
    {
        //
    }

    /**
     * Remove the specified customer from storage.
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Customer $customer)
    {
        //
    }
}