// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: nft/query.proto

package types

import (
	context "context"
	fmt "fmt"
	query "github.com/cosmos/cosmos-sdk/types/query"
	_ "github.com/gogo/protobuf/gogoproto"
	grpc1 "github.com/gogo/protobuf/grpc"
	proto "github.com/gogo/protobuf/proto"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type QueryDenomRequest struct {
	DenomId string `protobuf:"bytes,1,opt,name=denom_id,json=denomId,proto3" json:"denom_id,omitempty" yaml:"denom_id"`
}

func (m *QueryDenomRequest) Reset()         { *m = QueryDenomRequest{} }
func (m *QueryDenomRequest) String() string { return proto.CompactTextString(m) }
func (*QueryDenomRequest) ProtoMessage()    {}
func (*QueryDenomRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_ce02d034d3adf2e9, []int{0}
}
func (m *QueryDenomRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryDenomRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryDenomRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryDenomRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryDenomRequest.Merge(m, src)
}
func (m *QueryDenomRequest) XXX_Size() int {
	return m.Size()
}
func (m *QueryDenomRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryDenomRequest.DiscardUnknown(m)
}

var xxx_messageInfo_QueryDenomRequest proto.InternalMessageInfo

func (m *QueryDenomRequest) GetDenomId() string {
	if m != nil {
		return m.DenomId
	}
	return ""
}

type QueryDenomResponse struct {
	Denom *Denom `protobuf:"bytes,1,opt,name=denom,proto3" json:"denom,omitempty"`
}

func (m *QueryDenomResponse) Reset()         { *m = QueryDenomResponse{} }
func (m *QueryDenomResponse) String() string { return proto.CompactTextString(m) }
func (*QueryDenomResponse) ProtoMessage()    {}
func (*QueryDenomResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_ce02d034d3adf2e9, []int{1}
}
func (m *QueryDenomResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryDenomResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryDenomResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryDenomResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryDenomResponse.Merge(m, src)
}
func (m *QueryDenomResponse) XXX_Size() int {
	return m.Size()
}
func (m *QueryDenomResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryDenomResponse.DiscardUnknown(m)
}

var xxx_messageInfo_QueryDenomResponse proto.InternalMessageInfo

func (m *QueryDenomResponse) GetDenom() *Denom {
	if m != nil {
		return m.Denom
	}
	return nil
}

type QueryDenomsRequest struct {
	Pagination *query.PageRequest `protobuf:"bytes,1,opt,name=pagination,proto3" json:"pagination,omitempty"`
}

func (m *QueryDenomsRequest) Reset()         { *m = QueryDenomsRequest{} }
func (m *QueryDenomsRequest) String() string { return proto.CompactTextString(m) }
func (*QueryDenomsRequest) ProtoMessage()    {}
func (*QueryDenomsRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_ce02d034d3adf2e9, []int{2}
}
func (m *QueryDenomsRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryDenomsRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryDenomsRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryDenomsRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryDenomsRequest.Merge(m, src)
}
func (m *QueryDenomsRequest) XXX_Size() int {
	return m.Size()
}
func (m *QueryDenomsRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryDenomsRequest.DiscardUnknown(m)
}

var xxx_messageInfo_QueryDenomsRequest proto.InternalMessageInfo

func (m *QueryDenomsRequest) GetPagination() *query.PageRequest {
	if m != nil {
		return m.Pagination
	}
	return nil
}

type QueryDenomsResponse struct {
	Denoms     []Denom             `protobuf:"bytes,1,rep,name=denoms,proto3" json:"denoms"`
	Pagination *query.PageResponse `protobuf:"bytes,2,opt,name=pagination,proto3" json:"pagination,omitempty"`
}

func (m *QueryDenomsResponse) Reset()         { *m = QueryDenomsResponse{} }
func (m *QueryDenomsResponse) String() string { return proto.CompactTextString(m) }
func (*QueryDenomsResponse) ProtoMessage()    {}
func (*QueryDenomsResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_ce02d034d3adf2e9, []int{3}
}
func (m *QueryDenomsResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryDenomsResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryDenomsResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryDenomsResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryDenomsResponse.Merge(m, src)
}
func (m *QueryDenomsResponse) XXX_Size() int {
	return m.Size()
}
func (m *QueryDenomsResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryDenomsResponse.DiscardUnknown(m)
}

var xxx_messageInfo_QueryDenomsResponse proto.InternalMessageInfo

func (m *QueryDenomsResponse) GetDenoms() []Denom {
	if m != nil {
		return m.Denoms
	}
	return nil
}

func (m *QueryDenomsResponse) GetPagination() *query.PageResponse {
	if m != nil {
		return m.Pagination
	}
	return nil
}

func init() {
	proto.RegisterType((*QueryDenomRequest)(nil), "plugchain.nft.QueryDenomRequest")
	proto.RegisterType((*QueryDenomResponse)(nil), "plugchain.nft.QueryDenomResponse")
	proto.RegisterType((*QueryDenomsRequest)(nil), "plugchain.nft.QueryDenomsRequest")
	proto.RegisterType((*QueryDenomsResponse)(nil), "plugchain.nft.QueryDenomsResponse")
}

func init() { proto.RegisterFile("nft/query.proto", fileDescriptor_ce02d034d3adf2e9) }

var fileDescriptor_ce02d034d3adf2e9 = []byte{
	// 447 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x84, 0x92, 0x41, 0x8b, 0x13, 0x31,
	0x14, 0xc7, 0x9b, 0xd5, 0x56, 0x8d, 0x94, 0x62, 0x76, 0x85, 0x32, 0xc8, 0x6c, 0xcd, 0x41, 0x65,
	0x0f, 0x09, 0x5b, 0xc1, 0x83, 0x27, 0xa9, 0xa2, 0x78, 0x91, 0xda, 0xa3, 0x08, 0x92, 0x4e, 0xd3,
	0xec, 0xe0, 0x34, 0x6f, 0xb6, 0xc9, 0xa8, 0x45, 0xbc, 0xf8, 0x09, 0x44, 0xbf, 0xd4, 0x1e, 0x17,
	0xbc, 0x78, 0x5a, 0xa5, 0xf5, 0x13, 0xf8, 0x09, 0x64, 0x92, 0x8c, 0xce, 0x28, 0xbb, 0x7b, 0x4b,
	0x78, 0xff, 0xf7, 0xff, 0xff, 0x5e, 0x5e, 0x70, 0x4f, 0xcf, 0x2d, 0x3f, 0x2c, 0xe4, 0x72, 0xc5,
	0xf2, 0x25, 0x58, 0x20, 0xdd, 0x3c, 0x2b, 0x54, 0x72, 0x20, 0x52, 0xcd, 0xf4, 0xdc, 0x46, 0x3b,
	0x0a, 0x14, 0xb8, 0x0a, 0x2f, 0x4f, 0x5e, 0x14, 0xdd, 0x50, 0x00, 0x2a, 0x93, 0x5c, 0xe4, 0x29,
	0x17, 0x5a, 0x83, 0x15, 0x36, 0x05, 0x6d, 0x42, 0x75, 0x2f, 0x01, 0xb3, 0x00, 0xc3, 0xa7, 0xc2,
	0x48, 0xef, 0xcd, 0xdf, 0xec, 0x4f, 0xa5, 0x15, 0xfb, 0x3c, 0x17, 0x2a, 0xd5, 0x4e, 0x1c, 0xb4,
	0xdd, 0x32, 0x5f, 0xcf, 0xad, 0xbf, 0xd2, 0x87, 0xf8, 0xda, 0xf3, 0xb2, 0xe1, 0x91, 0xd4, 0xb0,
	0x98, 0xc8, 0xc3, 0x42, 0x1a, 0x4b, 0x18, 0xbe, 0x3c, 0x2b, 0xef, 0xaf, 0xd2, 0x59, 0x1f, 0x0d,
	0xd0, 0x9d, 0x2b, 0xa3, 0xed, 0x5f, 0x27, 0xbb, 0xbd, 0x95, 0x58, 0x64, 0xf7, 0x69, 0x55, 0xa1,
	0x93, 0x4b, 0xee, 0xf8, 0x74, 0x46, 0x1f, 0x60, 0x52, 0x37, 0x31, 0x39, 0x68, 0x23, 0xc9, 0x1e,
	0x6e, 0x3b, 0x81, 0xb3, 0xb8, 0x3a, 0xdc, 0x61, 0x8d, 0x41, 0x99, 0x17, 0x7b, 0x09, 0x7d, 0x59,
	0x77, 0x30, 0x15, 0xc7, 0x63, 0x8c, 0xff, 0xf2, 0x07, 0x9b, 0x5b, 0xcc, 0x0f, 0xcb, 0xca, 0x61,
	0x99, 0x7f, 0xc8, 0x30, 0x2c, 0x1b, 0x0b, 0x25, 0x43, 0xef, 0xa4, 0xd6, 0x49, 0x3f, 0x23, 0xbc,
	0xdd, 0xb0, 0x0f, 0x84, 0x43, 0xdc, 0x71, 0xf1, 0xa6, 0x8f, 0x06, 0x17, 0x4e, 0x43, 0x1c, 0x5d,
	0x3c, 0x3a, 0xd9, 0x6d, 0x4d, 0x82, 0x92, 0x3c, 0x69, 0x30, 0x6d, 0x39, 0xa6, 0xdb, 0xe7, 0x32,
	0xf9, 0xc0, 0x3a, 0xd4, 0xf0, 0x3b, 0xc2, 0x6d, 0x07, 0x45, 0x34, 0x6e, 0xbb, 0x24, 0x32, 0xf8,
	0x27, 0xff, 0xbf, 0xcd, 0x44, 0x37, 0xcf, 0x50, 0xf8, 0x0c, 0x3a, 0xf8, 0xf8, 0xf5, 0xe7, 0x97,
	0xad, 0x88, 0xf4, 0xf9, 0xbb, 0x72, 0xcf, 0xdc, 0x73, 0xf3, 0xf7, 0xd5, 0xde, 0x3e, 0x90, 0x39,
	0xee, 0xf8, 0x87, 0x20, 0xa7, 0xdb, 0x55, 0x3b, 0x88, 0xe8, 0x59, 0x92, 0x10, 0x79, 0xdd, 0x45,
	0xf6, 0x48, 0xb7, 0x11, 0x39, 0x1a, 0x1f, 0xad, 0x63, 0x74, 0xbc, 0x8e, 0xd1, 0x8f, 0x75, 0x8c,
	0x3e, 0x6d, 0xe2, 0xd6, 0xf1, 0x26, 0x6e, 0x7d, 0xdb, 0xc4, 0xad, 0x17, 0xf7, 0x54, 0x6a, 0x0f,
	0x8a, 0x29, 0x4b, 0x60, 0xc1, 0x61, 0x29, 0x92, 0x4c, 0x3e, 0x93, 0xf6, 0x2d, 0x2c, 0x5f, 0x8f,
	0xcb, 0x4f, 0x99, 0x40, 0xc6, 0xff, 0x84, 0x06, 0x4b, 0xbb, 0xca, 0xa5, 0x99, 0x76, 0xdc, 0xa7,
	0xbd, 0xfb, 0x3b, 0x00, 0x00, 0xff, 0xff, 0x0c, 0xf8, 0xf5, 0xda, 0x45, 0x03, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// QueryClient is the client API for Query service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type QueryClient interface {
	Denom(ctx context.Context, in *QueryDenomRequest, opts ...grpc.CallOption) (*QueryDenomResponse, error)
	Denoms(ctx context.Context, in *QueryDenomsRequest, opts ...grpc.CallOption) (*QueryDenomsResponse, error)
}

type queryClient struct {
	cc grpc1.ClientConn
}

func NewQueryClient(cc grpc1.ClientConn) QueryClient {
	return &queryClient{cc}
}

func (c *queryClient) Denom(ctx context.Context, in *QueryDenomRequest, opts ...grpc.CallOption) (*QueryDenomResponse, error) {
	out := new(QueryDenomResponse)
	err := c.cc.Invoke(ctx, "/plugchain.nft.Query/Denom", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *queryClient) Denoms(ctx context.Context, in *QueryDenomsRequest, opts ...grpc.CallOption) (*QueryDenomsResponse, error) {
	out := new(QueryDenomsResponse)
	err := c.cc.Invoke(ctx, "/plugchain.nft.Query/Denoms", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// QueryServer is the server API for Query service.
type QueryServer interface {
	Denom(context.Context, *QueryDenomRequest) (*QueryDenomResponse, error)
	Denoms(context.Context, *QueryDenomsRequest) (*QueryDenomsResponse, error)
}

// UnimplementedQueryServer can be embedded to have forward compatible implementations.
type UnimplementedQueryServer struct {
}

func (*UnimplementedQueryServer) Denom(ctx context.Context, req *QueryDenomRequest) (*QueryDenomResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Denom not implemented")
}
func (*UnimplementedQueryServer) Denoms(ctx context.Context, req *QueryDenomsRequest) (*QueryDenomsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Denoms not implemented")
}

func RegisterQueryServer(s grpc1.Server, srv QueryServer) {
	s.RegisterService(&_Query_serviceDesc, srv)
}

func _Query_Denom_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryDenomRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).Denom(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/plugchain.nft.Query/Denom",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).Denom(ctx, req.(*QueryDenomRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Query_Denoms_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryDenomsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).Denoms(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/plugchain.nft.Query/Denoms",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).Denoms(ctx, req.(*QueryDenomsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Query_serviceDesc = grpc.ServiceDesc{
	ServiceName: "plugchain.nft.Query",
	HandlerType: (*QueryServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Denom",
			Handler:    _Query_Denom_Handler,
		},
		{
			MethodName: "Denoms",
			Handler:    _Query_Denoms_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "nft/query.proto",
}

func (m *QueryDenomRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryDenomRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryDenomRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.DenomId) > 0 {
		i -= len(m.DenomId)
		copy(dAtA[i:], m.DenomId)
		i = encodeVarintQuery(dAtA, i, uint64(len(m.DenomId)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *QueryDenomResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryDenomResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryDenomResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Denom != nil {
		{
			size, err := m.Denom.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintQuery(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *QueryDenomsRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryDenomsRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryDenomsRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Pagination != nil {
		{
			size, err := m.Pagination.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintQuery(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *QueryDenomsResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryDenomsResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryDenomsResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Pagination != nil {
		{
			size, err := m.Pagination.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintQuery(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x12
	}
	if len(m.Denoms) > 0 {
		for iNdEx := len(m.Denoms) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.Denoms[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintQuery(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0xa
		}
	}
	return len(dAtA) - i, nil
}

func encodeVarintQuery(dAtA []byte, offset int, v uint64) int {
	offset -= sovQuery(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *QueryDenomRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.DenomId)
	if l > 0 {
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func (m *QueryDenomResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Denom != nil {
		l = m.Denom.Size()
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func (m *QueryDenomsRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Pagination != nil {
		l = m.Pagination.Size()
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func (m *QueryDenomsResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if len(m.Denoms) > 0 {
		for _, e := range m.Denoms {
			l = e.Size()
			n += 1 + l + sovQuery(uint64(l))
		}
	}
	if m.Pagination != nil {
		l = m.Pagination.Size()
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func sovQuery(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozQuery(x uint64) (n int) {
	return sovQuery(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *QueryDenomRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: QueryDenomRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryDenomRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DenomId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.DenomId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *QueryDenomResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: QueryDenomResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryDenomResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Denom", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Denom == nil {
				m.Denom = &Denom{}
			}
			if err := m.Denom.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *QueryDenomsRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: QueryDenomsRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryDenomsRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Pagination", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Pagination == nil {
				m.Pagination = &query.PageRequest{}
			}
			if err := m.Pagination.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *QueryDenomsResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: QueryDenomsResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryDenomsResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Denoms", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Denoms = append(m.Denoms, Denom{})
			if err := m.Denoms[len(m.Denoms)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Pagination", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Pagination == nil {
				m.Pagination = &query.PageResponse{}
			}
			if err := m.Pagination.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipQuery(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthQuery
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupQuery
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthQuery
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthQuery        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowQuery          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupQuery = fmt.Errorf("proto: unexpected end of group")
)
