import React from 'react';


class Eligibility extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <>
                <div className="flex flex-col about-container">                
                    <div className="containers">
                        <h1>Eligibility</h1>
                        <table class="table table-fixed">
                            <thead>
                                <tr>
                                    <th>State</th>
                                    <th>Current Phase</th>
                                    <th>Eligibility Group</th>
                                    <th>Vaccine Availability</th>
                                    <th>Additional Information</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Alabama</td>
                                    <td>Phase 1b</td>
                                    <td>Adults 75 and older and first responders, police officers and firefighters included</td>
                                    <td>Pfizer, Moderna</td>
                                </tr>
                                <tr className="bg-emerald-200">
                                    <td>Alaska</td>
                                </tr>
                                <tr>
                                    <td>Arizona</td>
                                </tr>
                                <tr>
                                    <td>Arkansas</td>
                                </tr>
                                <tr>
                                    <td>California</td>
                                </tr>
                                <tr>
                                    <td>Colorado</td>
                                </tr>
                                <tr>
                                    <td>Connecticut</td>
                                </tr>
                                <tr>
                                    <td>Delaware</td>
                                </tr>
                                <tr>
                                    <td>Florida</td>
                                </tr>
                                <tr>
                                    <td>Hawaii</td>
                                </tr>
                                <tr>
                                    <td>Idaho</td>
                                </tr>
                                <tr>
                                    <td>Illinois</td>
                                </tr>
                                <tr>
                                    <td>Indiana</td>
                                </tr>
                                <tr>
                                    <td>Iowa</td>
                                </tr>
                                <tr>
                                    <td>Kansas</td>
                                </tr>
                                <tr>
                                    <td>Kentucky</td>
                                </tr>
                                <tr>
                                    <td>Louisana</td>
                                </tr>
                                <tr>
                                    <td>Maine</td>
                                </tr>
                                <tr>
                                    <td>Maryland</td>
                                </tr>
                                <tr>
                                    <td>Massachusetts</td>
                                </tr>
                                <tr>
                                    <td>Michigan</td>
                                </tr>
                                <tr>
                                    <td>New York</td>
                                </tr>
                                <tr>
                                    <td>New Jersey</td>
                                </tr>
                                <tr>
                                    <td>North Carolina</td>
                                </tr>
                            </tbody>
                            </table>
                    </div>
                </div>
            </>
        )
    }
}

export default Eligibility;