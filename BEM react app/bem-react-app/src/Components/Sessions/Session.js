import React from 'react';
import './Session.scss'

const Session = () => {
    return (
        <>
            {/* Session section*/}
            <div class="session">

                {/* Sessions Section */}
                <h2 class="session__title">kpmg Sessions</h2>

                <div class="session__container">
                    <div class="session__time-sec">
                        <input class="sessioon__sec-trigger" type="checkbox" name="session" value="1" id="session01" />
                        <label class="session__time-period" for="session01">
                            <div class="session__time-arrow ion-arrow-right-b"></div>
                            <span class="session__time">09:00</span>
                            <span> - </span>
                            <span class="session__time">10:00</span>
                            <strong class="session__time session__time--from1">9am</strong>
                        </label>
                        <div class="session__hidden">
                            <table class="session__ticket-table">
                                <thead>
                                    <tr>
                                        <th>Session ticket</th>
                                        <th>Location</th>
                                        
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="session__ticket-table-td">Scrum</td>
                                        <td class="session__ticket-table-td"><span class="session__location">Bangalore</span><span class="ion-arrow-down-b"></span></td>
                                        <td class="session__ticket-table-td"><span class="session__ticket-delete ion-ios-trash"></span></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="session__add-ticket-btn">Add session</div>
                        </div>
                    </div>
                    <div class="session__time-sec">
                        <input class="sessioon__sec-trigger" type="checkbox" name="session" value="2" id="session02" />
                        <label class="session__time-period" for="session02">
                            <div class="session__time-arrow ion-arrow-right-b"></div>
                            <span class="session__time">10:00</span>
                            <span> - </span>
                            <span class="session__time">13:00</span>
                            <strong class="session__time session__time--from2">10am</strong>
                        </label>
                        <div class="session__hidden">
                            <table class="session__ticket-table">
                                <thead>
                                    <tr>
                                        <th>Session ticket</th>
                                        <th>Location</th>
                                        
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                        <td class="session__ticket-table-td">Work</td>
                                        <td class="session__ticket-table-td"><span class="session__location">Bangalore</span><span class="ion-arrow-down-b"></span></td>
                                        <td class="session__ticket-table-td"><span class="session__ticket-delete ion-ios-trash"></span></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="session__add-ticket-btn">Add session</div>
                        </div>
                    </div>
                    <div class="session__time-sec">
                        <input class="sessioon__sec-trigger" type="checkbox" name="session" value="3" id="session03" />
                        <label class="session__time-period" for="session03">
                            <div class="session__time-arrow ion-arrow-right-b"></div>
                            <span class="session__time">13:00</span>
                            <span> - </span>
                            <span class="session__time">14:00</span>
                            <strong class="session__time session__time--from3">13pm</strong>
                        </label>

                        <div class="session__hidden">
                            <table class="session__ticket-table">
                                <thead>
                                    <tr>
                                        <th>Session ticket</th>
                                        <th>Location</th>
                                        
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                        <td class="session__ticket-table-td">Lunch</td>
                                        <td class="session__ticket-table-td"><span class="session__location">Bangalore</span><span class="ion-arrow-down-b"></span></td>
                                        <td class="session__ticket-table-td"><span class="session__ticket-delete ion-ios-trash"></span></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="session__add-ticket-btn">Add session</div>
                        </div>
                    </div>

                    <div class="session__time-sec">
                        <input class="sessioon__sec-trigger" type="checkbox" name="session" value="4" id="session04" />
                        <label class="session__time-period" for="session04">
                            <div class="session__time-arrow ion-arrow-right-b"></div>
                            <span class="session__time">14:00</span>
                            <span> - </span>
                            <span class="session__time">17:00</span>
                            <strong class="session__time session__time--from4">14pm</strong>
                        </label>

                        <div class="session__hidden">
                            <table class="session__ticket-table">
                                <thead>
                                    <tr>
                                        <th>Session ticket</th>
                                        <th>Location</th>
                                        
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                        <td class="session__ticket-table-td">Work</td>
                                        <td class="session__ticket-table-td"><span class="session__location">Bangalore</span><span class="ion-arrow-down-b"></span></td>
                                        <td class="session__ticket-table-td"><span class="session__ticket-delete ion-ios-trash"></span></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="session__add-ticket-btn">Add session</div>
                        </div>
                    </div>

                    <div class="session__add-session">
                        <span class="session__add-icon ion-plus-circled"></span>
                        <span>New session</span>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Session;
