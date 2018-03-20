# GS Infinity Modules
This is a React component library project made for Web Programmin II course at Reykjavík University.

This project was made by students Gunnar Örn Baldursson and Sæþór Hallgrímsson.

## Features

### Modal
A dialogue modal which can be render child nodes. Method onClose will be triggered when a user clicks outside of modal area or the close icon.

```javascript
import { Modal } from 'gs-infinity-modules';

// jsx
<Modal
    isOpen={this.state.openModal}
    onClose={() => this.setState({openModal: false})}
>
    // Any content here.
</Modal>
```

Includes components `Modal.Title`, `Modal.Body` and `Modal.Footer` for additional styling.

### ProgressBar

```javascript
import { ProgressBar } from 'gs-infinity-modules';

// jsx
<ProgressBar
    progress={50}
    striped={true}
    animated={true}
    state={'success'}
/>
```

### NameCard
Static namecard component.

```javascript
import { NameCard } from 'gs-infinty-modules';


// jsx
<NameCard
    name={"Gunnar Örn Baldursson"}
    imageUrl={"http://profile.jpg"}
    email={"email@mail.com"}
    telephone={"+354 111 1111"}
/>
```

### Carousel
Image slider component

```javascript
import { Carousel } from 'gs-infinity-modules';

// jsx
<Carousel 
    images={[
        'http://image1.png', 
        'http://image2.png'
    ]}
    size={'medium'} // small, medium, large
/>
```

### Col & Row
Grid system using Col and Row components where a row can be diveded into twelve columns. If total size of columns in a row exceeds twelve then the overflowing columns will drop down to next row.

```javascript
import { Col, Row } from 'gs-infinity-modules';

// jsx
<Row>
    <Col size={4}> // Size = 1 - 12
        // Some content here
    </Col>
</Row>
```

### TimePicker
Component to choose time.

```javascript
import { TimePicker } from 'gs-infinity-modules';

// jsx
<TimePicker
    onTimePick={() => {}}
    hour={12} // 12 or 24
/>
```

### DatePicker
Component to choose a date from a calendar.

```javascript
import { DatePicker } from 'gs-infinity-modules';

// jsx
<DatePicker 
    onDatePick={() => {}}
/>
```

### Tabs & Tab

```javascript
import { Tabs, Tab } from 'gs-infinity-modules';

// jsx
<Tabs
    onSelect={() => {}}
    currentSelectedTab={0}
    theme='light'
    layout='horizontal'
>
    <Tab title='Tab 1' selectionKey={0}>Content</Tab>
    <Tab title='Tab 2' selectionKey={1}>Content</Tab>
</Tabs>
```

### CartoonNetworkSpinner
Spins a few cartoon network character images at a given interval.

```javascript
import { CartoonNetworkSpinner } from 'gs-infinity-modules';

// jsx
<CartoonNetworkSpinner interval={5} />
```