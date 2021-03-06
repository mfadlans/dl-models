require("should");
var validateUnit = require('./unit-validator');
var validateMachineType = require('./machine-type-validator');
var validateStep = require('./step-validator');
var validateMachineEvent = require('./machine-event-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);


    data.should.have.property('code');
    data.code.should.instanceOf(String);

    data.should.have.property('name');
    data.name.should.instanceOf(String);

    data.should.have.property('unitId');
    data.unitId.should.instanceOf(Object);

    data.should.have.property('unit');
    data.unit.should.instanceOf(Object);
    validateUnit(data.unit);

    data.should.have.property('stepId');
    data.stepId.should.instanceOf(Object);

    data.should.have.property('step');
    data.step.should.instanceOf(Object);
    validateStep(data.step);

    data.should.have.property('process');
    data.process.should.instanceOf(String);

    data.should.have.property('manufacture');
    data.manufacture.should.instanceOf(String);

    data.should.have.property('year');
    data.year.should.instanceOf(Number);

    data.should.have.property('condition');
    data.condition.should.instanceOf(String);

    data.should.have.property('machineTypeId');
    data.machineTypeId.should.instanceOf(Object);

    data.should.have.property('machineType');
    data.machineType.should.instanceOf(Object);
    validateMachineType(data.machineType);

    for (var machineEvent of data.machineEvents) {
        validateMachineEvent(machineEvent);
    }

    data.should.have.property('monthlyCapacity');
    data.monthlyCapacity.should.instanceOf(Number);
};